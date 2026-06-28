'use client'

import { Check, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Tier = {
  num: string
  name: string
  tagline: string
  price: string
  cadence: string
  scope: string[]
  timeline: string
  featured?: boolean
}

const TIERS: Tier[] = [
  {
    num: "I",
    name: "AI in Education Workshop",
    tagline: "A hands-on day with your teaching staff.",
    price: "₹45K",
    cadence: "per session · full-day",
    timeline: "1 day",
    scope: [
      "Intro to AI for educators (2hr)",
      "ChatGPT for lesson planning & feedback (2hr)",
      "NotebookLM as a study companion (1hr)",
      "Microsoft Copilot in M365 Education (1hr)",
      "Hands-on lesson redesign activity",
      "Resource toolkit & take-home guide",
      "Certificate of completion for staff",
    ],
  },
  {
    num: "II",
    name: "School Digital Transformation",
    tagline: "A full Microsoft 365 Education rollout.",
    price: "₹2.5L",
    cadence: "fixed · per institution",
    timeline: "8 – 12 weeks",
    featured: true,
    scope: [
      "Everything in Workshop, scaled to all staff",
      "Microsoft 365 tenant audit & setup",
      "Teams, OneNote, Forms & Assignments rollout",
      "Hybrid & blended learning policy design",
      "Train-the-trainer cohort (10 staff)",
      "Digital assessment framework",
      "Parent & student onboarding sessions",
      "Quarterly review & impact report",
    ],
  },
  {
    num: "III",
    name: "Leadership Advisory Retainer",
    tagline: "Ongoing guidance for principals & boards.",
    price: "₹1.2L",
    cadence: "per month · 3 month min",
    timeline: "rolling",
    scope: [
      "Monthly on-site working sessions",
      "AI policy & ethics review",
      "Faculty development planning",
      "Change management support",
      "Slack / WhatsApp access for leadership",
      "Parent community keynotes (2/quarter)",
      "Annual strategic review",
    ],
  },
]

const PROCESS = [
  {
    n: "01",
    title: "Listen",
    body: "I start by understanding your school, your teachers, and the specific pressures you're under. No slide decks, no jargon — conversation and classroom observation.",
  },
  {
    n: "02",
    title: "Frame",
    body: "I write a short position document identifying where AI and digital tools will save your teachers time, and where they would only add noise. We agree on what to subtract before we add anything new.",
  },
  {
    n: "03",
    title: "Train",
    body: "Hands-on workshops with real lesson material from your teachers. No theory exams. Each teacher leaves with one workflow they can use the next morning.",
  },
  {
    n: "04",
    title: "Sustain",
    body: "Train-the-trainer cohorts, monthly check-ins, and a recorded walkthrough so your school can extend the work without me. I stay reachable for ninety days post-engagement.",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-secondary/30 px-5 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-border/70 pb-6 md:flex-row md:items-end md:justify-between">
          <div className="flex items-baseline gap-4">
            <span className="section-number text-2xl">04</span>
            <span className="eyebrow">How we can work together</span>
          </div>
          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Three ways
            <span className="ml-2 italic font-light text-foreground/70">
              in.
            </span>
          </h2>
        </div>

        {/* Pricing tiers */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.num}
              className={cn(
                "relative flex flex-col rounded-sm border p-7 transition-transform duration-500 hover:-translate-y-1",
                tier.featured
                  ? "border-emerald bg-background shadow-[0_24px_60px_-30px_color-mix(in_oklch,var(--emerald)_70%,transparent)]"
                  : "border-border bg-background"
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-emerald px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-foreground">
                  Most requested
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl italic text-muted-foreground">
                  {tier.num}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {tier.timeline}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-3xl font-semibold tracking-tight">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">{tier.tagline}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-semibold">
                  {tier.price}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {tier.cadence}
                </span>
              </div>

              <div className="my-6 hairline" />

              <ul className="flex flex-1 flex-col gap-3">
                {tier.scope.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm">
                    <Check
                      size={15}
                      className={cn(
                        "mt-0.5 shrink-0",
                        tier.featured ? "text-emerald" : "text-foreground/50"
                      )}
                    />
                    <span className="text-foreground/80">{s}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300",
                  tier.featured
                    ? "btn-emerald"
                    : "border border-foreground/30 hover:border-foreground"
                )}
              >
                Enquire about {tier.name}
                <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-24">
          <div className="flex items-baseline gap-4 border-b border-border/70 pb-6">
            <span className="eyebrow">The shape of an engagement</span>
            <span className="hairline flex-1" />
            <span className="eyebrow hidden md:inline">4 stages</span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
            {PROCESS.map((step) => (
              <div
                key={step.n}
                className="group bg-background p-6 transition-colors hover:bg-secondary/50"
              >
                <span className="font-serif text-5xl font-light text-emerald/80 transition-colors group-hover:text-emerald">
                  {step.n}
                </span>
                <h4 className="mt-4 font-serif text-xl font-semibold">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
          All engagements begin with a 30-minute discovery call. Pricing
          listed is indicative for India-based institutions; international
          engagements are quoted separately. Travel and on-site
          accommodation, where applicable, are billed at cost. Discounts
          available for government schools and non-profits.
        </p>
      </div>
    </section>
  )
}
