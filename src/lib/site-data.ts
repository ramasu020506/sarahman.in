// ============================================================
// SITE DATA — Edit this single file to update all content.
// Every component imports from here. No need to touch .tsx files.
// ============================================================

export const siteData = {
  // ─── Global ───────────────────────────────────────────────
  site: {
    name: "Syed Abdul Rahman",
    initials: "SAR",
    domain: "sarahman.in",
    logoAlt: "Syed Abdul Rahman — home",
    availability: "Available for trainings & keynotes",
  },

  // ─── Hero ─────────────────────────────────────────────────
  hero: {
    badge: "Microsoft Innovative Educator (MIE)",
    greeting: "Hi, I'm",
    name: "Syed Abdul Rahman",
    title: "AI in Education Consultant & Microsoft Education Specialist",
    description:
      "With 25+ years of experience, I have trained 500+ educators across India to integrate AI, Microsoft 365 Education, and digital pedagogy into their classrooms — without losing the soul of teaching.",
    cta1: { label: "Book a Workshop", href: "#contact" },
    cta2: { label: "Read the Book", href: "#book" },
    portrait: "/images/portrait-medium.webp",
    portraitAlt:
      "Portrait of Syed Abdul Rahman, AI in Education Consultant and Microsoft Education Specialist",
    role: "Principal · Pragati Educational Institutions",
    stats: [
      { num: "25+", label: "Years in education" },
      { num: "500+", label: "Educators trained" },
      { num: "50+", label: "PD programs delivered" },
      { num: "10,000+", label: "Students impacted" },
    ],
  },

  // ─── About ───────────────────────────────────────────────
  about: {
    sectionNumber: "01",
    sectionLabel: "About the educator",
    subLabel: "Syed Abdul Rahman · MIE",
    portrait: "/images/portrait-medium.webp",
    portraitAlt:
      "Portrait of Syed Abdul Rahman, AI in Education Consultant and Microsoft Education Specialist",
    caption: "Principal · Pragati Educational Institutions",
    bio: [
      `I am Syed Abdul Rahman — an AI in Education consultant, Microsoft Education Specialist, and principal with 25 years inside India&apos;s classrooms, staff rooms, and principal offices. My work sits at the intersection of three things I care about: pedagogy that respects the teacher, technology that lightens the workload, and leadership that protects the humanity of the classroom.`,
      `Over the last decade I have trained more than 500 educators on Microsoft 365 Education, ChatGPT, NotebookLM, and Microsoft Copilot — not as gadgets to chase, but as instruments that, used carefully, give teachers their time and attention back. I have led 50+ professional development programs across Andhra Pradesh on digital pedagogy, AI literacy, instructional design, and faculty development.`,
      `As Principal at Pragati Educational Institutions since 2008, I direct academic and administrative operations across branches serving 10,000+ students and 500+ educators. The work I care about most is helping schools adopt AI and educational technology without losing the soul of teaching — which is also the subject of my book, <em>The Exhausted Educator</em>.`,
    ],
    quote: {
      text: "Technology in the classroom is only useful if it gives the teacher more time to be human. If it takes that time away, no matter how clever, it is the wrong tool.",
      source: "Syed Abdul Rahman · From <em>The Exhausted Educator</em>",
    },
    skills: [
      "AI in Education",
      "Microsoft 365 Education",
      "Teacher Professional Development",
      "Instructional Design",
      "Workshop Facilitation",
      "Faculty Development",
      "Change Management",
      "Blended & Hybrid Learning",
      "Digital Assessments",
      "ChatGPT for Educators",
      "NotebookLM",
      "Microsoft Copilot",
      "Microsoft Teams",
      "OneNote Classrooms",
      "Educational Consulting",
    ],
    facts: [
      { k: "Based in", v: "Rajamahendravaram, AP" },
      { k: "Role", v: "Principal & Consultant" },
      { k: "Languages", v: "English, Telugu, Hindi, Urdu" },
      { k: "Currently", v: "Trainings & keynotes open" },
    ],
  },

  // ─── Book ─────────────────────────────────────────────────
  book: {
    kicker: "The Book",
    headline: "A diagnosis, and a ",
    headlineAccent: "roadmap back.",
    coverImage: "/images/book-cover.jpg",
    coverAlt:
      "Book cover of 'The Exhausted Educator: How Modern Education Is Breaking Teachers, Students, and the Purpose of Learning' by Syed Abdul Rahman",
    buyUrl: "https://amzn.in/d/0cikUR9A",
    buyLabel: "Buy on Amazon Kindle",
    badge: "Non-fiction · Education",
    published: "Published 2025 · By Syed Abdul Rahman",
    title: "The Exhausted Educator",
    subtitle:
      "How Modern Education Is Breaking Teachers, Students, and the Purpose of Learning.",
    pullQuote:
      "&ldquo;Written not from a clinical research lab, but from the corridors, staff rooms, and principal offices of a 25-year career — The Exhausted Educator exposes a quiet, systemic crisis. Schools have transitioned from sanctuaries of learning into transaction-driven performance centers.&rdquo;",
    description:
      "The book does not call for the destruction of schools. It calls for a human-centered realignment. It offers a practical roadmap for school boards and families to restore dignity, empathy, and purpose to the heart of the classroom — drawn from a quarter-century of front-line work in Indian education.",
    themes: [
      {
        t: "Teacher burnout",
        d: "Why the modern school turns educators into administrators — and what to do about it.",
      },
      {
        t: "Student wellness",
        d: "The hidden cost of performance-driven classrooms on the children they are meant to serve.",
      },
      {
        t: "A practical roadmap",
        d: "Concrete steps for school boards and families to realign priorities.",
      },
      {
        t: "The purpose of learning",
        d: "Reclaiming dignity, empathy, and meaning at the heart of the classroom.",
      },
    ],
  },

  // ─── Expertise ────────────────────────────────────────────
  expertise: {
    kicker: "My Expertise",
    headline: "Mastering the tools that ",
    headlineAccent: "rehumanise the classroom.",
    subtext:
      "Two and a half decades at the intersection of pedagogy, technology, and school leadership.",
    items: [
      {
        icon: "Bot",
        title: "AI in Education",
        desc: "ChatGPT, NotebookLM, Microsoft Copilot & Gemini for lesson planning, assessment design, and educator productivity.",
      },
      {
        icon: "GraduationCap",
        title: "Microsoft 365 Education",
        desc: "Teams, OneNote Classrooms, Forms, Assignments, Excel, PowerPoint — full institutional adoption and training.",
      },
      {
        icon: "Brain",
        title: "AI Literacy & Policy",
        desc: "Responsible AI adoption, AI ethics, and K-12 policy design for school boards and management teams.",
      },
      {
        icon: "BarChart3",
        title: "Digital Assessments",
        desc: "Technology-enabled instruction, learning management systems, and educator productivity dashboards.",
      },
      {
        icon: "Users",
        title: "Faculty Development",
        desc: "Workshop facilitation, instructional design, change management, and train-the-trainer cohorts.",
      },
      {
        icon: "BookOpen",
        title: "Thought Leadership",
        desc: "Keynotes and writing on teacher burnout, the purpose of learning, and human-centered school design.",
      },
    ],
  },

  // ─── Impact ───────────────────────────────────────────────
  impact: {
    testimonials: {
      kicker: "Trusted by Educators",
      headline: "What teachers and ",
      headlineAccent: "leaders say.",
      items: [
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
      ],
    },
    engagements: {
      kicker: "Selected Engagements",
      headline: "A quarter-century ",
      headlineAccent: "in the classroom.",
      ctaLabel: "Discuss a training",
      ctaHref: "#contact",
      items: [
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
      ],
    },
  },

  // ─── Offerings ────────────────────────────────────────────
  offerings: {
    kicker: "What I Offer",
    headline: "Three ways we can ",
    headlineAccent: "work together.",
    items: [
      {
        icon: "Presentation",
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
        icon: "Mic",
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
        icon: "PenTool",
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
    ],
    process: [
      {
        n: "01",
        title: "Listen",
        body: "I start by understanding your school, your teachers, and the specific pressures you're under. No slide decks, no jargon — conversation and classroom observation.",
      },
      {
        n: "02",
        title: "Frame",
        body: "I write a short position document identifying where AI and digital tools will save your teachers time, and where they would only add noise.",
      },
      {
        n: "03",
        title: "Train",
        body: "Hands-on workshops with real lesson material from your teachers. Each teacher leaves with one workflow they can use the next morning.",
      },
      {
        n: "04",
        title: "Sustain",
        body: "Train-the-trainer cohorts, monthly check-ins, and a recorded walkthrough so your school can extend the work without me.",
      },
    ],
    ctaText: "All engagements begin with a 30-minute discovery call.",
    ctaLabel: "Discuss your training needs",
    ctaHref: "#contact",
  },

  // ─── Experience ───────────────────────────────────────────
  experience: {
    kicker: "Curriculum Vitae",
    headline: "Twenty-five years, ",
    headlineAccent: "still learning.",
    entries: [
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
    ],
    education: [
      {
        year: "2007",
        title: "Bachelor of Education (B.Ed.)",
        org: "Mathematics & Physics",
      },
      {
        year: "1997",
        title: "Bachelor of Science (B.Sc.)",
        org: "Mathematics, Physics & Chemistry",
      },
    ],
    certifications: [
      "Microsoft Innovative Educator (MIE)",
      "Microsoft Hybrid Learning Certification",
      "Microsoft Remote Learning Certification",
      "Microsoft Blended Learning Certification",
      "AI Accelerator Program (Be10X)",
      "Excel Essentials for the Real World (Leila Gharani)",
      "Excel Functions in Microsoft 365 (Leila Gharani)",
    ],
  },

  // ─── Journal ──────────────────────────────────────────────
  journal: {
    kicker: "Journal",
    headline: "Field notes & ",
    headlineAccent: "occasional essays.",
    viewAllLabel: "View all articles",
    articles: [
      {
        num: "012",
        title:
          "Why ChatGPT won't replace teachers — but it will replace the ones who refuse to use it",
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
    ],
    newsletter: {
      title: "Join 1,00,000+ educators",
      description:
        "Get the latest tips on AI in education, Microsoft tools, and teacher productivity — delivered straight to your inbox. No spam, ever.",
      placeholder: "you@school.edu.in",
      buttonLabel: "Subscribe",
    },
  },

  // ─── Contact ──────────────────────────────────────────────
  contact: {
    kicker: "Get In Touch",
    headline: "Ready to upskill ",
    headlineAccent: "your team?",
    subtext:
      "Whether you are looking to master AI tools or streamline your school's workflows with Microsoft 365, I help educators and teams upskill effectively.",
    info: [
      {
        icon: "Mail",
        label: "Email",
        value: "rahman.rjy@outlook.com",
        href: "mailto:rahman.rjy@outlook.com",
      },
      {
        icon: "Phone",
        label: "Phone",
        value: "+91 98666 63777",
        href: "tel:+919866663777",
      },
      {
        icon: "MapPin",
        label: "Based in",
        value: "Rajamahendravaram, AP",
        href: null,
      },
      {
        icon: "Clock",
        label: "Availability",
        value: "2026 — open for trainings",
        href: null,
      },
    ],
    links: [
      {
        label: "LinkedIn",
        handle: "/in/ramasu777",
        href: "https://www.linkedin.com/in/ramasu777/",
        icon: "Linkedin",
      },
      {
        label: "Amazon Author",
        handle: "The Exhausted Educator",
        href: "https://amzn.in/d/0cikUR9A",
        icon: "BookOpen",
      },
    ],
    services: [
      "AI in Education Workshop",
      "School Digital Transformation",
      "Leadership Advisory Retainer",
      "Keynote / speaking",
      "Something else",
    ],
    audiences: [
      "A single school",
      "A school group / trust",
      "A conference or event",
      "An edtech company",
      "Other",
    ],
  },

  // ─── Marquee / Partners ───────────────────────────────────
  partners: [
    "Microsoft Education",
    "Pragati Educational Institutions",
    "Microsoft Teams for Education",
    "Be10X AI Accelerator",
    "Microsoft Innovative Educator",
    "Microsoft 365 Education",
    "Canva for Education",
    "NotebookLM",
    "ChatGPT Edu",
    "Leila Gharani",
  ],

  // ─── Navigation ───────────────────────────────────────────
  nav: [
    { label: "About", href: "#about" },
    { label: "Book", href: "#book" },
    { label: "Expertise", href: "#expertise" },
    { label: "Offerings", href: "#offerings" },
    { label: "Experience", href: "#experience" },
    { label: "Journal", href: "#journal" },
    { label: "Contact", href: "#contact" },
  ],

  // ─── Footer ───────────────────────────────────────────────
  footer: {
    description:
      "AI in Education Consultant, Microsoft Education Specialist, and Principal at Pragati Educational Institutions. Working with schools, teachers, and leadership teams across India since 2008.",
    copyright:
      "© {year} Syed Abdul Rahman · sarahman.in · Rajamahendravaram, India",
    topics: [
      "AI in Education",
      "Microsoft 365",
      "ChatGPT for Teachers",
      "NotebookLM",
      "Teacher Burnout",
      "Hybrid Learning",
    ],
    backToTopLabel: "Back to top",
  },
} as const