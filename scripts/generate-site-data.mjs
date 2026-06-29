import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DATA_FILE = resolve(ROOT, 'src/lib/site-data.ts');

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.log('No Supabase credentials. Keeping existing site-data.ts');
  process.exit(0);
}

const supabase = createClient(url, key);

function readCurrent() {
  if (!existsSync(DATA_FILE)) return null;
  const c = readFileSync(DATA_FILE, 'utf8');
  const j = c.replace(/export\s+const\s+siteData\s*=\s*/, '').replace(/\s*as\s+const\s*;?\s*$/, '').replace(/&apos;/g, "'").replace(/&ldquo;/g, '\u201c').replace(/&rdquo;/g, '\u201d');
  try { return new Function('return ' + j)(); } catch(e) { return null; }
}

async function main() {
  console.log('Fetching from Supabase...');
  try {
    const { data: rows, error } = await supabase.from('site_content').select('section, data').order('section');
    if (error) throw error;
    if (!rows || rows.length === 0) {
      console.log('Supabase empty. Seeding from site-data.ts...');
      const cur = readCurrent();
      if (!cur) { console.error('No site-data.ts found.'); process.exit(1); }
      const insert = Object.entries(cur).map(([section, data]) => ({ section, data }));
      const { error: e2 } = await supabase.from('site_content').upsert(insert, { onConflict: 'section' });
      if (e2) throw e2;
      console.log('Seeded ' + insert.length + ' sections. Keeping existing site-data.ts.');
      return;
    }
    const obj = {};
    for (const r of rows) obj[r.section] = r.data;
    const out = '// Auto-generated from Supabase on ' + new Date().toISOString() + '\n' + 'export const siteData = ' + JSON.stringify(obj, null, 2) + ' as const;\n';
    writeFileSync(DATA_FILE, out, 'utf8');
    console.log('Updated site-data.ts with ' + rows.length + ' sections.');
  } catch (e) {
    console.error('Supabase error:', e.message);
    console.log('Keeping existing site-data.ts.');
  }
}
main();