import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import router from "unplugin-vue-router/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    router({
      routesFolder: "src/pages"
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
