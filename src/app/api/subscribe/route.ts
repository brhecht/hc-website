import { NextResponse } from "next/server";

/**
 * Kit (ConvertKit) subscribe proxy.
 * Same pattern as hc-funnel/api/subscribe.js — keeps API key server-side
 * and avoids ad-blocker interception.
 */
export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const apiKey = process.env.KIT_API_KEY;
    const formId = process.env.KIT_FORM_ID;

    if (!apiKey || !formId) {
      console.error("Kit not configured — missing KIT_API_KEY or KIT_FORM_ID");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const kitRes = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          email,
          first_name: name || undefined,
        }),
      }
    );

    const data = await kitRes.json();

    if (!kitRes.ok) {
      return NextResponse.json(data, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
