import { Linkedin, BookOpen, ArrowUp } from "lucide-react"
import { siteData } from "@/lib/site-data"

const NAV = siteData.nav
const { description, copyright, topics: TOPICS, backToTopLabel } = siteData.footer

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground text-sm font-extrabold">
                {siteData.site.initials}
              </span>
              <span className="font-extrabold tracking-tight text-foreground">
                {siteData.site.domain}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {siteData.site.availability}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
              Navigate
            </h3>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
              Topics
            </h3>
            <ul className="space-y-2">
              {TOPICS.map((t) => (
                <li key={t}>
                  <a
                    href="#journal"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
              Reach
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:rahman.rjy@outlook.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  rahman.rjy@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919866663777"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  +91 98666 63777
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Rajamahendravaram, AP
              </li>
              <li className="pt-2">
                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/ramasu777/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://amzn.in/d/0cikUR9A"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Amazon Kindle"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <BookOpen size={16} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {copyright.replace("{year}", new Date().getFullYear().toString())}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-xs font-bold text-foreground transition-all hover:border-primary hover:text-primary"
          >
            {backToTopLabel}
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  )
}