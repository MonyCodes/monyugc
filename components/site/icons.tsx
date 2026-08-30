/** Brand glyphs — lucide dropped its social icons, so these live here. */

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M16.5 3c.3 2 1.6 3.8 3.5 4.2v2.9c-1.4.1-2.8-.3-4-1v6.4a6.4 6.4 0 1 1-6.4-6.4c.3 0 .6 0 .9.1v3a3.4 3.4 0 1 0 2.4 3.3V3h3.1Z" />
    </svg>
  )
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}
