import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display font-bold text-foreground">
          MONY YANG<span className="text-accent">.</span>
        </p>
        <p className="text-xs tracking-[0.16em] uppercase">
          tiktok @mony_ugcs&nbsp;&nbsp;/&nbsp;&nbsp;insta @mony_ugcs
        </p>
        <nav className="flex gap-5">
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
        </nav>
      </div>
      <p className="pb-8 text-center text-xs text-muted-foreground/70">
        &copy; {new Date().getFullYear()} Mony Yang. All rights reserved.
      </p>
    </footer>
  )
}
