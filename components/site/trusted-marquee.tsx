"use client"

import MarqueeAlongSvgPath from "@/components/ui/marquee-along-svg-path"

const LOGOS = [
  { src: "/logos/pippit.webp", label: "Pippit" },
  { src: "/logos/superprofile.webp", label: "SuperProfile" },
  { src: "/logos/coinviral.webp", label: "CoinViral" },
  { src: "/logos/journey.webp", label: "Journey" },
  { src: "/logos/sourceready.webp", label: "Source Ready" },
  { src: "/logos/makeugc.webp", label: "MakeUGC" },
  { src: "/logos/omi.webp", label: "Omi" },
  { src: "/logos/evadegpt.webp", label: "EvadeGPT" },
  { src: "/logos/promote.webp", label: "Promote.fun" },
  { src: "/logos/unrot.webp", label: "Unrot" },
  { src: "/logos/hixai.webp", label: "HIX.AI" },
]

// Real pixels: the component moves items along the raw path, so this runs from
// well off the left edge to well off the right. Items enter one side, ride the
// shallow wave across the full width, and leave the other. A nod to the dashed
// arrow on the original Canva site.
const PATH =
  "M-300 96 C 200 24, 620 24, 1040 104 S 1900 184, 2320 104 S 3180 24, 3640 88"

export function TrustedMarquee() {
  return (
    <section className="relative w-full overflow-hidden border-y border-border bg-card/60 py-10 sm:py-12">
      <p className="text-center text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
        Trusted by
      </p>

      <div className="mt-4 h-[210px] w-full sm:h-[260px]">
        <MarqueeAlongSvgPath
          path={PATH}
          pathId="trusted-ribbon"
          viewBox="0 0 3340 200"
          baseVelocity={2.4}
          slowdownOnHover
          slowDownFactor={0.2}
          draggable
          grabCursor
          dragSensitivity={0.12}
          repeat={3}
          className="h-full w-full"
        >
          {LOGOS.map((logo) => (
            <div
              key={logo.label}
              title={logo.label}
              className="group relative grid h-[5.25rem] w-[5.25rem] place-items-center rounded-[1.6rem] bg-gradient-to-b from-background to-card p-3.5 shadow-[0_16px_34px_-12px_rgba(0,0,0,0.5)] ring-1 ring-border transition-transform duration-300 ease-out hover:scale-110 sm:h-28 sm:w-28 sm:rounded-[2rem] sm:p-5"
            >
              <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/30 to-transparent opacity-70 dark:from-white/10" />
              <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.label}
                draggable={false}
                className="relative max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </MarqueeAlongSvgPath>
      </div>
    </section>
  )
}
