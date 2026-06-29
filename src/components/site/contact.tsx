'use client'

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Check, Linkedin, BookOpen, ArrowRight } from "lucide-react"
import { siteData } from "@/lib/site-data"

const ICON_MAP = { Mail, Phone, MapPin, Clock, Linkedin, BookOpen } as const

const { info: CONTACT_INFO, links: LINKS, services: SERVICES, audiences: AUDIENCES } = siteData.contact
const { kicker, headline, headlineAccent, subtext } = siteData.contact

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    role: "",
    service: SERVICES[0],
    audience: AUDIENCES[0],
    timeline: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-border bg-background py-16 md:py-24"
    >
      {/* Decorative blob bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="section-kicker justify-center">
            <span className="h-px w-8 bg-primary" />
            {kicker}
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            {headline}
            <span className="gradient-text">{headlineAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left — contact info */}
          <div className="lg:col-span-2">
            <div className="card-base h-full">
              <h3 className="mb-6 text-xl font-bold">Contact details</h3>
              <div className="space-y-5">
                {CONTACT_INFO.map((c) => {
                  const IconComponent = ICON_MAP[c.icon as keyof typeof ICON_MAP]
                  return (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {c.label}
                        </div>
                        {c.href ? (
                          <a
                            href={c.href}
                            className="font-bold text-foreground transition-colors hover:text-primary"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <div className="font-bold text-foreground">{c.value}</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="my-6 h-px w-full bg-border" />

              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Elsewhere
              </div>
              <div className="mt-3 space-y-2">
                {LINKS.map((l) => {
                  const IconComponent = ICON_MAP[l.icon as keyof typeof ICON_MAP]
                  return (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-xl border border-border p-3 transition-all hover:border-primary hover:shadow-md"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <IconComponent size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                          {l.label}
                        </div>
                        <div className="text-sm font-bold text-foreground">
                          {l.handle}
                        </div>
                      </div>
                      <ArrowRight size={14} className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card-base flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  <Check size={36} />
                </div>
                <h3 className="mb-3 text-2xl font-extrabold md:text-3xl">
                  Thank you!
                </h3>
                <p className="mb-8 max-w-md text-muted-foreground">
                  Your message has landed in my inbox. I&apos;ll reply
                  personally within two working days — usually faster.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-base"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    required
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="e.g. Priya Sharma"
                  />
                  <Field
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="you@school.edu.in"
                  />
                  <Field
                    label="Organisation"
                    value={form.org}
                    onChange={(v) => setForm({ ...form, org: v })}
                    placeholder="School / institution / company"
                  />
                  <Field
                    label="Your role"
                    value={form.role}
                    onChange={(v) => setForm({ ...form, role: v })}
                    placeholder="Principal / Coordinator / etc."
                  />
                </div>

                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <SelectField
                    label="What you need"
                    value={form.service}
                    onChange={(v) => setForm({ ...form, service: v })}
                    options={SERVICES}
                  />
                  <SelectField
                    label="You represent"
                    value={form.audience}
                    onChange={(v) => setForm({ ...form, audience: v })}
                    options={AUDIENCES}
                  />
                  <Field
                    label="Ideal timeline"
                    value={form.timeline}
                    onChange={(v) => setForm({ ...form, timeline: v })}
                    placeholder="e.g. August 2026"
                  />
                </div>

                <div className="mt-5">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-foreground">
                      Brief
                      <span className="ml-1 text-primary">*</span>
                    </span>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="What are you trying to fix? Where are your teachers struggling? What does success look like at the end of next term?"
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </label>
                </div>

                <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
                  <p className="text-xs text-muted-foreground">
                    By submitting you agree to be contacted about your
                    enquiry. No newsletters, no spam — ever.
                  </p>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Enquiry
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-foreground">
        {label}
        {required ? <span className="ml-1 text-primary">*</span> : null}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </label>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: readonly string[]
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-foreground">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}