import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import {onClickDirective } from './src/utils/index.js'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), vue(), onClickDirective(), tailwind()]
});