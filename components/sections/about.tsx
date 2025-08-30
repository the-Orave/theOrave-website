import Image from "next/image"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28">
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">About</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400">
          Orave x Spraygent brings luxury fragrance access to any space through elegant, connected vending systems.
        </p>
      </div>

      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-5">
          <h3 className="font-heading text-xl font-semibold tracking-tight">The Brand</h3>
          <p className="text-sm leading-relaxed text-zinc-300">
            Orave crafts premium automated experiences with industrial refinement. Spraygent powers precision dosing,
            smart selection, and discovery—uniting craft and intelligence.
          </p>
          <p className="text-sm leading-relaxed text-zinc-300">
            Designed for boutiques, lounges, and flagship spaces, it blends quietly into the environment while inviting
            a tactile, modern ritual.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4">
            <figure className="group overflow-hidden rounded-xl border border-white/10 bg-gray">
              <Image
                src="/product/edge.png"
                alt="Spraygent machine, side perspective"
                width={900}
                height={900}
                className="w-full transition duration-500  group-hover:scale-[1.03]"
              />
            </figure>
            <figure className="group overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/hero.png"
                alt="Spraygent front display illuminated"
                width={900}
                height={900}
                className="w-full  transition duration-500  group-hover:scale-[1.03]"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
