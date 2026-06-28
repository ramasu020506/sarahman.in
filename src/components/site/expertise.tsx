import { Brain, GraduationCap, Bot, BarChart3, Users, BookOpen } from "lucide-react"

const EXPERTISE = [
  {
    icon: Bot,
    title: "AI in Education",
    desc: "ChatGPT, NotebookLM, Microsoft Copilot & Gemini for lesson planning, assessment design, and educator productivity.",
  },
  {
    icon: GraduationCap,
    title: "Microsoft 365 Education",
    desc: "Teams, OneNote Classrooms, Forms, Assignments, Excel, PowerPoint — full institutional adoption and training.",
  },
  {
    icon: Brain,
    title: "AI Literacy & Policy",
    desc: "Responsible AI adoption, AI ethics, and K-12 policy design for school boards and management teams.",
  },
  {
    icon: BarChart3,
    title: "Digital Assessments",
    desc: "Technology-enabled instruction, learning management systems, and educator productivity dashboards.",
  },
  {
    icon: Users,
    title: "Faculty Development",
    desc: "Workshop facilitation, instructional design, change management, and train-the-trainer cohorts.",
  },
  {
    icon: BookOpen,
    title: "Thought Leadership",
    desc: "Keynotes and writing on teacher burnout, the purpose of learning, and human-centered school design.",
  },
]

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
            My Expertise
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            Mastering the tools that{" "}
            <span className="gradient-text">rehumanise the classroom.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Two and a half decades at the intersection of pedagogy,
            technology, and school leadership.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE.map((item) => (
            <div
              key={item.title}
              className="card-base group cursor-default"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon size={26} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
