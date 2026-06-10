# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server (localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Serve dist/ locally
npm run lint       # ESLint + Prettier checks
npm run format     # Auto-format with Prettier
```

No test runner is configured. Validate changes with `lint`, `build`, and manual browser checks.

Both `package-lock.json` and `bun.lock` exist — don't mix them in unrelated PRs.

## Architecture

**Framework:** TanStack Start (React SSR + file-based routing) on Vite 7. SSR entry is `src/server.ts`; the TanStack Start instance is `src/start.ts`.

**Routing:** Every `.tsx` in `src/routes/` is a route (no `pages/` dir — that's Next.js). `src/routes/__root.tsx` is the app shell. `src/routeTree.gen.ts` is auto-generated — never edit it by hand.

| File | URL |
|---|---|
| `routes/index.tsx` | `/` |
| `routes/about.tsx` | `/about` |
| `routes/$id.tsx` | `/:id` (dynamic) |

**Prerendering:** Enabled with `crawlLinks: true` in `vite.config.ts`. All static pages are listed in the `pages` array there — add new pages to that array or they won't be pre-rendered.

**Data fetching:** TanStack Query via `QueryClient` injected into router context in `src/router.tsx`. The `QueryClientProvider` lives in `__root.tsx`.

## Component Conventions

**Shared layout components** in `src/components/`:
- `Layout` — wraps every page with `<Navbar>`, `<Footer>`, `<WhatsAppButton>`
- `PageHero` — standard inner-page hero (eyebrow pill + h1 + description); takes `eyebrow`, `title` (ReactNode), `description`
- `Reveal` — framer-motion fade-up on scroll; props: `delay`, `className`, `y`
- `Counter` — animated number counter using `useInView`; props: `value`, `suffix`, `duration`
- `Logo` — SVG logo component; prop: `size` (number)

**Radix/shadcn primitives** in `src/components/ui/` — shadcn "new-york" style, Tailwind CSS variables, `@/` alias imports.

**Path alias:** `@/*` → `./src/*`

## Design System (styles.css)

**Colors (CSS vars):**
- `--primary` `#1565A8` → `text-primary`, `bg-primary`
- `--energy` `#4BC0A8` → `text-energy`, `bg-energy` (also aliased as `--color-teal`)
- `--navy` `#071C2C` → `bg-navy`, `text-navy`
- `--muted-foreground` `#667085`

**Typography:**
- `font-display` → Space Grotesk (headings via `@theme`)
- `font-sans` → Inter (body)
- All `h1`–`h6` automatically use `font-display` via base layer

**Key utility classes:**
- `.text-gradient-energy` — blue→teal gradient text
- `.glass` / `.glass-strong` — backdrop-blur glass panels
- `.grid-bg` — subtle dot-grid background
- `.btn-glow-blue` / `.btn-glow-teal` — box-shadow glow on buttons
- `.hover-lift` — smooth translateY(-5px) card hover
- `.enterprise-card` — layered gradient + border card style
- `.animate-marquee` — infinite horizontal scroll (logo strip)
- `.animate-pulse-glow` — WhatsApp button pulsing ring
- `.gradient-radial-blue` / `.gradient-radial-teal` — decorative blurred blobs
- `shadow-elevated` — `0 24px 80px -36px rgb(7 28 44 / 0.35)`

## Page Structure Pattern

Every route file follows this shape:

```tsx
export const Route = createFileRoute("/slug")({
  head: () => ({ meta: [...], links: [{ rel: "canonical", href: "/slug" }] }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <Layout>
      <PageHero eyebrow="..." title={<>...</>} description="..." />
      {/* sections */}
    </Layout>
  );
}
```

The `SectionEyebrow` pattern (pill label above headings) is defined inline in each route file — not a shared component. Copy the pattern from `routes/index.tsx`.

## Deployment

Netlify (`netlify.toml`): `npm run build`, publish `dist/client`, Node 22. Also has a `vercel.json` at root.
