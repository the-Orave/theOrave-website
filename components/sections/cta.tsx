import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="cta" className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-24 text-center md:px-6 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(255,199,0,0.08), rgba(0,0,0,0))" }}
      />
      <h2 className="relative z-10 font-heading text-3xl font-semibold md:text-4xl">Perfume. Anywhere. Anytime.</h2>
      <p className="relative z-10 mx-auto mt-3 max-w-xl text-sm text-zinc-400">
        Bring Spraygent to your venue or integrate Orave hardware into your retail concept.
      </p>
      <div className="relative z-10 mt-8 flex items-center justify-center gap-3">
        <Button className="rounded-full bg-[color:var(--orave-teal)] px-6 text-black transition-all hover:opacity-90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[color:var(--spraygent-yellow)]">
          Get Started
        </Button>
        <Button
          variant="outline"
          className="rounded-full border-[color:var(--spraygent-yellow)] px-6 bg-transparent text-white transition-all hover:bg-white/5 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[color:var(--orave-teal)]"
        >
          Partner with Us
        </Button>
      </div>
    </section>
  )
}
