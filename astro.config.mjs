import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import {onClickDirective } from './src/utils/index.js'
import node from '@astrojs/node';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [svelte(), vue(), onClickDirective(), tailwind(), 
  ],
 
});
