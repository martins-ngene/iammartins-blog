// @ts-check
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Your production URL — used for canonical links, sitemap, and RSS.
  site: 'https://blog.iammartins.com',
  adapter: cloudflare(),
  integrations: [react(), keystatic(), mdx(), sitemap()],
  env: {
    schema: {
      KEYSTATIC_GITHUB_CLIENT_ID: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      KEYSTATIC_GITHUB_CLIENT_SECRET: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      KEYSTATIC_SECRET: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
    },
  },
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
  vite: {
    optimizeDeps: {
      exclude: ['@keystatic/astro'],
    },
  },
});
