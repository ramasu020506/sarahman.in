import Image from "next/image"
import { Quote } from "lucide-react"

const SKILLS = [
  "AI in Education",
  "Microsoft 365 Education",
  "Teacher Professional Development",
  "Instructional Design",
  "Workshop Facilitation",
  "Faculty Development",
  "Change Management",
  "Blended &amp; Hybrid Learning",
  "Digital Assessments",
  "ChatGPT for Educators",
  "NotebookLM",
  "Microsoft Copilot",
  "Microsoft Teams",
  "OneNote Classrooms",
  "Educational Consulting",
]

const FACTS = [
  { k: "Based in", v: "Rajamahendravaram, AP" },
  { k: "Role", v: "Principal &amp; Consultant" },
  { k: "Languages", v: "English, Telugu, Hindi, Urdu" },
  { k: "Currently", v: "Trainings &amp; keynotes open" },
]

export function About() {
  return (
    <section
      id="about"
      className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex items-end justify-between border-b border-border/70 pb-6">
          <div className="flex items-baseline gap-4">
            <span className="section-number text-2xl">01</span>
            <span className="eyebrow">About the educator</span>
          </div>
          <span className="hidden text-xs text-muted-foreground md:inline">
            Syed Abdul Rahman · MIE
          </span>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-y-12 lg:gap-x-12">
          {/* Portrait */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-secondary">
              <Image
                src="/images/portrait-medium.webp"
                alt="Portrait of Syed Abdul Rahman, AI in Education Consultant and Microsoft Education Specialist"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover"
              />
              {/* Frame ticks */}
              <div className="absolute left-4 top-4 h-3 w-3 border-l border-t border-emerald/70" />
              <div className="absolute right-4 top-4 h-3 w-3 border-r border-t border-emerald/70" />
              <div className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-emerald/70" />
              <div className="absolute right-4 bottom-4 h-3 w-3 border-b border-r border-emerald/70" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Principal · Pragati Educational Institutions
            </p>
          </div>

          {/* Bio */}
          <div className="col-span-12 lg:col-span-7">
            <p className="drop-cap font-serif text-2xl leading-relaxed text-foreground md:text-3xl md:leading-[1.5]">
              I am Syed Abdul Rahman — an AI in Education consultant,
              Microsoft Education Specialist, and principal with 25 years
              inside India&apos;s classrooms, staff rooms, and principal
              offices. My work sits at the intersection of three things I
              care about: pedagogy that respects the teacher, technology
              that lightens the workload, and leadership that protects the
              humanity of the classroom.
            </p>

            <p className="mt-8 text-base leading-relaxed text-foreground/75 md:text-lg">
              Over the last decade I have trained more than 500 educators
              on Microsoft 365 Education, ChatGPT, NotebookLM, and
              Microsoft Copilot — not as gadgets to chase, but as
              instruments that, used carefully, give teachers their time
              and attention back. I have led 50+ professional development
              programs across Andhra Pradesh on digital pedagogy, AI
              literacy, instructional design, and faculty development.
            </p>

            <p className="mt-6 text-base leading-relaxed text-foreground/75 md:text-lg">
              As Principal at Pragati Educational Institutions since 2008, I
              direct academic and administrative operations across branches
              serving 10,000+ students and 500+ educators. The work I care
              about most is helping schools adopt AI and educational
              technology without losing the soul of teaching — which is
              also the subject of my book, <em>The Exhausted Educator</em>.
            </p>

            {/* Pull quote */}
            <figure className="mt-12 border-l-2 border-emerald pl-6">
              <Quote className="mb-3 h-6 w-6 text-emerald" />
              <blockquote className="font-serif text-xl italic leading-snug text-foreground md:text-2xl">
                Technology in the classroom is only useful if it gives the
                teacher more time to be human. If it takes that time away,
                no matter how clever, it is the wrong tool.
              </blockquote>
              <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Syed Abdul Rahman · From <em>The Exhausted Educator</em>
              </figcaption>
            </figure>

            {/* Skill chips */}
            <div className="mt-12">
              <div className="eyebrow mb-4">Disciplines &amp; tools</div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-foreground/75 transition-colors hover:border-emerald hover:text-foreground"
                    dangerouslySetInnerHTML={{ __html: s }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Facts grid */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.k} className="bg-background p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {f.k}
              </div>
              <div
                className="mt-2 font-serif text-lg font-medium"
                dangerouslySetInnerHTML={{ __html: f.v }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
