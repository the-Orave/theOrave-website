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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 md:px-6 min-h-[48px]">
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
          <Image 
            src="/orave.png" 
            alt="Orave logo" 
            width={120} 
            height={40} 
            className="h-5 w-auto object-contain" 
          />
          <span className="sr-only">Orave | Spraygent</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex absolute left-1/2 transform -translate-x-1/2">
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
              href="https://wa.me/9482202591"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with us on WhatsApp"
            >
              <span className="inline-flex items-center gap-2">
                Connect on WhatsApp <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
