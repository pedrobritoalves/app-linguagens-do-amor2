# Descubra sua Linguagem do Amor

A Portuguese-language "Love Language" self-discovery quiz — users answer a short set of questions (individually or as a couple) and get a personalized breakdown of their love language.

## Run & Operate

- Web app runs via the `artifacts/linguagem-do-amor: web` workflow (Vite dev server).
- `pnpm --filter @workspace/linguagem-do-amor run typecheck` — typecheck the app
- `pnpm run typecheck` — full typecheck across all packages
- No database or API server is used by this app — it's fully client-side (state + `localStorage`).

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v3
- No backend: all quiz logic and results run client-side; last single-mode result is cached in `localStorage`

## Where things live

- `artifacts/linguagem-do-amor/src/App.tsx` — screen routing (welcome → quiz → results) and quiz state machine
- `artifacts/linguagem-do-amor/src/questions.ts` — quiz question bank (male/female variants)
- `artifacts/linguagem-do-amor/src/loveLanguages.ts` — love language definitions/copy
- `artifacts/linguagem-do-amor/src/theme.ts` — per-gender color theme tokens
- `artifacts/linguagem-do-amor/src/components/` — screen components (Welcome, Quiz, Results, CoupleResults) and shadcn `ui/` primitives (scaffold, mostly unused by this app)
- `.migration-backup/` — original imported Bolt project, kept for reference

## Architecture decisions

- Imported from Bolt (Vite + React, frontend-only) and ported into the `pnpm_workspace` layout as a single web artifact; no backend/database was needed since the original app had none.
- The `api-server` and `mockup-sandbox` scaffold artifacts exist from the workspace template but are unused by this app; their workflows are stopped.

## Product

- Solo mode: pick a gender-specific 15-question quiz, get a love-language breakdown.
- Couple mode: both partners take the quiz back-to-back, then see a combined comparison screen.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- This app has no backend — do not add API calls without first setting up `lib/api-spec` + codegen per the `pnpm-workspace` skill.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
