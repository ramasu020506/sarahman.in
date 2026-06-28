'use client'

import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Project = {
  num: string
  title: string
  client: string
  year: string
  category: string
  blurb: string
  tags: string[]
  span: string
  accent?: "emerald" | "ink" | "cream"
}

const PROJECTS: Project[] = [
  {
    num: "01",
    title: "Pioneer Studio",
    client: "Architecture firm",
    year: "2026",
    category: "Identity + Website",
    blurb:
      "A rebrand for a Bengaluru architecture practice working between heritage restoration and contemporary civic buildings. The new identity borrows the rhythm of architectural drawings — fine rules, generous margins, and a serif that holds the page.",
    tags: ["Identity", "Editorial site", "Print system"],
    span: "lg:col-span-8 lg:row-span-2",
    accent: "emerald",
  },
  {
    num: "02",
    title: "Field Notes Press",
    client: "Independent publisher",
    year: "2025",
    category: "Publication design",
    blurb:
      "Art direction and typesetting for a quarterly long-form journal on Indian cities. Three issues shipped, with a custom display face cut from a 1960s Tamil hand-painted signage archive.",
    tags: ["Editorial", "Type design", "Print"],
    span: "lg:col-span-4",
    accent: "ink",
  },
  {
    num: "03",
    title: "Halo Wellness",
    client: "D2C supplements",
    year: "2025",
    category: "Packaging + site",
    blurb:
      "Packaging system and Shopify storefront for a single-origin supplements label. Sales lifted 38% in the first quarter post-launch.",
    tags: ["Packaging", "Shopify", "Photography"],
    span: "lg:col-span-4",
    accent: "cream",
  },
  {
    num: "04",
    title: "Brahma Labs",
    client: "AI infra startup",
    year: "2025",
    category: "Brand + Product",
    blurb:
      "Identity, marketing site, and product UI direction for a developer-tools company post Series A. Shipped a 28-page brand book and a 60-component Figma library in eight weeks.",
    tags: ["Brand system", "Marketing site", "Product UI"],
    span: "lg:col-span-6",
    accent: "ink",
  },
  {
    num: "05",
    title: "Riverbed Records",
    client: "Indie music label",
    year: "2024",
    category: "Visual identity",
    blurb:
      "A flexible identity built around a single typographic gesture — a serif that mutates across record sleeves, sleeves that mutate across formats.",
    tags: ["Identity", "Sleeve design"],
    span: "lg:col-span-6",
    accent: "emerald",
  },
  {
    num: "06",
    title: "Atlas Coffee Co.",
    client: "Specialty roaster",
    year: "2024",
    category: "Retail + web",
    blurb:
      "Store design system and subscription web experience for a single-origin roaster expanding from one café to twelve.",
    tags: ["Retail", "Web", "Subscription UX"],
    span: "lg:col-span-12",
    accent: "cream",
  },
]

const ACCENTS: Record<NonNullable<Project["accent"]>, string> = {
  emerald: "bg-emerald text-emerald-foreground",
  ink: "bg-foreground text-background",
  cream: "bg-secondary text-foreground border border-border",
}

export function Work() {
  return (
    <section
      id="work"
      className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-border/70 pb-6 md:flex-row md:items-end md:justify-between">
          <div className="flex items-baseline gap-4">
            <span className="section-number text-2xl">02</span>
            <span className="eyebrow">Selected work</span>
          </div>
          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            A small, considered
            <br />
            <span className="italic font-light text-foreground/70">portfolio.</span>
          </h2>
        </div>

        {/* Asymmetric grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:auto-rows-[minmax(220px,auto)]">
          {PROJECTS.map((p) => (
            <article
              key={p.num}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-sm p-7 transition-transform duration-500 hover:-translate-y-1",
                p.span,
                ACCENTS[p.accent ?? "cream"]
              )}
            >
              {/* Top meta */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl italic opacity-60">
                    {p.num}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] opacity-70">
                    {p.category}
                  </span>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] opacity-70">
                  {p.year}
                </span>
              </div>

              {/* Title + blurb */}
              <div className="mt-10">
                <h3 className="font-serif text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] opacity-70">
                  {p.client}
                </p>
                <p className="mt-5 max-w-md text-sm leading-relaxed opacity-85 md:text-base">
                  {p.blurb}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-8 flex items-end justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-current/30 px-3 py-1 text-[11px] uppercase tracking-[0.12em] opacity-80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-current/40 transition-all duration-300 group-hover:bg-current/10 group-hover:border-current">
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/70 pt-8 md:flex-row md:items-center">
          <p className="max-w-md text-sm text-muted-foreground">
            Full case studies available on request. Most engagements are
            covered by an NDA — happy to walk through relevant work on a
            call.
          </p>
          <a href="#contact" className="btn-outline">
            Request the full portfolio
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
