import { SiteHeader } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { Expertise } from "@/components/site/expertise"
import { Book } from "@/components/site/book"
import { Impact } from "@/components/site/impact"
import { Offerings } from "@/components/site/offerings"
import { Experience } from "@/components/site/experience"
import { Journal } from "@/components/site/journal"
import { Contact } from "@/components/site/contact"
import { SiteFooter } from "@/components/site/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Expertise />
        <Book />
        <Impact />
        <Offerings />
        <Experience />
        <Journal />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
