import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";



import playformCompress from '@playform/compress';



import icon from 'astro-icon';



export default defineConfig({
  site: 'https://mintmantis.ca/',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    playformCompress(),
    icon()
  ]
});