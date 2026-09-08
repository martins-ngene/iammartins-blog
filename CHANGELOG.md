# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-09-08

### Added
- **Keystatic CMS Integration**: Installed `@keystatic/core`, `@keystatic/astro`, and `@astrojs/react` to provide a visual, in-browser writing and publishing interface at `/keystatic`.
- **Keystatic Configuration (`keystatic.config.ts`)**:
  - Blog post collection matching the Astro Content Collection schema in `src/content.config.ts`.
  - Schema mapping for `title` (with automatic URL slug generator), `description`, `pubDate`, `updatedDate`, `heroImage`, `tags`, and `draft`.
  - Dual-mode storage: Local filesystem storage in development (`localhost:4321/keystatic`) and GitHub mode (`martins-ngene/iammartins-blog`) in production (`blog.iammartins.com/keystatic`).
- **Cloudflare Pages Adapter (`@astrojs/cloudflare@^12`)**:
  - Configured `@astrojs/cloudflare` adapter in `astro.config.mjs` to support Keystatic API routes alongside static HTML pre-rendering.
- **Keystatic OAuth & Production Auth Support**:
  - Registered `env.schema` in `astro.config.mjs` declaring `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, and `KEYSTATIC_SECRET` for secure server-side session and OAuth token exchange.
  - Documented setup guide for creating a GitHub OAuth App and adding production environment variables to Cloudflare Pages to prevent HTTP 500 login errors.
- **Publishing & Operations Documentation**:
  - Created [GUIDE.md](file:///Users/martinium-dev/projects/iammartins-blog/GUIDE.md) detailing the post authoring lifecycle, frontmatter specification, and publishing via both Keystatic UI and Git.
  - Updated [README.md](file:///Users/martinium-dev/projects/iammartins-blog/README.md) with comprehensive architecture, scripts, and Cloudflare Pages deployment instructions.

### Changed
- **`astro.config.mjs`**: Registered `react()`, `keystatic()`, and `cloudflare()` adapter.
- **Blog Post Files**: Standardized post files to `.mdx` (`hello-world.mdx`, `make-to-n8n-migration.mdx`) so Keystatic displays and edits all collection entries uniformly.

---

## [1.0.0] - 2026-02-14

### Added
- Initial release of personal engineering blog for Martins Ngene (`blog.iammartins.com`).
- Built with **Astro 5** (static output, zero runtime client-side JavaScript).
- **Content Collections**: Type-safe Markdown and MDX content collections with Zod schema validation.
- **Design System & Typography**: Custom Vanilla CSS system with Fraunces (display), Inter (body), and JetBrains Mono (code/metadata).
- **Syntax Highlighting**: Zero-runtime Shiki syntax highlighting (`github-light` and `github-dark`).
- **Syndication & SEO**: Automated RSS feed generation at `/rss.xml`, XML sitemap generation at `/sitemap-index.xml`, dynamic tag grouping pages at `/tags/[tag]`, and reading-time estimation.
- **Initial Articles**:
  - `why-write-in-public.md` / `hello-world.md`
  - `csat-insights-pipeline.mdx`
  - `make-to-n8n-migration.md`
