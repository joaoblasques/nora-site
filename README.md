# Nora marketing site

Astro + Tailwind static site → GitHub Pages at the apex `nora-bennett.com`.
Separate from the docs site (`website/`, MkDocs on Cloudflare → `docs.nora-bennett.com`),
which is never touched or merged — this site only links to it.

## Dev

    cd marketing && npm install && npm run dev

## Build / test / check

    npm run build   # static output → dist/
    npm test        # vitest (hero sequencer + waitlist logic)
    npm run check   # astro check (types/templates)

## Waitlist endpoint

Set `PUBLIC_WAITLIST_ENDPOINT` (the Buttondown form action URL) as a repo/Pages build
variable. Until then the form falls back to a placeholder that accepts input without a
network call, so the UI is complete before the backend is wired.

## Video

When the demo is recorded, replace the `DROP-IN` block in
`src/components/VideoSlot.astro` with the embed iframe (mirrors the docs `showcase.md`
pattern).
