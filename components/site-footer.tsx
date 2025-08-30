import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-black/60">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image src="/orave.png" alt="Orave" width={110} height={28} className="h-7 w-auto" />
            <span className="font-heading text-sm font-semibold text-[color:var(--spraygent-yellow)]">SPRAYGENT</span>
          </div>
          <p className="max-w-xs text-xs text-zinc-400">
            Luxury fragrance access, engineered by Orave. Spraygent platform inside.
          </p>
        </div>

        <nav aria-label="Social" className="space-y-3">
          <h3 className="text-sm font-semibold text-zinc-300">Social</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="#" className="hover:text-white">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                X / Twitter
              </Link>
            </li>
          </ul>
        </nav>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-zinc-300">Contact</h3>
          <address className="not-italic text-sm text-zinc-400">
            partnerships@orave.com
            <br />
            support@spraygent.com
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Orave · Spraygent. All rights reserved.
      </div>
    </footer>
  )
}
