"use client"

import * as React from "react"
import { Volume2, VolumeX, X } from "lucide-react"

import {
  CoverflowCarousel,
  type CoverflowSlide,
} from "@/components/ui/coverflow-carousel"
import { BrandLabel } from "@/components/site/brand-label"
import { brands } from "@/lib/brands"
import { clipMeta, poster, topPerformers, video } from "@/lib/showcase"

const BEST = topPerformers

export function ProjectsCoverflow() {
  const [sound, setSound] = React.useState(false)
  const [open, setOpen] = React.useState<string | null>(null)

  const slides: CoverflowSlide[] = BEST.map((c) => ({
    src: poster(c.id),
    video: video(c.id),
    alt: `${brands[c.brand]} ad`,
    caption: (
      <BrandLabel
        brand={c.brand}
        className="text-lg text-foreground/90 sm:text-xl"
        iconClassName="size-8 sm:size-9 rounded-[9px] sm:rounded-[10px]"
      />
    ),
    subtitle: [c.title, clipMeta(c)].filter(Boolean).join(" · ") || undefined,
  }))

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  const activeClip = open ? BEST.find((c) => c.id === open) : null

  return (
    <section
      id="work"
      className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16 sm:py-20"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="font-display text-5xl leading-[0.95] font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          Top Performers
        </h2>
      </div>

      <div className="mt-8">
        <CoverflowCarousel
          slides={slides}
          muted={!sound}
          showCaption
          showNavigation
          loop
          rotate={30}
          depth={0.32}
          perspective={3.4}
          fade={0.16}
          gap={0.06}
          cardWidth="clamp(168px, 46vw, 236px)"
          cardHeight="clamp(300px, 82vw, 420px)"
          label="Showreel"
          cardClassName="ring-1 ring-border"
          onCardClick={(i) => setOpen(BEST[i]?.id ?? null)}
          centerOverlay={
            <button
              type="button"
              aria-label={sound ? "Mute" : "Unmute"}
              onClick={(e) => {
                e.stopPropagation()
                setSound((s) => !s)
              }}
              className="absolute right-3 bottom-3 z-20 grid size-10 place-items-center rounded-full bg-black/55 text-white backdrop-blur transition hover:bg-black/75"
            >
              {sound ? (
                <Volume2 className="size-4" />
              ) : (
                <VolumeX className="size-4" />
              )}
            </button>
          }
        />
      </div>

      {activeClip && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={() => setOpen(null)}
          >
            <X className="size-5" />
          </button>
          <div
            className="flex w-full max-w-[min(94vw,calc(100svh*0.5625))] flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={activeClip.id}
              src={video(activeClip.id)}
              poster={poster(activeClip.id)}
              autoPlay
              controls
              loop
              playsInline
              className="w-full rounded-2xl bg-black shadow-2xl"
            />
            <div className="mt-3 flex items-center justify-between gap-3 text-sm text-white">
              <BrandLabel brand={activeClip.brand} className="text-base" />
              <span className="truncate text-white/60">
                {[activeClip.title, clipMeta(activeClip)]
                  .filter(Boolean)
                  .join(" · ")}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
