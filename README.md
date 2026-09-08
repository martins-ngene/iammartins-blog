# blog.iammartins.com

Personal engineering blog for **Martins Ngene** — built with [Astro 5](https://astro.build), Markdown/MDX content collections, and deployed to Cloudflare Pages.

> 📖 **Writing a post?** See [GUIDE.md](file:///Users/martinium-dev/projects/iammartins-blog/GUIDE.md) for the complete authoring and publishing guide with diagrams and frontmatter templates.

---

## Stack & Architecture

- **Astro 5** — static output (`output: "static"`), zero client-side JavaScript by default
- **Keystatic CMS** — in-browser visual editing and publishing interface at `/keystatic` (local and GitHub mode)
- **MDX (`@astrojs/mdx`)** — standard Markdown with embedded Astro/JSX components when needed
- **Shiki** — zero-runtime syntax highlighting powered by `github-light` and `github-dark`
- **Content Collections** — type-safe schema validation via Zod in `src/content.config.ts`
- **RSS + Sitemap** — build-time generation via `@astrojs/rss` and `@astrojs/sitemap`
- **Design System** — Vanilla CSS with custom design tokens, dark theme, and curated typography:
  - *Display*: Fraunces
  - *Body*: Inter
  - *Code & Metadata*: JetBrains Mono

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev
# or
npm start
```

Open **`http://localhost:4321`** in your browser.

### Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Astro development server at `http://localhost:4321` |
| `npm run build` | Validates types and compiles the static site to the `dist/` directory |
| `npm run preview` | Spins up a local static server to preview the production build |
| `npm run astro` | Runs Astro CLI commands directly |

---

## Site Configuration

All global settings and metadata live in centralized configuration files:

1. **Site Identity & Navigation (`src/consts.ts`)**:
   - `SITE.title`, `SITE.description`, `SITE.url`, author details, and contact email.
   - `SOCIALS` links (GitHub, LinkedIn, Portfolio, X).
   - `NAV` header links (`Writing`, `Topics`, `About`).

2. **Production Domain & Integrations (`astro.config.mjs`)**:
   - `site: 'https://blog.iammartins.com'` — drives canonical links, Open Graph URLs, XML sitemaps, and RSS feeds.
   - Shiki code block theme settings (`light: 'github-light'`, `dark: 'github-dark'`).

3. **Visual Design System (`src/styles/global.css`)**:
   - Palette tokens: `--bg`, `--surface`, `--ink`, `--muted`, `--accent`, `--line`.
   - Typography font families, clamp scales, and base prose styles.

---

## Deploying to Cloudflare Pages

This site generates static assets with dynamic Keystatic API functions powered by `@astrojs/cloudflare`.

### 1. Push Repository to GitHub
Ensure all your changes are committed and pushed to your remote repository on the `master` branch:
```bash
git add .
git commit -m "feat: blog updates"
git push origin master
```

### 2. Connect to Cloudflare Pages
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages → Create Application → Pages → Connect to Git**.
3. Select your repository (`iammartins-blog`).
4. Set the build configuration:
   - **Framework preset:** `Astro`
   - **Production branch:** `master`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (default)
5. Click **Save and Deploy**. Cloudflare will build the site and assign a preview URL (e.g., `iammartins-blog.pages.dev`).

### 3. Add Custom Domain (`blog.iammartins.com`)
1. In Cloudflare Pages, go to the **Custom domains** tab of your project.
2. Click **Set up a custom domain** and enter `blog.iammartins.com`.
3. If `iammartins.com` is managed in your Cloudflare account, DNS records (`CNAME` to `<project>.pages.dev`) and SSL/TLS certificates are provisioned automatically.
4. If managed externally, create a `CNAME` record at your registrar pointing `blog` to `<your-project>.pages.dev`.

### 4. Configure Keystatic Environment Variables (for Live Web CMS)
To allow logging in with GitHub at `blog.iammartins.com/keystatic` in production:
1. In Cloudflare Pages, go to **Settings → Environment variables**.
2. Add under **Production**:
   - `KEYSTATIC_GITHUB_CLIENT_ID`: Your GitHub OAuth App Client ID.
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`: Your GitHub OAuth App Client Secret.
   - `KEYSTATIC_SECRET`: A secure random 32+ character string (e.g., generated with `openssl rand -hex 32`).
3. *(See [GUIDE.md](file:///Users/martinium-dev/projects/iammartins-blog/GUIDE.md) for step-by-step GitHub App registration).*

Every subsequent push to `master` automatically triggers an edge rebuild and deployment.

---

## Roadmap & Enhancements

- [ ] **Default Social Image**: Place a $1200 \times 630\text{px}$ graphic at `public/og-default.png` for social cards when a post has no specific `heroImage`.
- [ ] **Comments via Giscus**: Add GitHub Discussions-powered comments by installing the Giscus app and embedding `<Comments />` in `src/layouts/BlogPost.astro`.
- [ ] **Newsletter Capture**: Embed an email subscription form (Buttondown or ConvertKit) in `src/layouts/BlogPost.astro`.
- [ ] **Cloudflare Web Analytics**: Toggle on in Cloudflare Dashboard under **Workers & Pages → Settings → Web Analytics** for zero-cookie visitor metrics.

---

## Documentation

- **[GUIDE.md](file:///Users/martinium-dev/projects/iammartins-blog/GUIDE.md)**: Comprehensive guide on how to write, format, preview, and publish a new blog post.
- **[CHANGELOG.md](file:///Users/martinium-dev/projects/iammartins-blog/CHANGELOG.md)**: Detailed history of all releases, features, and migrations.
