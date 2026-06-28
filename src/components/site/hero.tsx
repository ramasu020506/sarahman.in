import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      {/* Animated blob background — amansaurav.com style */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob animate-blob left-[-4rem] top-0 h-72 w-72 bg-purple-400 opacity-30" />
        <div className="blob animation-delay-2000 right-[-4rem] top-0 h-72 w-72 bg-blue-400 opacity-30" />
        <div className="blob animation-delay-4000 bottom-[-2rem] left-1/4 h-72 w-72 bg-indigo-400 opacity-30" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 md:flex-row md:py-24 lg:px-8 lg:py-32">
        {/* Left — text */}
        <div className="flex-1 text-center md:text-left">
          {/* Pill badge */}
          <div className="badge-pill mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Microsoft Innovative Educator (MIE)
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">
              Syed Abdul Rahman
            </span>
            .
          </h1>

          <p className="mb-6 text-xl font-semibold text-foreground/80 md:text-2xl">
            AI in Education Consultant &amp; Microsoft Education Specialist
          </p>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:mx-0">
            With 25+ years of experience, I have trained 500+ educators
            across India to integrate AI, Microsoft 365 Education, and
            digital pedagogy into their classrooms — without losing the
            soul of teaching.
          </p>

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a href="#contact" className="btn-primary">
              Book a Workshop
              <ArrowRight size={18} />
            </a>
            <a href="#book" className="btn-outline">
              Read the Book
            </a>
          </div>
        </div>

        {/* Right — portrait card with stats */}
        <div className="relative w-full max-w-md flex-1 lg:max-w-lg">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/portrait-medium.webp"
                alt="Portrait of Syed Abdul Rahman, AI in Education Consultant and Microsoft Education Specialist"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Name plate */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="font-extrabold text-lg">Syed Abdul Rahman</div>
                <div className="text-sm text-white/80">
                  Principal · Pragati Educational Institutions
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-xl md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sparkles size={20} />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-foreground">25+</div>
                <div className="text-xs text-muted-foreground">Years in education</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { num: "25+", label: "Years in education" },
            { num: "500+", label: "Educators trained" },
            { num: "50+", label: "PD programs delivered" },
            { num: "10,000+", label: "Students impacted" },
          ].map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center px-4 py-8 text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
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
