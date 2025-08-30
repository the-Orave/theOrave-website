import type React from "react"
import { Brain, Cpu, Wifi } from "lucide-react"

export function Technology() {
  return (
    <section id="technology" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28">
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">Technology & Innovation</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400">
          Engineered for reliability, designed for allure. Each module delivers a seamless ritual.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <TechCard
          icon={<Brain className="h-6 w-6 text-[color:var(--orave-teal)]" aria-hidden />}
          title="Smart Cloud Integration"
          text="Cloud-based scent management and synchronization across devices."
        />
        <TechCard
          icon={<Wifi className="h-6 w-6 text-[color:var(--spraygent-yellow)]" aria-hidden />}
          title="IoT Capability"
          text="Cloud monitoring, encrypted updates, and real-time analytics."
        />
        <TechCard
          icon={<Cpu className="h-6 w-6 text-[color:var(--orave-teal)]" aria-hidden />}
          title="Ease of Use"
          text="Tactile controls, accessible UI, and multilingual instructions."
        />
      </div>
    </section>
  )
}

function TechCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(40% 40% at 50% 0%, rgba(0,194,201,0.18), transparent)" }}
      />
      <div className="relative z-10">
        <div className="mb-3 inline-flex rounded-lg bg-white/5 p-3">{icon}</div>
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-zinc-400">{text}</p>
      </div>
    </div>
  )
}
