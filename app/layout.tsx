import type { Metadata } from "next"
import { Bricolage_Grotesque, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
})

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mediabymony.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Media by Mony — UGC & Short-form Ads",
  description:
    "Mony Yang is a UGC creator and short-form editor making POV, b-roll voiceover and before/after ads for tech brands. 200K+ monthly views, 21+ brand deals.",
  keywords: [
    "UGC creator",
    "short-form video",
    "TikTok ads",
    "Instagram Reels",
    "b-roll voiceover",
    "POV ads",
    "Mony UGC",
    "Mony",
    "Traditional UGC",
    "Media by Mony",
    "Mony Yang",
  ],
  authors: [{ name: "Media by Mony" }],
  openGraph: {
    title: "Media by Mony — UGC & Short-form Ads",
    description:
      "POV, b-roll voiceover and before/after ads for tech brands. 200K+ monthly views.",
    url: SITE,
    siteName: "Mony Yang Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media by Mony — UGC & Short-form Ads",
    description:
      "POV, b-roll voiceover and before/after ads for tech brands. 200K+ monthly views.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mony Yang",
  jobTitle: "UGC Creator & Short-form Editor",
  email: "contact@mediabymony.com",
  url: SITE,
  sameAs: [
    "https://www.tiktok.com/@mony_ugcs",
    "https://www.instagram.com/mony_ugcs",
  ],
  knowsAbout: ["UGC", "Short-form video", "Paid social ads", "Video editing"],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", inter.variable, display.variable)}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
