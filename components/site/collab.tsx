import Image from "next/image"
import { ArrowUpRight, Mail } from "lucide-react"

import { Reveal } from "@/components/site/reveal"
import { InstagramIcon } from "@/components/site/icons"
import collab from "@/public/photos/collab.webp"

export function Collab() {
  return (
    <section id="collab" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="overflow-hidden rounded-[2rem] border border-border bg-primary text-primary-foreground">
        <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
              Let&rsquo;s collab.
            </h2>
            <p className="mt-4 max-w-sm text-primary-foreground/75">
              Have a project in mind? Contact me! Let’s create something that will make you money.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="mailto:contact@mediabymony.com"
                className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                <Mail className="size-4" />
                Reach out
                <ArrowUpRight className="size-4" />
              </a>
              <a
                aria-label="Instagram @mony_ugcs"
                href="https://www.instagram.com/mony_ugcs"
                className="grid size-11 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white/10"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              contact@mediabymony.com
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xs">
            <div className="overflow-hidden rounded-[1.6rem] border border-white/15 shadow-xl">
              <Image
                src={collab}
                alt="Media by Mony"
                placeholder="blur"
                className="aspect-[4/5] w-full object-cover"
                sizes="(max-width: 768px) 80vw, 320px"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
