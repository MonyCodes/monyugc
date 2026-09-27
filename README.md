# Mony Yang — UGC Portfolio

Portfolio site for Mony Yang, UGC creator and short-form editor.
Built with Next.js 16, React 19, Tailwind CSS v4, shadcn/ui and Motion.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command             | What it does                  |
| ------------------- | ----------------------------- |
| `npm run dev`       | Start the dev server          |
| `npm run build`     | Production build              |
| `npm run start`     | Serve the production build    |
| `npm run lint`      | ESLint                        |
| `npm run typecheck` | TypeScript check              |
| `npm run format`    | Prettier                      |

## Project structure

```
app/                  layout, homepage, privacy, terms
components/site/      page sections (hero, reels, testimonials, collab, …)
components/ui/        shadcn/ui + custom UI primitives
lib/showcase.ts       video clip metadata
public/showcase/      video clips (.mp4)
public/posters/       video poster frames (.webp)
public/logos/         brand logos (.webp)
```

Homepage section order lives in `app/page.tsx`.
Client testimonials live in `components/site/testimonials.tsx`.

## Site URL

Canonical and share-preview URLs come from `NEXT_PUBLIC_SITE_URL`
(defaults to `https://monyugc-phi.vercel.app`). Set it to your own domain
when building:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build
```

## Deploy

**Vercel:** import the repo, no extra settings needed.

**Any static host (Hostinger, Netlify, etc.):** set `next.config.ts` to

```ts
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
}
```

then run `npm run build` and upload the contents of the generated `out/`
folder to the web root.
