import { NextResponse } from "next/server";
import { Pool } from "pg";

type AppointmentPayload = {
  ownerName?: string;
  phone?: string;
  petType?: string;
  serviceType?: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  notes?: string;
};

const connectionString =
  process.env.SUPABASE_POSTGRES_SESSION_POOL_URL ?? process.env.DATABASE_URL;

const globalForPg = globalThis as typeof globalThis & {
  appointmentPool?: Pool;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonResponse(body: unknown, init: ResponseInit = {}) {
  return NextResponse.json(body, {
    ...init,
    headers: {
      ...corsHeaders,
      ...init.headers,
    },
  });
}

function getPool() {
  if (!connectionString) {
    throw new Error("Missing SUPABASE_POSTGRES_SESSION_POOL_URL or DATABASE_URL");
  }

  globalForPg.appointmentPool ??= new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: 3,
  });

  return globalForPg.appointmentPool;
}

function requiredText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isIsoDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

export async function POST(request: Request) {
  let payload: AppointmentPayload;

  try {
    payload = (await request.json()) as AppointmentPayload;
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, { status: 400 });
  }

  const ownerName = requiredText(payload.ownerName);
  const phone = requiredText(payload.phone);
  const petType = requiredText(payload.petType);
  const serviceType = requiredText(payload.serviceType);
  const preferredDate = requiredText(payload.preferredDate);
  const preferredTimeSlot = requiredText(payload.preferredTimeSlot);
  const notes = requiredText(payload.notes);

  if (!ownerName || !phone || !petType || !serviceType || !preferredDate || !preferredTimeSlot) {
    return jsonResponse({ error: "Missing required appointment fields" }, { status: 400 });
  }

  if (!isIsoDate(preferredDate)) {
    return jsonResponse({ error: "Invalid preferred date" }, { status: 400 });
  }

  try {
    const result = await getPool().query<{ id: string; created_at: string }>(
      `insert into public.appointments (
        owner_name,
        phone,
        pet_type,
        service_type,
        preferred_date,
        preferred_time_slot,
        notes,
        source,
        metadata
      ) values ($1, $2, $3, $4, $5::date, $6, nullif($7, ''), 'website', $8::jsonb)
      returning id, created_at`,
      [
        ownerName,
        phone,
        petType,
        serviceType,
        preferredDate,
        preferredTimeSlot,
        notes,
        JSON.stringify({
          userAgent: request.headers.get("user-agent"),
        }),
      ],
    );

    return jsonResponse({ appointment: result.rows[0] }, { status: 201 });
  } catch (error) {
    console.error("Failed to create appointment", error);
    return jsonResponse({ error: "Database write failed" }, { status: 500 });
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}
