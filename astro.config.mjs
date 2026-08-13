// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Your production URL — used for canonical links, sitemap, and RSS.
  site: 'https://blog.iammartins.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // Shiki ships with Astro — no extra dependency needed for code highlighting.
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: false,
    },
  },
});
