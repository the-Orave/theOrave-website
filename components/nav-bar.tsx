"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-black/65 backdrop-blur" : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a
          href="#hero"
          className="flex items-center gap-3"
          aria-label="Orave home"
          onClick={(e) => {
            e.preventDefault()
            const target = document.getElementById("hero")
            if (!target) return
            const header = document.querySelector('header[role="banner"]') as HTMLElement | null
            const offset = (header?.offsetHeight ?? 72) + 8
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset
            window.scrollTo({ top, behavior: "smooth" })
          }}
        >
          <Image src="/images/orave-logo-a.png" alt="Orave logo" width={112} height={112} className="h-10 w-auto" />
          <span className="sr-only">Orave | Spraygent</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          <a
            href="#about"
            className="text-sm text-zinc-300 hover:text-white"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById("about")
              if (!el) return
              const header = document.querySelector('header[role="banner"]') as HTMLElement | null
              const offset = (header?.offsetHeight ?? 72) + 8
              const top = el.getBoundingClientRect().top + window.pageYOffset - offset
              window.scrollTo({ top, behavior: "smooth" })
            }}
          >
            About
          </a>

          <a
            href="#showcase"
            className="text-sm text-zinc-300 hover:text-white"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById("showcase")
              if (!el) return
              const header = document.querySelector('header[role="banner"]') as HTMLElement | null
              const offset = (header?.offsetHeight ?? 72) + 8
              const top = el.getBoundingClientRect().top + window.pageYOffset - offset
              window.scrollTo({ top, behavior: "smooth" })
            }}
          >
            Collection
          </a>

          <a
            href="#technology"
            className="text-sm text-zinc-300 hover:text-white"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById("technology")
              if (!el) return
              const header = document.querySelector('header[role="banner"]') as HTMLElement | null
              const offset = (header?.offsetHeight ?? 72) + 8
              const top = el.getBoundingClientRect().top + window.pageYOffset - offset
              window.scrollTo({ top, behavior: "smooth" })
            }}
          >
            Technology
          </a>

          <a
            href="#cta"
            className="text-sm text-zinc-300 hover:text-white"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById("cta")
              if (!el) return
              const header = document.querySelector('header[role="banner"]') as HTMLElement | null
              const offset = (header?.offsetHeight ?? 72) + 8
              const top = el.getBoundingClientRect().top + window.pageYOffset - offset
              window.scrollTo({ top, behavior: "smooth" })
            }}
          >
            Buy
          </a>
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-[color:var(--orave-teal)] px-5 text-black transition-all hover:opacity-90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[color:var(--spraygent-yellow)]"
          >
            <a
              href="#cta"
              aria-label="Buy now - jump to purchase section"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById("cta")
                if (!el) return
                const header = document.querySelector('header[role="banner"]') as HTMLElement | null
                const offset = (header?.offsetHeight ?? 72) + 8
                const top = el.getBoundingClientRect().top + window.pageYOffset - offset
                window.scrollTo({ top, behavior: "smooth" })
              }}
            >
              Buy Now
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
