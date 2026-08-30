"use client"

import * as React from "react"

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#gear", label: "Gear" },
  { href: "#results", label: "Results" },
]

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={
        "sticky top-0 z-50 transition-colors " +
        (scrolled
          ? "border-b border-border bg-background/85 backdrop-blur"
          : "border-b border-transparent")
      }
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#top"
          className="font-display text-lg font-extrabold tracking-tight"
        >
          MONY<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#collab"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Let&rsquo;s collab
        </a>
      </nav>
    </header>
  )
}
