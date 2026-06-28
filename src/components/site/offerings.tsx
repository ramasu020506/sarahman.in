import { Presentation, Mic, PenTool, ArrowRight, Check } from "lucide-react"

const OFFERINGS = [
  {
    icon: Presentation,
    title: "Corporate & School Training",
    desc: "Comprehensive 1-day to 3-day workshops, available both online and offline. Tailored to your team's needs.",
    features: [
      "AI in Education (ChatGPT, NotebookLM, Copilot)",
      "Microsoft 365 Education rollout",
      "Hybrid & blended learning design",
      "Train-the-trainer cohorts",
    ],
    badge: "Most requested",
  },
  {
    icon: Mic,
    title: "Public Speaking & Keynotes",
    desc: "Engaging sessions at school events, conferences, and parent communities on AI, productivity, and the future of teaching.",
    features: [
      "Keynotes on teacher burnout",
      "AI literacy for school leaders",
      "Parent community sessions",
      "Conference panels & fireside chats",
    ],
    badge: "Bookable now",
  },
  {
    icon: PenTool,
    title: "Advisory & Content",
    desc: "Ongoing guidance for principals and boards, plus educational content focused on demystifying AI for educators.",
    features: [
      "Leadership advisory retainer",
      "AI policy & ethics review",
      "Article & journal writing",
      "Custom workshop design",
    ],
    badge: "Limited slots",
  },
]

const PROCESS = [
  { n: "01", title: "Listen", body: "I start by understanding your school, your teachers, and the specific pressures you're under. No slide decks, no jargon — conversation and classroom observation." },
  { n: "02", title: "Frame", body: "I write a short position document identifying where AI and digital tools will save your teachers time, and where they would only add noise." },
  { n: "03", title: "Train", body: "Hands-on workshops with real lesson material from your teachers. Each teacher leaves with one workflow they can use the next morning." },
  { n: "04", title: "Sustain", body: "Train-the-trainer cohorts, monthly check-ins, and a recorded walkthrough so your school can extend the work without me." },
]

export function Offerings() {
  return (
    <section
      id="offerings"
      className="border-b border-border bg-secondary/40 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="section-kicker justify-center">
            <span className="h-px w-8 bg-primary" />
            What I Offer
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            Three ways we can{" "}
            <span className="gradient-text">work together.</span>
          </h2>
        </div>

        {/* Offerings grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {OFFERINGS.map((item, i) => (
            <div
              key={item.title}
              className={
                "card-base relative " +
                (i === 0 ? "ring-2 ring-primary lg:scale-[1.02]" : "")
              }
            >
              <span className="absolute right-6 top-6 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                {item.badge}
              </span>
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon size={26} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
              <ul className="space-y-2">
                {item.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <div className="section-kicker justify-center">
              <span className="h-px w-8 bg-primary" />
              The Process
            </div>
            <h3 className="mt-4 text-2xl font-extrabold tracking-tight md:text-4xl">
              How an engagement{" "}
              <span className="gradient-text">unfolds.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step) => (
              <div key={step.n} className="card-base">
                <div className="mb-3 bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-5xl font-extrabold text-transparent">
                  {step.n}
                </div>
                <h4 className="mb-2 text-lg font-bold">{step.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg text-muted-foreground">
            All engagements begin with a 30-minute discovery call.
          </p>
          <a href="#contact" className="btn-primary">
            Discuss your training needs
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
