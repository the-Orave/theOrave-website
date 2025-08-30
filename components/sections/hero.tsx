"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { ArrowRight, ShoppingCart } from "lucide-react" // add subtle icons for premium CTAs

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  // pointer parallax for background glow
  useEffect(() => {
    const el = bgRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14
      const y = (e.clientY / window.innerHeight - 0.5) * -14
      el.style.setProperty("--rx", `${y}deg`)
      el.style.setProperty("--ry", `${x}deg`)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{ paddingTop: '80px' }}>
      {/* sculpted background */}
      <div
        ref={bgRef}
        aria-hidden
        className="pointer-events-none absolute -inset-[25vmax] rotate-x-[var(--rx,0deg)] rotate-y-[var(--ry,0deg)] [transform-style:preserve-3d]"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 30%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(30% 30% at 70% 70%, rgba(0,194,201,0.18), transparent 60%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-6 py-20">
        <div className="mb-6 flex items-center justify-center gap-4 opacity-90">
          <Image src="/images/orave-logo-b.png" alt="Orave wordmark" width={160} height={44} className="h-16 w-auto" />
          <span className="text-3xl text-zinc-500">|</span>
          <span className="font-heading text-2xl tracking-[0.35em] text-[color:var(--spraygent-yellow)]">SPRAYGENT</span>
        </div>

       
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm text-zinc-300 md:text-base">
          “Revolutionizing Perfume Access – Luxury in Every Spray”
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Button
            asChild
            className="rounded-full bg-white px-6 text-black transition-all hover:opacity-90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[color:var(--orave-teal)]"
          >
            <a href="#about" aria-label="Explore the Orave | Spraygent story">
              <span className="inline-flex items-center gap-2">
                Explore <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </a>
          </Button>
          <Button
            asChild
            className="rounded-full bg-[color:var(--spraygent-yellow)] px-6 text-black transition-all hover:opacity-90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[color:var(--spraygent-yellow)]"
          >
            <a href="#cta" aria-label="Buy Spraygent now">
              <span className="inline-flex items-center gap-2">
                Buy Now <ShoppingCart className="h-4 w-4" aria-hidden />
              </span>
            </a>
          </Button>
        </div>

        {/* product mockup */}
        <div className="mt-12 md:mt-16">
          <div className="relative mx-auto max-w-4xl animate-[float_6s_ease-in-out_infinite]">
            <Image
              src="/images/spraygent-front.png"
              alt="Spraygent vending display"
              width={1400}
              height={980}
              priority
              className="w-full select-none rounded-2xl border border-white/10 bg-black/30 shadow-[0_0_80px_rgba(0,194,201,0.14)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-24 -bottom-8 h-28 rounded-full blur-2xl"
              style={{ background: "radial-gradient(55% 60% at 50% 50%, rgba(0,194,201,0.25), rgba(0,0,0,0))" }}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <div className="animate-bounce rounded-full border border-white/20/ [box-shadow:0_0_0_1px_rgba(255,255,255,0.06)_inset] px-3 py-1 text-[10px] tracking-[0.25em] text-zinc-400">
          SCROLL
        </div>
      </div>

      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
    </section>
  )
}
