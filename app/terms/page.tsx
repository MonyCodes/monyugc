import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Use — Mony Yang",
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        &larr; Back
      </Link>
      <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight">
        Terms of Use
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-semibold text-foreground">About</h2>
          <p className="mt-2">
            This site is the personal portfolio of Mony Yang, a UGC creator and
            short-form video editor. It exists to show past work and to make
            contact easy.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            Content and ownership
          </h2>
          <p className="mt-2">
            The videos, images, text and layout on this site are owned by Mony
            Yang or the respective brands the work was made for, and are shown
            here as portfolio samples. Do not copy, redistribute or reuse them
            without written permission.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">No warranty</h2>
          <p className="mt-2">
            The site is provided &ldquo;as is&rdquo;. Metrics shown (view
            counts, follower numbers and similar) are approximate and provided
            for context, not as a guarantee of future results.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">Contact</h2>
          <p className="mt-2">
            Questions about these terms or a collaboration:{" "}
            <a className="underline" href="mailto:contact@mediabymony.com">
              contact@mediabymony.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">Governing law</h2>
          <p className="mt-2">
            These terms are governed by the laws of the United States and the
            state in which the site owner resides, without regard to conflict of
            law rules.
          </p>
        </section>
      </div>
    </main>
  )
}
