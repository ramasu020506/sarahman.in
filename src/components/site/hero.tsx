import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { siteData } from "@/lib/site-data"

export function Hero() {
  const { hero } = siteData

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      {/* Animated blob background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob animate-blob left-[-4rem] top-0 h-72 w-72 bg-purple-400 opacity-30" />
        <div className="blob animation-delay-2000 right-[-4rem] top-0 h-72 w-72 bg-blue-400 opacity-30" />
        <div className="blob animation-delay-4000 bottom-[-2rem] left-1/4 h-72 w-72 bg-indigo-400 opacity-30" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 md:flex-row md:gap-12 md:py-24 lg:px-8 lg:py-28">
        {/* Left — text */}
        <div className="flex-1 text-center md:text-left">
          {/* Pill badge */}
          <div className="badge-pill mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {hero.badge}
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {hero.greeting}{" "}
            <span className="gradient-text">
              {hero.name}
            </span>
          </h1>

          <p className="mb-6 text-xl font-semibold text-foreground/80 md:text-2xl">
            {hero.title}
          </p>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:mx-0">
            {hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a href={hero.cta1.href} className="btn-primary">
              {hero.cta1.label}
              <ArrowRight size={18} />
            </a>
            <a href={hero.cta2.href} className="btn-outline">
              {hero.cta2.label}
            </a>
          </div>
        </div>

        {/* Right — portrait card */}
        <div className="w-full max-w-xs flex-shrink-0 sm:max-w-sm md:max-w-xs lg:max-w-sm">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="relative aspect-[3/4]">
              <Image
                src={hero.portrait}
                alt={hero.portraitAlt}
                fill
                sizes="(max-width: 768px) 80vw, 320px"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Name plate */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="font-extrabold text-lg">{hero.name}</div>
                <div className="text-sm text-white/80">
                  {hero.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {hero.stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center px-4 py-8 text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
                {s.num}
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}