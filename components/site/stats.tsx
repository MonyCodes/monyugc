import { Reveal } from "@/components/site/reveal"

const STATS = [
  { value: "200K+", label: "Weekly views" },
  { value: "10K", label: "Weekly interactions" },
  { value: "12+", label: "Brand deals" },
  { value: "2.2K", label: "Followers" },
]

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <Reveal className="rounded-3xl border border-border bg-primary text-primary-foreground">
        <dl className="grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-8 text-center">
              <dt className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-xs tracking-[0.16em] text-primary-foreground/70 uppercase">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
