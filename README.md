# sarahman.in — Syed Abdul Rahman Personal Website

Personal website for **Syed Abdul Rahman** — AI in Education Consultant,
Microsoft Education Specialist (MIE), and Principal at Pragati Educational
Institutions. Author of *The Exhausted Educator*.

## Tech Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS 4 + shadcn/ui
- Inter font (Google Fonts)
- Optimized portrait (WebP) + book cover from Amazon

## Local Development
```bash
bun install
bun run dev      # http://localhost:3000
bun run lint     # check code quality
bun run build    # production build
```

## Deployment (Vercel — recommended)

This site is configured for Vercel with `output: "standalone"` in
`next.config.ts`.

### Quick deploy
1. Push this project to a GitHub repository.
2. Go to https://vercel.com/new and import the GitHub repo.
3. Vercel auto-detects Next.js — keep all defaults.
4. Click **Deploy**. Your site goes live at
   `https://<your-project>.vercel.app` in ~60 seconds.

### Connect sarahman.in
After deploy, in the Vercel dashboard:
1. Project → Settings → Domains → Add `sarahman.in` and `www.sarahman.in`.
2. Vercel shows you the DNS records to add at your registrar.
3. Add the records at your domain registrar (GoDaddy / BigRock / Hostinger /
   Namecheap — see `DEPLOYMENT-GUIDE.pdf` for step-by-step screenshots).
4. Wait 5–60 minutes for DNS to propagate. Vercel provisions SSL
   automatically — no extra step needed.

See `DEPLOYMENT-GUIDE.pdf` for the complete walkthrough with registrar-specific
DNS instructions.

## Project Structure
```
src/
├── app/
│   ├── layout.tsx        # Root layout (Inter font, theme script, SEO meta)
│   ├── page.tsx          # Homepage assembling all sections
│   └── globals.css       # Design system (blue/purple/indigo, dark mode, blobs)
└── components/
    └── site/
        ├── header.tsx          # Sticky header with theme toggle + mobile drawer
        ├── hero.tsx            # Hero with gradient name, blobs, portrait card
        ├── expertise.tsx       # 6 expertise cards
        ├── book.tsx            # "The Exhausted Educator" book section
        ├── impact.tsx          # Testimonials + engagements
        ├── offerings.tsx       # 3 service cards + 4-step process
        ├── experience.tsx      # Career timeline + education + certifications
        ├── journal.tsx         # Featured article + list + newsletter CTA
        ├── contact.tsx         # Contact info + enquiry form (success state)
        ├── footer.tsx          # 5-column footer
        ├── theme-provider.tsx  # next-themes wrapper
        └── theme-toggle.tsx    # Light/dark switcher

public/images/
├── portrait-{small,medium,large}.webp   # Optimized portrait (400/800/1200px)
├── portrait.jpg                          # JPEG fallback
└── book-cover.jpg                        # From Amazon (940×1500)
```

## Updating Content
All copy lives in the section components above. To update:
- **Hero text**: `src/components/site/hero.tsx`
- **Bio**: `src/components/site/about.tsx` (about content is in hero/expertise)
- **Book details**: `src/components/site/book.tsx`
- **Engagements**: `src/components/site/impact.tsx`
- **Pricing / offerings**: `src/components/site/offerings.tsx`
- **Career timeline**: `src/components/site/experience.tsx`
- **Articles**: `src/components/site/journal.tsx`
- **Contact info**: `src/components/site/contact.tsx` + `footer.tsx`

After editing, commit & push to GitHub — Vercel redeploys automatically in
~60 seconds.

## Contact
- Email: rahman.rjy@outlook.com
- Phone: +91 98666 63777
- LinkedIn: https://www.linkedin.com/in/ramasu777/
- Book: https://amzn.in/d/0cikUR9A
