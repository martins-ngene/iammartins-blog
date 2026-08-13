# blog.iammartins.com

Personal engineering blog for Martins Ngene — built with [Astro](https://astro.build), Markdown/MDX content collections, and deployed to Cloudflare Pages.

## Stack

- **Astro 5** — static output, zero client JS by default
- **MDX** — Markdown with embedded components when you want them
- **Shiki** — syntax highlighting, built in (no runtime JS)
- **RSS + sitemap** — generated at build time
- Type roles: Fraunces (display) · Inter (body) · JetBrains Mono (metadata/code)

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:4321.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the production build locally |

## Writing a post

Drop a `.md` or `.mdx` file into `src/content/blog/`. The filename becomes the URL slug. Frontmatter:

```yaml
---
title: "Your title"
description: "One-sentence summary — shows on cards and in search/social."
pubDate: 2026-02-14
updatedDate: 2026-02-20   # optional
tags: ["engineering", "automation"]
draft: false              # set true to hide from production
heroImage: "/images/foo.png"  # optional
---
```

Reading time and the archive index are generated automatically. Tags create their own pages under `/tags/<tag>` with no extra work.

## Configure the site

Everything site-wide (title, URLs, socials, nav) lives in `src/consts.ts`. The visual identity (colours, fonts, spacing) lives as CSS variables at the top of `src/styles/global.css`.

Before going live, set your production domain in **`astro.config.mjs`** (`site:`) — it drives canonical URLs, the sitemap, and RSS.

## Deploy to Cloudflare Pages

This site builds to static files, so no adapter is needed.

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, and pick the repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Every push to your main branch rebuilds and ships automatically.
5. Add your custom domain (`blog.iammartins.com`) under the project's **Custom domains** tab — Cloudflare handles the DNS record and SSL.

## Still to add (optional)

- A real `public/og-default.png` (1200×630) for social sharing.
- Comments via [Giscus](https://giscus.app) (GitHub Discussions).
- A newsletter capture form (Buttondown / ConvertKit).
- Analytics (Cloudflare Web Analytics is one toggle in the dashboard).
