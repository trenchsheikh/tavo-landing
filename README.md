# Tavo Landing

A Vite + React + TypeScript + Tailwind CSS project using the shadcn/ui project structure.

## Stack

- **Vite 5** — dev server & build
- **React 18** + **TypeScript**
- **Tailwind CSS 3** — styling
- **lucide-react** — icons
- **shadcn/ui structure** — components live in `src/components/ui`, the `@` alias maps to `src`

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase values
npm run dev
```

Open http://localhost:5173

## Supabase (storing signups)

Waitlist and pilot signups are persisted to a Supabase table called `signups`,
one clean row per submission with the columns below.

| column                  | type          | notes                                   |
| ----------------------- | ------------- | --------------------------------------- |
| `id`                    | `uuid`        | primary key, auto-generated             |
| `created_at`            | `timestamptz` | auto, submission time                   |
| `mode`                  | `text`        | `waitlist` or `pilot`                   |
| `restaurant_name`       | `text`        | from the form                           |
| `city`                  | `text`        | from the form                           |
| `email`                 | `text`        | from the form                           |
| `agreement_accepted`    | `boolean`     | `true` only for accepted pilot signups  |
| `agreement_accepted_at` | `timestamptz` | when the pilot agreement was accepted   |

### One-time setup

1. Create a project at [supabase.com](https://supabase.com).
2. In the dashboard, open **SQL Editor → New query**, paste the contents of
   [`supabase/schema.sql`](supabase/schema.sql), and run it. This creates the
   `signups` table and enables Row Level Security so the public site can only
   **insert** rows (never read them).
3. In **Project Settings → API**, copy the **Project URL** and the **anon
   public** key into `.env.local` (locally) and into your Vercel project's
   environment variables (for production):

   ```
   VITE_SUPABASE_URL=https://YOUR-PROJECT-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```

The anon key is safe to ship in the frontend bundle — RLS is what protects the
data. To view collected signups, use the Supabase **Table Editor** (or export
to CSV from there).

## Deploying to Vercel

The repo includes [`vercel.json`](vercel.json) (Vite preset, SPA rewrites).

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new).
2. Add the two `VITE_SUPABASE_*` environment variables in the project settings.
3. Deploy. Vercel runs `npm run build` and serves `dist/`.

## Project structure

```
src/
  components/ui/
    gradient-bar-hero-section.tsx   # waitlist hero section (exports `Component`)
    demo.tsx                        # demo wrapper (exports `DemoOne`)
  lib/utils.ts                      # cn() helper
  App.tsx
  main.tsx
  index.css                         # Tailwind directives + custom utilities
```

## Notes

- The `@/components/ui` path is the shadcn convention. Keeping reusable UI primitives
  there lets the shadcn CLN (`npx shadcn@latest add ...`) resolve the correct import
  aliases from `components.json` and avoids duplicate component locations.
- Fonts (Inter, Instrument Serif, Space Grotesk) are loaded via Google Fonts in
  `index.html` and mapped to `font-inter`, `font-instrument`, `font-space` in
  `tailwind.config.js`.
- Custom animations (`fadeIn`, `pulseBar`) and `animation-delay-*` utilities are
  defined in `tailwind.config.js` / `src/index.css`.
- Avatar images use Unsplash stock photos.
