"use client"

import { useState } from "react"
import { Pause, Play } from "lucide-react"

// Each file in /logos is a 144px full-color app icon; the name sits beside it.
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
            src={logo.src}
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

export function TrustedMarquee() {
  const [paused, setPaused] = useState(false)

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

      {/* Two copies of the list slide left by 50% for a seamless loop; the
          edges fade out so logos glide in and out. */}
      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div
          className="animate-marquee flex w-max motion-reduce:[animation-play-state:paused]"
          style={{
            animationDuration: "80s",
            animationPlayState: paused ? "paused" : undefined,
          }}
        >
          <LogoList />
          <LogoList hidden />
        </div>
      </div>
    </section>
  )
}
