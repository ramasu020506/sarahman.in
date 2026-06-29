import { ArrowUpRight, Clock, BookOpen } from "lucide-react"
import { siteData } from "@/lib/site-data"

const { kicker, headline, headlineAccent, viewAllLabel, articles: ARTICLES, newsletter } = siteData.journal

export function Journal() {
  const [featured, ...rest] = ARTICLES

  return (
    <section
      id="journal"
      className="border-b border-border bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="section-kicker">
              <span className="h-px w-8 bg-primary" />
              {kicker}
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              {headline}&amp;{" "}
              <span className="gradient-text">{headlineAccent}</span>
            </h2>
          </div>
          <a href="#journal" className="btn-outline !px-5 !py-2.5 !text-sm">
            {viewAllLabel}
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Featured */}
        <a
          href="#journal"
          className="group mb-6 block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:grid md:grid-cols-2"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 md:aspect-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[12rem] font-extrabold leading-none text-white/20">
                {featured.num}
              </span>
            </div>
            <div className="absolute left-6 top-6">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                Featured
              </span>
            </div>
          </div>
          <div className="p-8">
            <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-bold uppercase tracking-wider text-primary">
                {featured.category}
              </span>
              <span>·</span>
              <span>{featured.date}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} /> {featured.readTime}
              </span>
            </div>
            <h3 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
              {featured.title}
            </h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 font-bold text-primary">
              Read article
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </a>

        {/* List */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {rest.map((a) => (
            <a
              key={a.num}
              href="#journal"
              className="card-base group"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {a.category}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  #{a.num}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                {a.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {a.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{a.date}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} /> {a.readTime}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-8 text-center md:p-12">
          <div className="mx-auto max-w-2xl">
            <BookOpen className="mx-auto mb-4 h-10 w-10 text-white/80" />
            <h3 className="mb-3 text-2xl font-extrabold text-white md:text-3xl">
              {newsletter.title}
            </h3>
            <p className="mb-6 text-base text-white/80">
              {newsletter.description}
            </p>
            <form className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="w-full max-w-md rounded-xl border-0 px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-white/30 sm:w-auto"
              />
              <button
                type="button"
                className="rounded-xl bg-white px-6 py-3 font-bold text-blue-600 transition-all hover:bg-white/90 hover:shadow-lg"
              >
                {newsletter.buttonLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}