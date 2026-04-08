import { NextResponse } from "next/server";

/**
 * Beehiiv subscribe proxy.
 * Env vars needed in Vercel: BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID
 */
export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !publicationId) {
      console.error("Beehiiv not configured — missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          utm_source: "website",
          utm_medium: "organic",
          referring_site: "humbleconviction.com",
          send_welcome_email: true,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
