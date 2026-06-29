import { Presentation, Mic, PenTool, ArrowRight, Check } from "lucide-react"
import { siteData } from "@/lib/site-data"

const ICON_MAP = { Presentation, Mic, PenTool } as const

const { kicker, headline, headlineAccent, items, process, ctaText, ctaLabel, ctaHref } = siteData.offerings

export function Offerings() {
  return (
    <section
      id="offerings"
      className="border-b border-border bg-secondary/40 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="section-kicker justify-center">
            <span className="h-px w-8 bg-primary" />
            {kicker}
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            {headline}
            <span className="gradient-text">{headlineAccent}</span>
          </h2>
        </div>

        {/* Offerings grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {items.map((item, i) => {
            const IconComponent = ICON_MAP[item.icon as keyof typeof ICON_MAP]
            return (
              <div
                key={item.title}
                className={
                  "card-base relative " +
                  (i === 0 ? "ring-2 ring-primary lg:scale-[1.02]" : "")
                }
              >
                <span className="absolute right-6 top-6 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  {item.badge}
                </span>
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <IconComponent size={26} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <ul className="space-y-2">
                  {item.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Process */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <div className="section-kicker justify-center">
              <span className="h-px w-8 bg-primary" />
              The Process
            </div>
            <h3 className="mt-4 text-2xl font-extrabold tracking-tight md:text-4xl">
              How an engagement{" "}
              <span className="gradient-text">unfolds.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.n} className="card-base">
                <div className="mb-3 bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-5xl font-extrabold text-transparent">
                  {step.n}
                </div>
                <h4 className="mb-2 text-lg font-bold">{step.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg text-muted-foreground">
            {ctaText}
          </p>
          <a href={ctaHref} className="btn-primary">
            {ctaLabel}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}