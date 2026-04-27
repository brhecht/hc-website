import { NextResponse } from 'next/server'

// Channel ID for @HumbleConvictionStartups — resolved from @HumbleConviction
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID ?? 'UCqAhVRJlLyY86vWAE5s_xhA'
const FALLBACK_VIDEO_ID = 'bKFXxGx6JhI'

export const revalidate = 3600 // cache 1 hour

export async function GET() {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`)
    const xml = await res.text()

    const videoIdMatch = xml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)
    if (!videoIdMatch) throw new Error('No videoId in RSS')

    // Skip the first <title> which is the channel name
    const allTitles = [...xml.matchAll(/<title>([^<]+)<\/title>/g)]
    const title = allTitles[1]?.[1] ?? 'Latest Video'

    return NextResponse.json({ videoId: videoIdMatch[1], title })
  } catch {
    return NextResponse.json({ videoId: FALLBACK_VIDEO_ID, title: 'Latest Video' })
  }
}
