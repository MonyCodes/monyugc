import { Reveal } from "@/components/site/reveal"

const TESTIMONIALS = [
  {
    quote:
      "Working with Mony was a seamless experience. He delivered high-quality video content tailored to our needs for APOB and was great to communicate with throughout the process. Highly recommended!",
    name: "Frances Fenn",
    role: "Marketing",
    brand: "APOB",
  },
  {
    quote:
      "Working with Mony was a great experience from start to finish. He was responsive, easy to communicate with, and knew how to capitalize on what worked while still bringing a unique spin to each creative for the brand. He not only executed on what we asked but also brought strong ideas to the table and was always willing to iterate based on results. I’d definitely recommend him to anyone looking for someone reliable, creative, and easy to work with.",
    name: "Garner Hall",
    role: "Research Collaborator",
    brand: "Journey",
  },
  {
    quote:
      "Mony was great to work with from start to finish. He was professional, responsive, and delivered high-quality UGC that fit exactly what we were looking for at MakeUGC. The content felt professional and performed really well. Would definitely recommend working with him!",
    name: "Cas",
    role: "CEO",
    brand: "MakeUGC",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function Testimonials() {
  return (
    <section id="feedback" className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Client feedback
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            What my clients say:
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Straight from the teams I&rsquo;ve shot for &mdash; unedited.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:items-start">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className={i === 1 ? "md:mt-10" : undefined}
            >
              <figure className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-7">
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-4 right-6 h-16 font-display text-[6rem] leading-[1] text-accent/15 transition-colors duration-300 group-hover:text-accent/25"
                >
                  &rdquo;
                </span>

                <blockquote className="relative pt-8 text-[0.975rem] leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="relative mt-auto flex items-center gap-3 border-t border-border pt-5">
                  <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-[0.6rem] bg-gradient-to-b from-background to-muted font-display text-sm font-extrabold tracking-tight ring-1 ring-border">
                    <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/30 to-transparent opacity-70 dark:from-white/10" />
                    <span className="relative">{initials(t.name)}</span>
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {t.role ? `${t.role} @ ` : ""}
                      <span className="font-medium text-accent">{t.brand}</span>
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
