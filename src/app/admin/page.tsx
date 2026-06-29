'use client'

import { useState, useEffect, useCallback } from 'react'

const SECTIONS = [
  { key: 'site', label: 'Site Info' },
  { key: 'hero', label: 'Hero Section' },
  { key: 'about', label: 'About' },
  { key: 'book', label: 'Book' },
  { key: 'expertise', label: 'Areas of Expertise' },
  { key: 'impact', label: 'Impact & Testimonials' },
  { key: 'offerings', label: 'Offerings' },
  { key: 'experience', label: 'Experience & Certifications' },
  { key: 'journal', label: 'Journal' },
  { key: 'contact', label: 'Contact' },
  { key: 'nav', label: 'Navigation' },
  { key: 'partners', label: 'Partners / Marquee' },
  { key: 'footer', label: 'Footer' },
]

const ADMIN_PASSWORD = 'admin123'

type SectionData = Record<string, unknown>

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [sections, setSections] = useState<Record<string, SectionData>>({})
  const [activeSection, setActiveSection] = useState('hero')
  const [jsonText, setJsonText] = useState('')
  const [saving, setSaving] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [loading, setLoading] = useState(true)

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  const deployHook = process.env.NEXT_PUBLIC_VERCEL_DEPLOY_HOOK || ''

  const fetchSections = useCallback(async () => {
    if (!supabaseUrl || !supabaseKey) {
      setMessage({ type: 'error', text: 'Supabase not configured. Check .env.local' })
      setLoading(false)
      return
    }
    try {
      const res = await fetch(supabaseUrl + '/rest/v1/site_content?select=section,data&order=section', {
        headers: { 'apikey': supabaseKey, 'Authorization': 'Bearer ' + supabaseKey }
      })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      const rows = await res.json()
      const map: Record<string, SectionData> = {}
      for (const row of rows) map[row.section] = row.data
      setSections(map)
      if (!map[activeSection]) setActiveSection(Object.keys(map)[0] || 'hero')
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error'
      setMessage({ type: 'error', text: 'Failed to load: ' + msg })
    } finally { setLoading(false) }
  }, [supabaseUrl, supabaseKey, activeSection])

  useEffect(() => { if (authenticated) fetchSections() }, [authenticated, fetchSections])

  useEffect(() => {
    const current = sections[activeSection]
    setJsonText(current ? JSON.stringify(current, null, 2) : '{}')
  }, [activeSection, sections])

  function handleLogin() {
    if (password === ADMIN_PASSWORD) { setAuthenticated(true); setMessage({ type: '', text: '' }) }
    else { setMessage({ type: 'error', text: 'Wrong password' }) }
  }

  async function handleSave() {
    setSaving(true); setMessage({ type: '', text: '' })
    try {
      let parsed: SectionData
      try { parsed = JSON.parse(jsonText) } catch { setMessage({ type: 'error', text: 'Invalid JSON' }); setSaving(false); return }
      const res = await fetch(supabaseUrl + '/rest/v1/site_content', {
        method: 'POST',
        headers: { 'apikey': supabaseKey, 'Authorization': 'Bearer ' + supabaseKey, 'Content-Type': 'application/json', 'Prefer': 'resolution=merge-duplicates' },
        body: JSON.stringify({ section: activeSection, data: parsed }),
      })
      if (!res.ok) throw new Error(await res.text())
      setMessage({ type: 'success', text: 'Saved successfully!' })
      setSections(prev => ({ ...prev, [activeSection]: parsed }))
    } catch (e: unknown) {
      setMessage({ type: 'error', text: e instanceof Error ? e.message : 'Save failed' })
    } finally { setSaving(false) }
  }

  async function handlePublish() {
    if (!deployHook) { setMessage({ type: 'error', text: 'Deploy hook not configured.' }); return }
    setPublishing(true); setMessage({ type: '', text: '' })
    try {
      const res = await fetch(deployHook, { method: 'POST' })
      if (!res.ok) throw new Error('Deploy hook returned ' + res.status)
      setMessage({ type: 'success', text: 'Deploy triggered! Site updates in 1-2 min.' })
    } catch (e: unknown) {
      setMessage({ type: 'error', text: e instanceof Error ? e.message : 'Deploy failed' })
    } finally { setPublishing(false) }
  }

  if (!authenticated) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-4'>
        <div className='w-full max-w-sm space-y-6'>
          <div className='text-center'><h1 className='text-2xl font-bold'>Site Admin</h1><p className='text-sm text-gray-500 mt-1'>sarahman.in</p></div>
          {message.text && <div className={"p-3 rounded-lg text-sm " + (message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700')}>{message.text}</div>}
          <input type='password' placeholder='Enter admin password' value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleLogin()} className='w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500' />
          <button onClick={handleLogin} className='w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition'>Login</button>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-950 flex'>
      <aside className='w-56 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col'>
        <div className='mb-6'><h1 className='text-lg font-bold'>Site Admin</h1><a href='/' className='text-xs text-blue-600 hover:underline'>View site</a></div>
        <nav className='space-y-1 flex-1 overflow-y-auto'>
          {SECTIONS.map(s => (
            <button key={s.key} onClick={() => setActiveSection(s.key)} className={"w-full text-left px-3 py-2 rounded-lg text-sm transition " + (activeSection === s.key ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800')}>{s.label}</button>
          ))}
        </nav>
        <button onClick={handlePublish} disabled={publishing} className='w-full mt-4 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50 transition'>{publishing ? 'Deploying...' : 'Publish Changes'}</button>
      </aside>
      <main className='flex-1 p-6 max-w-5xl'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-bold'>{SECTIONS.find(s => s.key === activeSection)?.label}</h2>
          <button onClick={handleSave} disabled={saving} className='px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition'>{saving ? 'Saving...' : 'Save'}</button>
        </div>
        {message.text && <div className={"mb-4 p-3 rounded-lg text-sm " + (message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700')}>{message.text}</div>}
        {loading ? <div className='text-center py-20 text-gray-400'>Loading...</div> : (
          <textarea value={jsonText} onChange={(e) => setJsonText(e.target.value)} className='w-full h-[calc(100vh-180px)] p-4 font-mono text-sm border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none' spellCheck={false} />
        )}
      </main>
    </div>
  )
}