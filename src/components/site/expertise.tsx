import { Brain, GraduationCap, Bot, BarChart3, Users, BookOpen } from "lucide-react"
import { siteData } from "@/lib/site-data"

const ICON_MAP = { Bot, GraduationCap, Brain, BarChart3, Users, BookOpen } as const

const { kicker, headline, headlineAccent, subtext, items } = siteData.expertise

export function Expertise() {
  return (
    <section
      id="expertise"
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
          <p className="mt-4 text-lg text-muted-foreground">
            {subtext}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const IconComponent = ICON_MAP[item.icon as keyof typeof ICON_MAP]
            return (
              <div
                key={item.title}
                className="card-base group cursor-default"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <IconComponent size={26} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}