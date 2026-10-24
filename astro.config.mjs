import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://everything-together-7r5r.vercel.app',
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), sitemap()],
});