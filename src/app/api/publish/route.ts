import { NextResponse } from "next/server"

export async function POST() {
  const hookUrl = process.env.VERCEL_DEPLOY_HOOK
  if (!hookUrl) {
    return NextResponse.json({ error: "Deploy hook not configured" }, { status: 500 })
  }
  try {
    await fetch(hookUrl, { method: "POST" })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}