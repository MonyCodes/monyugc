import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — Mony Yang",
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        &larr; Back
      </Link>
      <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-semibold text-foreground">Who runs this site</h2>
          <p className="mt-2">
            This is the personal portfolio of Mony Yang. Questions about privacy
            can go to{" "}
            <a className="underline" href="mailto:contact@mediabymony.com">
              contact@mediabymony.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            What this site collects
          </h2>
          <p className="mt-2">
            Nothing directly. There are no analytics scripts, no advertising
            pixels, and no cookies set for tracking. A light preference (light
            or dark theme) may be stored in your browser&rsquo;s local storage
            and never leaves your device.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">Hosting</h2>
          <p className="mt-2">
            The site is hosted on Vercel. Like any web host, Vercel processes
            standard request data (IP address, timestamp, requested URL, browser
            user-agent) in server logs to deliver the site and keep it secure.
            See Vercel&rsquo;s privacy policy for details on their practices.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">Embedded media</h2>
          <p className="mt-2">
            Videos and images are served from this site&rsquo;s own domain.
            Nothing is embedded from YouTube, Vimeo, Instagram or TikTok. Links
            to external profiles only load after you click them.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">Email</h2>
          <p className="mt-2">
            If you email the address above, that message and your contact
            details are used only to reply and are not added to any list.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">Your choices</h2>
          <p className="mt-2">
            You can browse without providing any personal information. If you
            are a California resident or covered by similar state privacy laws,
            you may request access to or deletion of any personal information
            held about you by emailing the address above.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">Changes</h2>
          <p className="mt-2">
            This policy may be updated from time to time. The date at the top
            reflects the latest version.
          </p>
        </section>
      </div>
    </main>
  )
}
