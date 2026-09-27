const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Todd's membership inbox. Override with APPLY_TO_EMAIL. */
const TO_DEFAULT = "membership@unitedstrengthgym.com";
const FROM_DEFAULT = "United Strength Club <onboarding@resend.dev>";

export interface ApplicationInput {
  name: string;
  email: string;
  phone: string;
  training: string;
}

export async function sendApplication(
  input: ApplicationInput,
): Promise<{ ok: true } | { ok: false; status: number }> {
  const name = input.name.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const training = input.training.trim().slice(0, 2000);
  if (
    !name ||
    name.length > 120 ||
    !EMAIL.test(email) ||
    email.length > 200 ||
    !phone ||
    phone.length > 40
  ) {
    return { ok: false, status: 400 };
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, status: 503 };

  const to = (process.env.APPLY_TO_EMAIL || TO_DEFAULT).trim();
  const from = (process.env.APPLY_FROM_EMAIL || FROM_DEFAULT).trim();
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Training: ${training || "—"}`,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: "Membership Application",
        text,
      }),
    });
    if (!response.ok) return { ok: false, status: 502 };
    return { ok: true };
  } catch {
    return { ok: false, status: 502 };
  }
}

/** Same Resend account as membership applications. */
export async function sendHubReset(input: {
  resetUrl: string;
}): Promise<{ ok: true } | { ok: false; status: number }> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, status: 503 };

  const to = (
    process.env.HUB_RESET_EMAIL ||
    process.env.APPLY_TO_EMAIL ||
    TO_DEFAULT
  ).trim();
  const from = (process.env.APPLY_FROM_EMAIL || FROM_DEFAULT).trim();
  if (!to || !EMAIL.test(to)) return { ok: false, status: 503 };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: "Reset the United Strength hub password",
        text: [
          "Someone asked to reset the brand hub password.",
          "Open this link within 30 minutes to set a new one:",
          input.resetUrl,
          "If you did not ask for this, ignore this email.",
        ].join("\n"),
      }),
    });
    if (!response.ok) return { ok: false, status: 502 };
    return { ok: true };
  } catch {
    return { ok: false, status: 502 };
  }
}
