"use client"

import Image from "next/image"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const slides = [
  { src: "/product/prime.png", alt: "Front display", caption: "SPRAYGENT PRIME" },
  { src: "/product/view.png", alt: "Side perspective", caption: "SPRAYGENT VIEW" },
  { src: "/product/edge.png", alt: "Interface detail", caption: "SPRAYGENT EDGE" },
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

      {/* Info section */}
      <div className="mt-12">
        <div className="relative w-full">
          <Image
            src="/info.png"
            alt="Product information"
            width={1200}
            height={800}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}
