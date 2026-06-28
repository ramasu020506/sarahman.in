import { Quote, ArrowUpRight } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "Sir's workshop on ChatGPT and NotebookLM completely changed how our department plans lessons. We've cut preparation time by half, and teachers actually look forward to Mondays now.",
    name: "Head of Department",
    role: "Mathematics, Pragati Institutions",
    initials: "HD",
  },
  {
    quote:
      "The Microsoft 365 Education rollout he led was the smoothest technology transition we've had in twenty years. Practical, patient, and genuinely respectful of teachers' time.",
    name: "Senior Coordinator",
    role: "Secondary School, Andhra Pradesh",
    initials: "SC",
  },
  {
    quote:
      "I used to spend hours on manual formatting and report cards. His Excel and productivity training has saved me countless weekends. Every teacher should attend his sessions.",
    name: "Educator",
    role: "Senior Secondary, Telangana",
    initials: "ED",
  },
]

const ENGAGEMENTS = [
  {
    title: "AI-Powered Teaching Workshops",
    category: "AI in Education",
    year: "2023 – 2026",
    desc: "Ongoing hands-on workshops guiding teachers on ChatGPT, NotebookLM, and Microsoft Copilot for lesson planning, assessment design, and feedback workflows.",
    tags: ["ChatGPT", "NotebookLM", "Copilot"],
  },
  {
    title: "Microsoft 365 Education Adoption",
    category: "Digital Transformation",
    year: "2020 – Present",
    desc: "Institution-wide adoption of Microsoft Teams, OneNote, Forms, and Assignments across branches serving 10,000+ students. Training paths for 500+ educators.",
    tags: ["Teams", "OneNote", "Forms"],
  },
  {
    title: "Hybrid & Remote Learning Programs",
    category: "Pedagogy",
    year: "2020 – 2022",
    desc: "Designed the hybrid and remote learning transition playbook. Microsoft-certified in Hybrid, Remote, and Blended Learning modalities.",
    tags: ["Hybrid", "Remote", "Blended"],
  },
  {
    title: "AI Literacy for School Leaders",
    category: "Leadership Training",
    year: "2024 – 2026",
    desc: "Closed-cohort sessions for principals and management teams on responsible AI adoption, change management, and AI policy in K-12 settings.",
    tags: ["AI Literacy", "Policy", "Leadership"],
  },
]

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
              Trusted by Educators
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              What teachers and{" "}
              <span className="gradient-text">leaders say.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
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
                Selected Engagements
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                A quarter-century{" "}
                <span className="gradient-text">in the classroom.</span>
              </h2>
            </div>
            <a href="#contact" className="btn-outline !px-5 !py-2.5 !text-sm">
              Discuss a training
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ENGAGEMENTS.map((e) => (
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
