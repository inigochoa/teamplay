// @ts-check
import { defineConfig } from 'astro/config'
import robotsTxt from 'astro-robots-txt'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import robotsConfig from './src/lib/robotsConfig'
import sitemapConfig from './src/lib/sitemapConfig'

// https://astro.build/config
export default defineConfig({
  site: 'https://teamplay.inigochoa.cc',
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  integrations: [
    robotsTxt(robotsConfig),
    sitemap(sitemapConfig),
  ],
})
