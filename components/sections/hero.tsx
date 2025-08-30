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
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" aria-label="Connect with us on WhatsApp">
              <span className="inline-flex items-center gap-2">
                Connect on WhatsApp <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </span>
            </a>
          </Button>
        </div>

        {/* product mockup */}
        <div className="mt-12 md:mt-16">
          <div className="relative mx-auto max-w-4xl animate-[float_6s_ease-in-out_infinite]">
            <Image
              src="/product/prime.png"
              alt="Spraygent vending display"
              width={1400}
              height={980}
              priority
              className="w-full select-none rounded-2xl  drop-shadow-[0_0_80px_rgba(0,194,201,0.6)] drop-shadow-[0_0_120px_rgba(0,194,201,0.4)] drop-shadow-[0_0_160px_rgba(0,194,201,0.2)]"
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
