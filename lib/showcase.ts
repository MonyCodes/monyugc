import type { BrandKey } from "@/lib/brands"

// Each clip is /reels/<id>.mp4 with a /reels/<id>.webp first frame.
// title, format, platform and views are optional: they show up next to the
// brand label once filled in.
export type Clip = {
  id: string
  brand: BrandKey
  title?: string
  format?: "POV Style" | "B-roll Voiceover" | "Before & After"
  platform?: "TikTok" | "Instagram Reels"
  views?: string
}

// "Top Performers" carousel, in this order.
export const topPerformers: Clip[] = [
  { id: "apob", brand: "apob" },
  { id: "journey-1", brand: "journey" },
  { id: "makeugc", brand: "makeugc" },
  { id: "promote", brand: "promote" },
  { id: "airalo", brand: "airalo" },
  { id: "unrot", brand: "unrot" },
]

// "More reels": the first three form the top row, the rest the gallery.
export const moreReels: Clip[] = [
  { id: "hixai", brand: "hixai" },
  { id: "pippit", brand: "pippit" },
  { id: "openart", brand: "openart" },
  { id: "journey-2", brand: "journey" },
  { id: "incogni-1", brand: "incogni" },
  { id: "pixara", brand: "pixara" },
  { id: "journey-3", brand: "journey" },
  { id: "incogni-2", brand: "incogni" },
  { id: "journey-4", brand: "journey" },
]

export const clipMeta = (c: Clip) =>
  [c.format, c.platform, c.views].filter(Boolean).join(" · ")

export const video = (id: string) => `/reels/${id}.mp4`
export const poster = (id: string) => `/reels/${id}.webp`
