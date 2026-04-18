import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const source = typeof body?.source === "string" ? body.source : "unknown";
    const answers = body?.answers || {};

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    if (BREVO_API_KEY) {
      // Add to Brevo (already in your env vars)
      await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          email,
          attributes: {
            SOURCE: source,
            DIAGNOSTIC_ANSWERS: JSON.stringify(answers),
          },
          listIds: [2], // Change to your actual Brevo list ID
          updateEnabled: true,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error("Email capture error:", e?.message || e);
    return NextResponse.json({ error: "Failed to capture email" }, { status: 500 });
  }
}
