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

      <div className="mt-3 h-[150px] w-full sm:h-[180px]">
        <MarqueeAlongSvgPath
          path={PATH}
          pathId="trusted-ribbon"
          viewBox="0 0 3340 200"
          baseVelocity={6}
          slowdownOnHover
          slowDownFactor={0.25}
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
              className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-background p-3 shadow-md transition-transform duration-300 ease-out hover:scale-125 sm:h-[4.5rem] sm:w-[4.5rem]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.label}
                draggable={false}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </MarqueeAlongSvgPath>
      </div>
    </section>
  )
}
