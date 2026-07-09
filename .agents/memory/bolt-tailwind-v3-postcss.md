---
name: Bolt frontend-only port Tailwind v3 wiring
description: How to wire Tailwind v3 correctly after the fullstack-copy-frontend.sh script runs for a Bolt-imported Tailwind v3 app.
---

When porting a Bolt app that uses Tailwind v3 (`@tailwind base/components/utilities` directives, not the v4 `@import "tailwindcss"` syntax), the copy-frontend script installs `tailwindcss@3`, `postcss`, `autoprefixer`, removes `@tailwindcss/vite`, and copies over `postcss.config.js`.

**Why:** The scaffolded `vite.config.ts` from `createArtifact` assumes Tailwind v4's `@tailwindcss/vite` plugin. Tailwind v3 needs PostCSS instead. It's tempting to wire PostCSS two ways at once — inline via `css.postcss.plugins` in `vite.config.ts` AND via the copied `postcss.config.js` — but only one is needed; Vite will pick up `postcss.config.js` automatically. Keeping both is redundant config to maintain (flagged by code review as a smell, though not a functional bug).

**How to apply:** After the copy script's `AGENT TODO`, only remove the `@tailwindcss/vite` import/plugin from `vite.config.ts` and set `server.fs.strict: false`. Do not also add a `css.postcss` block in `vite.config.ts` if `postcss.config.js` already exists with the same plugins — pick one, prefer the standalone `postcss.config.js` since the script already writes it.
