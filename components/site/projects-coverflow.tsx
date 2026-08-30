"use client"

import * as React from "react"
import { Volume2, VolumeX, X } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  CoverflowCarousel,
  type CoverflowSlide,
} from "@/components/ui/coverflow-carousel"
import { clips, formats, poster, video } from "@/lib/showcase"

type Filter = "All" | (typeof formats)[number]
const FILTERS: Filter[] = ["All", ...formats]

const byFeatured = (a: { featured: boolean }, b: { featured: boolean }) =>
  Number(b.featured) - Number(a.featured)

export function ProjectsCoverflow() {
  const [filter, setFilter] = React.useState<Filter>("All")
  const [sound, setSound] = React.useState(false)
  const [open, setOpen] = React.useState<string | null>(null)
  const sectionRef = React.useRef<HTMLElement>(null)

  const list = React.useMemo(
    () =>
      [...clips]
        .filter((c) => filter === "All" || c.format === filter)
        .sort(byFeatured),
    [filter]
  )

  const slides: CoverflowSlide[] = list.map((c) => ({
    src: poster(c.id),
    video: video(c.id),
    alt: c.title,
    title: c.title,
    subtitle: `${c.format} · ${c.platform} · ${c.views}`,
  }))

  const pick = (f: Filter) => {
    setFilter(f)
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

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

  const activeClip = open ? clips.find((c) => c.id === open) : null

  return (
    <section
      ref={sectionRef}
      id="work"
      className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16 sm:py-20"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          The work
        </h2>
        <p className="mt-3 max-w-lg text-muted-foreground">
          Swipe the reel. The middle clip plays &mdash; flip on sound, or tap a
          clip for full screen.
        </p>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => pick(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:text-foreground"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <CoverflowCarousel
          key={filter}
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
          label={`Showreel — ${filter}`}
          cardClassName="ring-1 ring-border"
          onCardClick={(i) => setOpen(list[i]?.id ?? null)}
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
            <div className="mt-3 flex items-center justify-between text-sm text-white">
              <span className="font-medium">{activeClip.title}</span>
              <span className="text-white/60">
                {activeClip.format} · {activeClip.platform} · {activeClip.views}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
