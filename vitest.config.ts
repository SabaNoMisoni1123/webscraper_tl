import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig, configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from 'vite-plugin-vuetify'

const root = fileURLToPath(new URL('./', import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      '@': resolve(root, 'src'),
    },
  },
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root,
  },
})
