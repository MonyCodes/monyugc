"use client"

import * as React from "react"
import { Play, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/site/reveal"
import { BrandLabel } from "@/components/site/brand-label"
import type { BrandKey } from "@/lib/brands"
import { clipMeta, moreReels, poster, video } from "@/lib/showcase"

function VideoTile({
  id,
  brand,
  meta,
  onOpen,
  className,
}: {
  id: string
  brand: BrandKey
  meta: string
  onOpen: () => void
  className?: string
}) {
  const ref = React.useRef<HTMLVideoElement>(null)

  const play = () => ref.current?.play().catch(() => {})
  const stop = () => {
    const el = ref.current
    if (!el) return
    el.pause()
    el.currentTime = 0
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={play}
      onMouseLeave={stop}
      className={cn(
        "group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-transform duration-300 ease-out hover:-translate-y-1 hover:ring-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:aspect-auto",
        className
      )}
    >
      <video
        ref={ref}
        src={video(id)}
        poster={poster(id)}
        muted
        loop
        playsInline
        preload="none"
        className="h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/0 to-black/0" />
      <span className="pointer-events-none absolute inset-x-0 top-0 p-3 pr-14 text-left">
        <BrandLabel brand={brand} className="text-sm text-white sm:text-base" />
        {meta && (
          <span className="mt-1 block truncate text-xs text-white/70">
            {meta}
          </span>
        )}
      </span>
      <span className="pointer-events-none absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
        <Play className="size-4 fill-current" />
      </span>
    </button>
  )
}

export function Reels() {
  const [open, setOpen] = React.useState<string | null>(null)

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

  const active = open ? moreReels.find((c) => c.id === open) : null
  const meta = (c: (typeof moreReels)[number]) =>
    [c.title, clipMeta(c)].filter(Boolean).join(" · ")

  return (
    <section id="reels" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          More reels
        </h2>
        <p className="mt-3 max-w-lg text-muted-foreground">
          Three picks up top, the rest in the gallery below. Tap any clip for
          full screen.
        </p>
      </div>

      {/* One grid so phones get an even two-up layout. On larger screens the
          first row (the three picks) is taller than the rest. */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
        {moreReels.map((c, i) => {
          const pick = i < 3
          // An odd clip left alone on the last two-up row sits centred.
          const lone = i === moreReels.length - 1 && moreReels.length % 2 === 1
          return (
            <Reveal
              key={c.id}
              delay={(i % 3) * 0.05}
              className={cn(
                lone &&
                  "col-span-2 mx-auto w-[calc(50%-0.5rem)] sm:col-span-1 sm:mx-0 sm:w-auto"
              )}
            >
              <VideoTile
                id={c.id}
                brand={c.brand}
                meta={meta(c)}
                onOpen={() => setOpen(c.id)}
                className={
                  pick
                    ? "sm:h-[clamp(420px,52vw,560px)]"
                    : "sm:h-[clamp(320px,32vw,420px)]"
                }
              />
            </Reveal>
          )
        })}
      </div>

      {active && (
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
              key={active.id}
              src={video(active.id)}
              poster={poster(active.id)}
              autoPlay
              controls
              loop
              playsInline
              className="w-full rounded-2xl bg-black shadow-2xl"
            />
            <div className="mt-3 flex items-center justify-between gap-3 text-sm text-white">
              <BrandLabel brand={active.brand} className="text-base" />
              <span className="truncate text-white/60">{meta(active)}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
