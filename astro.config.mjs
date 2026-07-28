// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production serves from the domain root. Preview builds (GitHub Pages) serve
// from a repo subpath, set via SITE_BASE at build time.
const base = process.env.SITE_BASE || '/';
const site = process.env.SITE_URL || 'https://mylearningstudio.com';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
});
