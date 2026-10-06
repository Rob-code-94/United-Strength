import { MEMBERSHIP_INBOX } from "../../src/data/contact";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Same inbox defaults as membership Apply. Override with APPLY_TO_EMAIL. */
const TO_DEFAULT = MEMBERSHIP_INBOX;
const FROM_DEFAULT = "United Strength <onboarding@resend.dev>";

export interface RunClubSignupInput {
  name: string;
  email: string;
  mobile: string;
}

export async function sendRunClubSignup(
  input: RunClubSignupInput,
): Promise<{ ok: true } | { ok: false; status: number }> {
  const name = input.name.trim();
  const email = input.email.trim();
  const mobile = input.mobile.trim();
  if (
    !name ||
    name.length > 120 ||
    !EMAIL.test(email) ||
    email.length > 200 ||
    !mobile ||
    mobile.length > 40
  ) {
    return { ok: false, status: 400 };
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, status: 503 };

  const to = (process.env.APPLY_TO_EMAIL || TO_DEFAULT).trim();
  const from = (process.env.APPLY_FROM_EMAIL || FROM_DEFAULT).trim();
  const text = [`Name: ${name}`, `Email: ${email}`, `Mobile: ${mobile}`].join("\n");

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
        subject: "Run Club signup",
        text,
      }),
    });
    if (!response.ok) return { ok: false, status: 502 };
    return { ok: true };
  } catch {
    return { ok: false, status: 502 };
  }
}
