import { NavBar } from "@/components/nav-bar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Showcase } from "@/components/sections/showcase"
import { Technology } from "@/components/sections/technology"
import { CTA } from "@/components/sections/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Showcase />
      <Technology />
      <CTA />
      <SiteFooter />
    </main>
  )
}
