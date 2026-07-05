"use client";

import { FormEvent, useState } from "react";

const fieldClass =
  "min-h-12 w-full rounded-lg border border-line bg-white px-3 py-2 text-ink outline-none transition placeholder:text-muted/70 focus:border-mint focus:ring-2 focus:ring-mint/20";

const buttonClass =
  "inline-flex min-h-11 items-center justify-center rounded-lg bg-mint px-5 font-bold text-white shadow-[0_12px_24px_rgba(60,165,139,.22)] transition hover:bg-mint-dark disabled:cursor-not-allowed disabled:opacity-70";

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(form);
    const payload = {
      ownerName: String(formData.get("ownerName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      petType: String(formData.get("petType") ?? ""),
      serviceType: String(formData.get("serviceType") ?? ""),
      preferredDate: String(formData.get("preferredDate") ?? ""),
      preferredTimeSlot: String(formData.get("preferredTimeSlot") ?? ""),
      notes: String(formData.get("notes") ?? ""),
    };

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Submit failed");
      }

      form.reset();
      setStatus("success");
      setMessage("预约已提交，我们会在营业时间内电话确认。");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? `提交失败：${error.message}`
          : "提交失败，请稍后重试或直接电话联系我们。",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-3 sm:grid-cols-2">
        <FormLabel label="主人姓名">
          <input className={fieldClass} name="ownerName" type="text" placeholder="请输入姓名" required />
        </FormLabel>
        <FormLabel label="联系电话">
          <input className={fieldClass} name="phone" type="tel" placeholder="请输入手机号" required />
        </FormLabel>
        <FormLabel label="宠物类型">
          <select className={fieldClass} name="petType" defaultValue="狗狗" required>
            <option>狗狗</option>
            <option>猫咪</option>
            <option>其他小宠</option>
          </select>
        </FormLabel>
        <FormLabel label="预约项目">
          <select className={fieldClass} name="serviceType" defaultValue="基础洗护" required>
            <option>基础洗护</option>
            <option>精致洗护造型</option>
            <option>猫咪低应激护理</option>
            <option>皮毛专项护理</option>
          </select>
        </FormLabel>
        <FormLabel label="期望日期">
          <input className={fieldClass} name="preferredDate" type="date" required />
        </FormLabel>
        <FormLabel label="期望时段">
          <select className={fieldClass} name="preferredTimeSlot" defaultValue="10:00-12:00" required>
            <option>10:00-12:00</option>
            <option>12:00-15:00</option>
            <option>15:00-18:00</option>
            <option>18:00-20:00</option>
          </select>
        </FormLabel>
        <FormLabel label="宠物情况与护理备注" className="sm:col-span-2">
          <textarea
            className={`${fieldClass} min-h-28 resize-y`}
            name="notes"
            placeholder="例如：泰迪 5kg，轻微打结，希望保留圆头造型"
          />
        </FormLabel>
        <div className="sm:col-span-2">
          <button className={buttonClass} type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "提交中..." : "提交预约"}
          </button>
          {message ? (
            <p
              className={`mt-3 text-sm font-bold ${
                status === "success" ? "text-mint-dark" : "text-coral"
              }`}
              role="status"
            >
              {message}
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}

function FormLabel({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`grid gap-2 text-sm font-bold text-[#40505e] ${className}`}>
      {label}
      {children}
    </label>
  );
}
