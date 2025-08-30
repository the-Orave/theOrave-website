"use client"

import Image from "next/image"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const slides = [
  { src: "/product/prime.png", alt: "Front display", caption: "PRIME" },
  { src: "/product/view.png", alt: "Side perspective", caption: "VIEW" },
  { src: "/product/edge.png", alt: "Interface detail", caption: "EDGE" },
]

export function Showcase() {
  const track = useRef<HTMLDivElement>(null)
  const scrollBy = (delta: number) => track.current?.scrollBy({ left: delta, behavior: "smooth" })

  return (
    <section id="showcase" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">Product Showcase</h2>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">Explore the machine from every angle.</p>
        </div>
        <div className="hidden gap-2 md:flex">
          <Button variant="outline" onClick={() => scrollBy(-400)} className="border-white/20">
            Prev
          </Button>
          <Button onClick={() => scrollBy(400)} className="bg-[color:var(--orave-teal)] text-black hover:opacity-90">
            Next
          </Button>
        </div>
      </div>

      <div
        ref={track}
        className="relative flex snap-x snap-mandatory gap-6 overflow-x-auto rounded-2xl border border-white/10 p-4 [scrollbar-width:none] lux-edge-fade"
      >
        {slides.map((s, i) => (
          <figure key={i} className="group relative w-[82%] min-w-[82%] snap-center md:w-[48%] md:min-w-[48%]">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
              <Image
                src={s.src || "/placeholder.svg"}
                alt={s.alt}
                width={1400}
                height={900}
                className="w-full grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-sm text-zinc-400">{s.caption}</figcaption>
          </figure>
        ))}
      </div>

      {/* Faux 3D rotating mockup */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="relative mx-auto w-full max-w-md [perspective:1400px]">
          <div className="relative aspect-[4/3] w-full rounded-2xl border border-white/10 bg-zinc-900/40 shadow-inner [transform-style:preserve-3d] [animation:turn_14s_ease-in-out_infinite]">
            <Image
              src="/images/spraygent-side.png"
              alt="Rotating mockup"
              width={1200}
              height={900}
              className="absolute inset-0 h-full w-full rounded-2xl object-cover opacity-90"
            />
          </div>
          <style>{`@keyframes turn{0%{transform:rotateY(-12deg)}50%{transform:rotateY(12deg)}100%{transform:rotateY(-12deg)}}`}</style>
        </div>

        <ul className="grid gap-4 text-sm text-zinc-300">
          <li className="rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900/40 to-black p-5">
            <strong className="text-white">Precision Dosing</strong>
            <div className="text-zinc-400">Consistent spray volume with hygienic atomization.</div>
          </li>
          <li className="rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900/40 to-black p-5">
            <strong className="text-white">AI Selection</strong>
            <div className="text-zinc-400">Context-aware recommendations to delight customers.</div>
          </li>
          <li className="rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900/40 to-black p-5">
            <strong className="text-white">IoT Connected</strong>
            <div className="text-zinc-400">Remote telemetry, inventory, and secure updates.</div>
          </li>
        </ul>
      </div>
    </section>
  )
}
