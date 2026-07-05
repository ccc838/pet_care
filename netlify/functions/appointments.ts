import { Pool } from "pg";

type HandlerEvent = {
  body: string | null;
  headers: Record<string, string | undefined>;
  httpMethod: string;
};

type HandlerResponse = {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
};

type Handler = (event: HandlerEvent) => Promise<HandlerResponse>;

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

let appointmentPool: Pool | undefined;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonResponse(statusCode: number, body: unknown) {
  return {
    statusCode,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}

function getPool() {
  if (!connectionString) {
    throw new Error("Missing SUPABASE_POSTGRES_SESSION_POOL_URL or DATABASE_URL");
  }

  appointmentPool ??= new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: 3,
  });

  return appointmentPool;
}

function requiredText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isIsoDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

export const handler: Handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  let payload: AppointmentPayload;

  try {
    payload = JSON.parse(event.body ?? "{}") as AppointmentPayload;
  } catch {
    return jsonResponse(400, { error: "Invalid JSON body" });
  }

  const ownerName = requiredText(payload.ownerName);
  const phone = requiredText(payload.phone);
  const petType = requiredText(payload.petType);
  const serviceType = requiredText(payload.serviceType);
  const preferredDate = requiredText(payload.preferredDate);
  const preferredTimeSlot = requiredText(payload.preferredTimeSlot);
  const notes = requiredText(payload.notes);

  if (!ownerName || !phone || !petType || !serviceType || !preferredDate || !preferredTimeSlot) {
    return jsonResponse(400, { error: "Missing required appointment fields" });
  }

  if (!isIsoDate(preferredDate)) {
    return jsonResponse(400, { error: "Invalid preferred date" });
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
          userAgent: event.headers["user-agent"],
        }),
      ],
    );

    return jsonResponse(201, { appointment: result.rows[0] });
  } catch (error) {
    console.error("Failed to create appointment", error);
    return jsonResponse(500, { error: "Database write failed" });
  }
};
