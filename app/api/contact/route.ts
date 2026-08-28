import { spawn } from "node:child_process";
import path from "node:path";
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
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
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
    message: text(input.message, limits.message),
    website: text(input.website, limits.website),
  };

  if (payload.name.length < 2) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return null;
  if (payload.phone.replace(/\D/g, "").length < 10) return null;
  if (!payload.service || payload.message.length < 15) return null;
  return payload;
}

function sendWithPython(payload: ContactPayload) {
  const executable = process.env.PYTHON_EXECUTABLE || (process.platform === "win32" ? "python" : "python3");
  const script = path.join(process.cwd(), "scripts", "send_contact_email.py");

  return new Promise<void>((resolve, reject) => {
    const child = spawn(/* turbopackIgnore: true */ executable, [script], {
      env: process.env,
      shell: false,
      stdio: ["pipe", "pipe", "pipe"],
    });
    let settled = false;
    let stdout = "";
    let stderr = "";
    const finish = (callback: () => void) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      callback();
    };
    const timeout = setTimeout(() => {
      child.kill();
      finish(() => reject(new Error("Mail delivery timed out")));
    }, 15_000);

    child.stdout.on("data", (chunk: Buffer) => { stdout += chunk.toString(); });
    child.stderr.on("data", (chunk: Buffer) => { stderr += chunk.toString(); });
    child.on("error", (error) => {
      finish(() => reject(error));
    });
    child.on("close", (code) => {
      finish(() => {
        if (code === 0) resolve();
        else reject(new Error(stderr.trim() || stdout.trim() || "Mail delivery failed"));
      });
    });
    child.stdin.end(JSON.stringify(payload));
  });
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
    await sendWithPython(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form mail delivery failed", error instanceof Error ? error.message : error);
    return NextResponse.json({ ok: false, message: "Unable to send the inquiry right now." }, { status: 503 });
  }
}
