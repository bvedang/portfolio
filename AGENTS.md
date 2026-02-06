# Repository Guidelines

## Project Structure & Module Organization

- `src/pages/`: file-based routes (e.g., `index.astro`, `blog/`, `projects/`).
- `src/layouts/`: shared page shells and SEO (`BaseLayout.astro`, post layouts).
- `src/components/`: reusable UI components (Astro). React islands live in `src/components/react/`.
- `src/content/`: MDX content collections (`blog/`, `projects/`), with schemas in `src/content/config.ts`.
- `src/styles/`: global styling in `src/styles/global.css` (Tailwind v4 CSS-first + theme tokens).
- `public/`: static assets (images, `robots.txt`, `llms.txt`, resume PDF).

## Build, Test, and Development Commands

- `npm install`: install dependencies.
- `npm run dev`: start the local dev server.
- `npm run build`: production build to `dist/` (ignored by git).
- `npm run preview`: serve the built site locally for a production-like check.

## Coding Style & Naming Conventions

- Indentation: 2 spaces for `.astro`/`.ts`; keep `.css` readable and consistent with existing files.
- Imports/strings: prefer double quotes in TS/JS (matches current codebase).
- Components: PascalCase filenames (e.g., `MinimalHeader.astro`); route folders mirror URLs.
- Content: slugs come from filenames under `src/content/**`; keep frontmatter fields consistent with the collection schema.
- Styling: prefer Tailwind utilities plus the shared semantic classes and CSS variables defined in `src/styles/global.css`.

## Testing Guidelines

- No dedicated automated test runner is configured yet.
- Minimum validation for changes: `npm run build`, then quick route smoke-test via `npm run preview` (`/`, `/projects`, `/blog`, `/about`).

## Commit & Pull Request Guidelines

- Commit messages: prefer Conventional Commits when practical (`feat:`, `fix:`, `chore:`).
- PRs should include: a clear description, screenshots/GIFs for UI changes, and confirmation that `npm run build` passes.
- Don’t commit: `dist/`, `node_modules/`, or `.env*` files. Use `.env.example` + platform env vars (e.g., `PUBLIC_SITE_URL`).
- Note: Vercel preview deployments (`*.vercel.app`) are configured `noindex`; production indexing depends on the correct site URL + sitemap.

## Agent-Specific Notes

- Keep layout widths consistent across pages and keep copy/structure intentionally minimal.
- Avoid generic “template” UI; lean on the repo’s typography + theme tokens for a distinctive, editorial look.
