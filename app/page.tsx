import { Nav } from "@/components/site/nav"
import { Hero } from "@/components/site/hero"
import { Stats } from "@/components/site/stats"
import { TrustedMarquee } from "@/components/site/trusted-marquee"
import { ProjectsCoverflow } from "@/components/site/projects-coverflow"
import { Gear } from "@/components/site/gear"
import { CaseStudy } from "@/components/site/case-study"
import { Collab } from "@/components/site/collab"
import { Footer } from "@/components/site/footer"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <TrustedMarquee />
        <ProjectsCoverflow />
        <Gear />
        <CaseStudy />
        <Collab />
      </main>
      <Footer />
    </>
  )
}
