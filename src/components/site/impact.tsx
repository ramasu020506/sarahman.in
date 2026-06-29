import { Quote, ArrowUpRight } from "lucide-react"
import { siteData } from "@/lib/site-data"

const { testimonials, engagements } = siteData.impact

export function Impact() {
  return (
    <section
      id="impact"
      className="border-b border-border bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="section-kicker justify-center">
              <span className="h-px w-8 bg-primary" />
              {testimonials.kicker}
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              {testimonials.headline}
              <span className="gradient-text">{testimonials.headlineAccent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.items.map((t, i) => (
              <div key={i} className="card-base flex flex-col">
                <Quote className="mb-4 h-8 w-8 text-primary/40" />
                <p className="mb-6 flex-1 text-base leading-relaxed text-foreground/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected engagements */}
        <div>
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="section-kicker">
                <span className="h-px w-8 bg-primary" />
                {engagements.kicker}
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                {engagements.headline}
                <span className="gradient-text">{engagements.headlineAccent}</span>
              </h2>
            </div>
            <a href={engagements.ctaHref} className="btn-outline !px-5 !py-2.5 !text-sm">
              {engagements.ctaLabel}
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {engagements.items.map((e) => (
              <div key={e.title} className="card-base group">
                <div className="mb-4 flex items-center justify-between">
                  <span className="badge-pill !text-xs !py-1">{e.category}</span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {e.year}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {e.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {e.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}