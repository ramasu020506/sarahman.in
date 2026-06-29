import { readFileSync, writeFileSync } from "fs"

const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SB_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!SB_URL || !SB_KEY) {
  console.log("No Supabase credentials - using existing site-data.ts")
  process.exit(0)
}

try {
  const res = await fetch(SB_URL + "/rest/v1/site_content?select=*", {
    headers: { apikey: SB_KEY, Authorization: "Bearer " + SB_KEY }
  })
  const rows = await res.json()
  if (!Array.isArray(rows) || rows.length === 0) {
    console.log("Supabase empty - using existing site-data.ts")
    process.exit(0)
  }
  const obj = {}
  for (const row of rows) obj[row.section] = row.data
  let comments = ""
  try {
    const existing = readFileSync("src/lib/site-data.ts", "utf8")
    const lines = existing.split("\n")
    let cl = []
    for (const line of lines) {
      if (line.trimStart().startsWith("//")) cl.push(line)
      else break
    }
    if (cl.length > 0) comments = cl.join("\n") + "\n"
  } catch (e) {}
  const output = comments + "export const siteData = " + JSON.stringify(obj, null, 2) + " as const\n"
  writeFileSync("src/lib/site-data.ts", output)
  console.log("site-data.ts updated from Supabase (" + rows.length + " sections)")
} catch (e) {
  console.log("Supabase error - using existing site-data.ts: " + String(e))
  process.exit(0)
}