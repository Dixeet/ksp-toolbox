import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import ui from './src/plugins/nuxt-ui/index.js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ui(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // eslint-disable-next-line no-undef
  base: process.env?.NODE_ENV === 'development' ? '/' : '/ksp-toolbox',
});
