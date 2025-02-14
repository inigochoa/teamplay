// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import metaTags from 'astro-meta-tags';

// https://astro.build/config
export default defineConfig({
  site: 'https://martes-locos.veiss.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [metaTags()],
  experimental: {
    svg: true,
  },
})
