import { siteData } from "@/lib/site-data"

const PARTNERS = siteData.partners

export function ClientMarquee() {
  return (
    <section
      aria-label="Credentials and partners"
      className="border-y border-border/60 bg-secondary/40 py-5"
    >
      <div className="flex items-center gap-3 px-5 md:px-10 lg:px-16">
        <span className="eyebrow hidden shrink-0 md:inline">Certified by</span>
        <div className="relative flex-1 overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="flex w-max animate-marquee items-center gap-12 pr-12">
            {[...PARTNERS, ...PARTNERS].map((c, i) => (
              <span
                key={i}
                className="font-serif text-xl italic text-foreground/55 whitespace-nowrap"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}