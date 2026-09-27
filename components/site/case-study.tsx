import Image from "next/image"

import { Reveal } from "@/components/site/reveal"
import before from "@/public/photos/dashboard-before.webp"
import after from "@/public/photos/dashboard-after.webp"

const METRICS = [
  { value: "+33", label: "Posts in 2 months" },
  { value: "+27K", label: "New followers" },
  { value: "+2.1M", label: "Views" },
  { value: "+25K", label: "New sign-ups driven" },
]

export function CaseStudy() {
  return (
    <section id="results" className="border-t border-border bg-card/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Case study
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Promote.fun
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Two months running the account end to end &mdash; format testing,
            daily posting, doubling down on what worked.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <figure className="overflow-hidden rounded-3xl border border-border bg-muted p-3">
              <Image
                src={before}
                alt="Account dashboard before"
                placeholder="blur"
                className="w-full rounded-xl object-cover"
                sizes="(max-width: 640px) 90vw, 520px"
              />
              <figcaption className="mt-3 px-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Before
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.06}>
            <figure className="overflow-hidden rounded-3xl border border-border bg-muted p-3">
              <Image
                src={after}
                alt="Account dashboard after"
                placeholder="blur"
                className="w-full rounded-xl object-cover"
                sizes="(max-width: 640px) 90vw, 520px"
              />
              <figcaption className="mt-3 px-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                After
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal>
          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-border bg-background p-5"
              >
                <dt className="font-display text-3xl font-extrabold tracking-tight">
                  {m.value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
