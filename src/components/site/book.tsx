import Image from "next/image"
import { ArrowUpRight, BookOpen, Star } from "lucide-react"
import { siteData } from "@/lib/site-data"

const { kicker, headline, headlineAccent, coverImage, coverAlt, buyUrl, buyLabel, badge, published, title, subtitle, pullQuote, description, themes } = siteData.book

export function Book() {
  return (
    <section
      id="book"
      className="relative overflow-hidden border-b border-border bg-background py-16 md:py-24"
    >
      {/* Decorative gradient bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="section-kicker">
            <span className="h-px w-8 bg-primary" />
            {kicker}
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            {headline}
            <span className="gradient-text">{headlineAccent}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Book cover */}
          <div className="lg:col-span-4">
            <div className="group relative mx-auto aspect-[940/1500] w-full max-w-xs overflow-hidden rounded-2xl border border-border shadow-2xl transition-transform duration-500 hover:-translate-y-2">
              <Image
                src={coverImage}
                alt={coverAlt}
                fill
                sizes="(max-width: 1024px) 80vw, 30vw"
                priority
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30" />
            </div>
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full"
            >
              <BookOpen size={18} />
              {buyLabel}
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Details */}
          <div className="lg:col-span-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="badge-pill">
                <Star size={14} className="fill-primary text-primary" />
                {badge}
              </span>
              <span className="text-sm text-muted-foreground">
                {published}
              </span>
            </div>

            <h3 className="mb-3 text-4xl font-extrabold tracking-tight md:text-5xl">
              {title}
            </h3>
            <p className="mb-6 text-lg font-medium text-muted-foreground md:text-xl">
              {subtitle}
            </p>

            {/* Pull quote */}
            <blockquote className="mb-8 border-l-4 border-primary pl-6">
              <p
                className="text-lg italic leading-relaxed text-foreground/90 md:text-xl"
                dangerouslySetInnerHTML={{ __html: pullQuote }}
              />
            </blockquote>

            <p className="mb-8 text-base leading-relaxed text-foreground/80">
              {description}
            </p>

            {/* Theme cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {themes.map((item) => (
                <div
                  key={item.t}
                  className="card-base"
                >
                  <h4 className="mb-2 font-bold text-primary">{item.t}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}