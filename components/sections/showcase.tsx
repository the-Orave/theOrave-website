"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const slides = [
  { src: "/product/edge.png", alt: "Interface detail", caption: "SPRAYGENT EDGE" },
 
  { src: "/product/view.png", alt: "Side perspective", caption: "SPRAYGENT VIEW" },
  { src: "/hero.png", alt: "Front display", caption: "SPRAYGENT PRIME" },
]

export function Showcase() {
  return (
    <section id="showcase" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">Product Showcase</h2>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">Explore the machine from every angle.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slides.map((s, i) => (
          <figure 
            key={i} 
            className="group relative"
          >
            <div className="rounded-xl border border-white/10 bg-zinc-900 h-100">
              <Image
                src={s.src || "/placeholder.svg"}
                alt={s.alt}
                width={1400}
                height={900}
                className="w-full h-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-sm font-bold text-zinc-400 text-center">
              {s.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Info section */}
      <div className="mt-12 flex flex-col items-left justify-start">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">Product Information</h2>
      <p className="mt-2 max-w-xl text-sm text-zinc-400">Features</p>
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
