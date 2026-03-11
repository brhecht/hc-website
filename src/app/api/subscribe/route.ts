import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // TODO: Wire up to actual backend
    // Option A: Google Sheets via Apps Script
    // Option B: Beehiiv API
    // Option C: Kit (ConvertKit) API (already used in hc-funnel)
    //
    // For now, log and return success
    console.log("New subscriber:", { email, name });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
