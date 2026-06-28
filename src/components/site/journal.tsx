import { ArrowUpRight, Clock, BookOpen } from "lucide-react"

const ARTICLES = [
  {
    num: "012",
    title: "Why ChatGPT won't replace teachers — but it will replace the ones who refuse to use it",
    excerpt:
      "A practical argument for why AI literacy is now a baseline professional competency, not an optional one — and how to introduce it to a resistant staff room without losing the sceptics.",
    category: "AI in Education",
    date: "Jun 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    num: "011",
    title: "The NotebookLM workflow I teach every teacher",
    excerpt:
      "Step-by-step: how to turn your syllabus, textbook, and lesson notes into a study companion students actually use — and the four mistakes to avoid.",
    category: "Tools",
    date: "May 2026",
    readTime: "9 min read",
  },
  {
    num: "010",
    title: "On teacher burnout: a letter to school management",
    excerpt:
      "Adapted from The Exhausted Educator. What school boards get wrong about teacher wellness, and three structural changes that cost nothing.",
    category: "Wellness",
    date: "Apr 2026",
    readTime: "7 min read",
  },
  {
    num: "009",
    title: "Microsoft Teams for Education: a setup that actually works",
    excerpt:
      "The default Teams deployment is a mess. After rolling it out across 10,000+ students, here's the structure I recommend — and the three settings most schools forget.",
    category: "Microsoft 365",
    date: "Mar 2026",
    readTime: "12 min read",
  },
]

export function Journal() {
  const [featured, ...rest] = ARTICLES

  return (
    <section
      id="journal"
      className="border-b border-border bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="section-kicker">
              <span className="h-px w-8 bg-primary" />
              Journal
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Field notes &amp;{" "}
              <span className="gradient-text">occasional essays.</span>
            </h2>
          </div>
          <a href="#journal" className="btn-outline !px-5 !py-2.5 !text-sm">
            View all articles
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Featured */}
        <a
          href="#journal"
          className="group mb-6 block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:grid md:grid-cols-2"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 md:aspect-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[12rem] font-extrabold leading-none text-white/20">
                {featured.num}
              </span>
            </div>
            <div className="absolute left-6 top-6">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                Featured
              </span>
            </div>
          </div>
          <div className="p-8">
            <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-bold uppercase tracking-wider text-primary">
                {featured.category}
              </span>
              <span>·</span>
              <span>{featured.date}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} /> {featured.readTime}
              </span>
            </div>
            <h3 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
              {featured.title}
            </h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 font-bold text-primary">
              Read article
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </a>

        {/* List */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {rest.map((a) => (
            <a
              key={a.num}
              href="#journal"
              className="card-base group"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {a.category}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  #{a.num}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                {a.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {a.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{a.date}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} /> {a.readTime}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-8 text-center md:p-12">
          <div className="mx-auto max-w-2xl">
            <BookOpen className="mx-auto mb-4 h-10 w-10 text-white/80" />
            <h3 className="mb-3 text-2xl font-extrabold text-white md:text-3xl">
              Join 1,00,000+ educators
            </h3>
            <p className="mb-6 text-base text-white/80">
              Get the latest tips on AI in education, Microsoft tools, and
              teacher productivity — delivered straight to your inbox. No
              spam, ever.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="you@school.edu.in"
                className="w-full max-w-md rounded-xl border-0 px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-white/30 sm:w-auto"
              />
              <button
                type="button"
                className="rounded-xl bg-white px-6 py-3 font-bold text-blue-600 transition-all hover:bg-white/90 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
