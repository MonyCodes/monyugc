import Image from "next/image"
import { Mail } from "lucide-react"

import { Reveal } from "@/components/site/reveal"
import { InstagramIcon, TikTokIcon } from "@/components/site/icons"
import about from "@/public/photos/about.webp"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-14 pb-16 md:grid-cols-[1.15fr_.85fr] md:pt-20 md:pb-24">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              UGC creator &middot; short-form editor
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-[2.75rem] leading-[0.95] font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Creative
              <br />
              <span className="text-accent">Hustler.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              I make POV, b-roll voiceover and before/after ads for tech brands
              &mdash; the kind people actually watch to the end.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="mailto:biz.monyyang@gmail.com"
                className="inline-flex max-w-full items-center gap-2 truncate rounded-full bg-primary px-4 py-3 text-[13px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-sm"
              >
                <Mail className="size-4 shrink-0" />
                biz.monyyang@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <a
                  aria-label="TikTok @mony_ugcs"
                  href="https://www.tiktok.com/@mony_ugcs"
                  className="grid size-11 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
                >
                  <TikTokIcon className="size-4" />
                </a>
                <a
                  aria-label="Instagram @mony_ugcs"
                  href="https://www.instagram.com/mony_ugcs"
                  className="grid size-11 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
                >
                  <InstagramIcon className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-xs tracking-[0.18em] text-muted-foreground uppercase">
              tiktok @mony_ugcs&nbsp;&nbsp;/&nbsp;&nbsp;insta @mony_ugcs
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-accent/25" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-border bg-card shadow-xl">
              <Image
                src={about}
                alt="Mony Yang"
                placeholder="blur"
                priority
                className="aspect-[4/5] w-full object-cover"
                sizes="(max-width: 768px) 80vw, 320px"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rotate-[-4deg] rounded-xl bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg">
              ads people actually watch
            </div>
          </div>
        </Reveal>
      </div>

      <div className="dashed-rule mx-auto h-px max-w-6xl opacity-40" />
    </section>
  )
}
