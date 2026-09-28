"use client"

import { useEffect, useRef, useState, type PointerEvent } from "react"
import { Pause, Play } from "lucide-react"

// Each file in /logos is a 144px full-color app icon; the name sits beside it.
// Bump LOGO_VERSION whenever a logo file is replaced, so browsers (phones
// especially) fetch the new image instead of showing a cached old one.
const LOGO_VERSION = 2
const LOGOS = [
  { src: "/logos/pippit.webp", label: "Pippit" },
  { src: "/logos/superprofile.webp", label: "SuperProfile" },
  { src: "/logos/coinviral.webp", label: "CoinViral" },
  { src: "/logos/journey.webp", label: "Journey" },
  { src: "/logos/sourceready.webp", label: "Source Ready" },
  { src: "/logos/makeugc.webp", label: "MakeUGC" },
  { src: "/logos/omi.webp", label: "Omi" },
  { src: "/logos/evadegpt.webp", label: "EvadeGPT" },
  { src: "/logos/promote.webp", label: "Promote" },
  { src: "/logos/unrot.webp", label: "Unrot" },
  { src: "/logos/hixai.webp", label: "HIX.AI" },
  { src: "/logos/airalo.webp", label: "Airalo" },
  { src: "/logos/whop.webp", label: "Whop" },
  { src: "/logos/cluely.webp", label: "Cluely" },
  { src: "/logos/openart.webp", label: "OpenArt" },
  { src: "/logos/primexbt.webp", label: "PrimeXBT" },
  { src: "/logos/klap.webp", label: "Klap" },
  { src: "/logos/incogni.webp", label: "Incogni" },
  { src: "/logos/vmeg.webp", label: "VMEG" },
  { src: "/logos/pixara.webp", label: "Pixara" },
  { src: "/logos/apob.webp", label: "Apob AI" },
  { src: "/logos/invo.webp", label: "Invo" },
]

function LogoList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0" aria-hidden={hidden || undefined}>
      {LOGOS.map((logo) => (
        <li
          key={logo.label}
          className="flex items-center gap-3 px-7 text-xl font-semibold tracking-[-0.02em] whitespace-nowrap text-foreground/80 sm:gap-3.5 sm:px-9 sm:text-2xl"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${logo.src}?v=${LOGO_VERSION}`}
            alt=""
            width={44}
            height={44}
            draggable={false}
            className="size-9 rounded-[10px] shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.06)] sm:size-11 sm:rounded-[12px] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.3)]"
          />
          <span>{logo.label}</span>
        </li>
      ))}
    </ul>
  )
}

const SPEED = 50 // px per second while auto-scrolling
const HOVER_FACTOR = 0.2 // slow down under the cursor, like the old ribbon

export function TrustedMarquee() {
  const [paused, setPaused] = useState(false)
  const scroller = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(paused)
  const hovered = useRef(false)
  const drag = useRef<{ x: number; left: number } | null>(null)

  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  // Respect reduced motion: start paused, the visitor can still scroll.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPaused(true)
    }
  }, [])

  // Auto-scroll by nudging scrollLeft, so the row stays a real scroll
  // container: swipe, trackpad and drag all work and auto-scroll carries on
  // from wherever the visitor leaves it. Two copies of the list let it wrap.
  useEffect(() => {
    const el = scroller.current
    if (!el) return
    let pos = el.scrollLeft
    let last = performance.now()
    let userUntil = 0 // hands off while the visitor is scrolling (keeps iOS momentum)
    let frame = 0

    const tick = (now: number) => {
      const dt = Math.min(now - last, 100) / 1000
      last = now
      const half = el.scrollWidth / 2
      // the visitor scrolled: continue from there once they let go
      if (Math.abs(el.scrollLeft - pos) > 1) {
        pos = el.scrollLeft
        userUntil = now + 1200
      }
      const userActive = now < userUntil || drag.current !== null
      if (!pausedRef.current && !userActive) {
        pos += SPEED * dt * (hovered.current ? HOVER_FACTOR : 1)
      }
      // Both copies are identical, so jumping by half is invisible. Keeping
      // pos away from 0 also lets visitors scroll backwards from the start.
      let wrapped = false
      if (half > 0 && pos >= half) {
        pos -= half
        wrapped = true
      } else if (half > 0 && pos < 1) {
        pos += half
        wrapped = true
      }
      if (!userActive || wrapped) el.scrollLeft = pos
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  // Click-and-drag for mouse users (touch and trackpads scroll natively).
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !scroller.current) return
    drag.current = { x: e.clientX, left: scroller.current.scrollLeft }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || !scroller.current) return
    scroller.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x)
  }
  const endDrag = () => {
    drag.current = null
  }

  return (
    <section
      aria-labelledby="trusted-title"
      className="relative w-full pt-6 pb-16 sm:pb-18"
    >
      <div className="flex items-center justify-center gap-3">
        <h2
          id="trusted-title"
          className="text-sm font-medium text-muted-foreground"
        >
          Trusted by
        </h2>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? "Play logo carousel" : "Pause logo carousel"}
          className="grid size-7 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
        >
          {paused ? <Play className="size-3" /> : <Pause className="size-3" />}
        </button>
      </div>

      {/* Edges fade out so logos glide in and out. */}
      <div
        ref={scroller}
        role="region"
        tabIndex={0}
        aria-label="Brands, scrollable"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onMouseEnter={() => (hovered.current = true)}
        onMouseLeave={() => (hovered.current = false)}
        className="mt-6 cursor-grab overflow-x-auto overscroll-x-contain [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] [scrollbar-width:none] select-none active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-max">
          <LogoList />
          <LogoList hidden />
        </div>
      </div>
    </section>
  )
}
