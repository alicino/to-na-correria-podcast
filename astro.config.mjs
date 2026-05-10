import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tonacorreria.com.br',
  publicDir: 'assets',
  integrations: [tailwind()],
  output: 'static',
});
