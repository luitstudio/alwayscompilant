import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

const limits = {
  name: 100,
  business: 150,
  email: 254,
  phone: 30,
  service: 120,
  message: 4000,
  website: 200,
} as const;

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().replace(/[\r\n]+/g, " ").slice(0, maxLength) : "";
}

function parsePayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object") return null;
  const input = value as Record<string, unknown>;
  const payload: ContactPayload = {
    name: text(input.name, limits.name),
    business: text(input.business, limits.business),
    email: text(input.email, limits.email),
    phone: text(input.phone, limits.phone),
    service: text(input.service, limits.service),
    message: typeof input.message === "string" ? input.message.trim().slice(0, limits.message) : "",
    website: text(input.website, limits.website),
  };

  if (payload.name.length < 2) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return null;
  if (payload.phone.replace(/\D/g, "").length < 10) return null;
  if (!payload.service || payload.message.length < 15) return null;
  return payload;
}

let resend: Resend | null = null;

function getResend() {
  if (resend) return resend;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY must be configured");
  }

  resend = new Resend(apiKey);
  return resend;
}

async function sendContactEmail(payload: ContactPayload) {
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@alwayscompliant.in";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "website@alwayscompliant.in";

  const { error } = await getResend().emails.send({
    to: toEmail,
    from: `Always Compliant Website <${fromEmail}>`,
    replyTo: `${payload.name} <${payload.email}>`,
    subject: `Website compliance inquiry - ${payload.service}`,
    text: [
      "New inquiry from the Always Compliant website",
      "",
      `Full name: ${payload.name}`,
      `Business name: ${payload.business || "Not provided"}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Service: ${payload.service}`,
      "",
      "Requirement:",
      payload.message,
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function POST(request: Request) {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const payload = parsePayload(input);
  if (!payload) {
    return NextResponse.json({ ok: false, message: "Please check the submitted details." }, { status: 400 });
  }

  if (payload.website) return NextResponse.json({ ok: true });

  try {
    await sendContactEmail(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form mail delivery failed", error instanceof Error ? error.message : error);
    return NextResponse.json({ ok: false, message: "Unable to send the inquiry right now." }, { status: 503 });
  }
}
