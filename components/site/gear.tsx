import Image from "next/image"

import { Reveal } from "@/components/site/reveal"
import iphone from "@/public/gear/iphone.webp"
import macbook from "@/public/gear/macbook.webp"
import djiMic from "@/public/gear/dji-mic.webp"

const GEAR = [
  {
    img: iphone,
    name: "iPhone 17 Pro Max",
    note: "Every frame shot on-device",
  },
  { img: djiMic, name: "DJI Mic Mini", note: "Clean voiceover, anywhere" },
  { img: macbook, name: "MacBook Pro", note: "Edit, colour, export, ship" },
]

export function Gear() {
  return (
    <section id="gear" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          What&rsquo;s in my bag
        </h2>
        
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {GEAR.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.06}>
            <article className="flex h-full flex-col items-center rounded-3xl border border-border bg-card p-8 text-center">
              <div className="grid h-40 w-full place-items-center">
                <Image
                  src={g.img}
                  alt={g.name}
                  placeholder="blur"
                  className="max-h-40 w-auto object-contain"
                  sizes="(max-width: 640px) 60vw, 260px"
                />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold">{g.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.note}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
