import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Orave | Spraygent",
  description: "Revolutionizing Perfume Access – Luxury in Every Spray",
    generator: 'sai'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${montserrat.variable} antialiased`}>
      <body className="bg-black text-white font-sans">
        {/* brand variables + global tweaks */}
        <style>{`
          :root {
            --orave-teal: #00C2C9;
            --spraygent-yellow: #FFC700;
            --lux-gray: #AAAAAA;
          }
          html { scroll-behavior: smooth; }
        `}</style>
        {children}
      </body>
    </html>
  )
}
