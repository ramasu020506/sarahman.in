import { Briefcase, GraduationCap, Award } from "lucide-react"

const ENTRIES = [
  {
    period: "2008 — Present",
    role: "Principal · Microsoft Education Specialist · Educator Trainer",
    org: "Pragati Educational Institutions",
    location: "Rajamahendravaram, AP",
    summary:
      "Direct academic and administrative operations across branches serving 10,000+ students and 500+ educators. Lead the institution's adoption of Microsoft 365 Education, AI tools, and digital pedagogy.",
    highlights: [
      "Trained 500+ educators on Microsoft Teams, OneNote, Forms, Assignments, Excel & PowerPoint",
      "Delivered 50+ professional development programs on digital pedagogy and AI literacy",
      "Led institution-wide rollout of blended, hybrid, and remote learning",
      "Built teacher workflows around ChatGPT, NotebookLM, and Microsoft Copilot",
    ],
  },
  {
    period: "1997 — 2008",
    role: "Educator & Department Head",
    org: "Pragati Educational Institutions",
    location: "Rajamahendravaram, AP",
    summary:
      "Began as a mathematics and physics teacher, progressing to department head. Built the foundational classroom practice that informs all consulting work today.",
    highlights: [
      "Taught mathematics and physics across secondary and senior secondary",
      "Mentored junior teachers in instructional design",
      "Designed early digital assessment pilots",
    ],
  },
]

const EDUCATION = [
  { year: "2007", title: "Bachelor of Education (B.Ed.)", org: "Mathematics & Physics" },
  { year: "1997", title: "Bachelor of Science (B.Sc.)", org: "Mathematics, Physics & Chemistry" },
]

const CERTIFICATIONS = [
  "Microsoft Innovative Educator (MIE)",
  "Microsoft Hybrid Learning Certification",
  "Microsoft Remote Learning Certification",
  "Microsoft Blended Learning Certification",
  "AI Accelerator Program (Be10X)",
  "Excel Essentials for the Real World (Leila Gharani)",
  "Excel Functions in Microsoft 365 (Leila Gharani)",
]

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border bg-secondary/40 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="section-kicker justify-center">
            <span className="h-px w-8 bg-primary" />
            Curriculum Vitae
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            Twenty-five years,{" "}
            <span className="gradient-text">still learning.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Experience timeline */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <Briefcase size={22} className="text-primary" />
              <h3 className="text-xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {ENTRIES.map((e) => (
                <div key={e.period + e.org} className="card-base">
                  <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                    <h4
                      className="text-lg font-bold text-foreground"
                      dangerouslySetInnerHTML={{ __html: e.role }}
                    />
                    <span className="font-mono text-sm font-semibold text-primary">
                      {e.period}
                    </span>
                  </div>
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span
                      className="font-semibold text-foreground/80"
                      dangerouslySetInnerHTML={{ __html: e.org }}
                    />
                    <span>·</span>
                    <span>{e.location}</span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                    {e.summary}
                  </p>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {e.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span dangerouslySetInnerHTML={{ __html: h }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap size={22} className="text-primary" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                {EDUCATION.map((ed) => (
                  <div key={ed.year + ed.title} className="card-base">
                    <div className="font-mono text-sm font-bold text-primary">
                      {ed.year}
                    </div>
                    <div
                      className="mt-1 font-bold text-foreground"
                      dangerouslySetInnerHTML={{ __html: ed.title }}
                    />
                    <p
                      className="text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: ed.org }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Award size={22} className="text-primary" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <div className="card-base">
                <ul className="space-y-3">
                  {CERTIFICATIONS.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Award size={14} className="mt-0.5 shrink-0 text-primary" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
