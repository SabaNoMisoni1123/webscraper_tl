import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    }
    // '@': fileURLToPath(new URL('./src', import.meta.url))
  },
  base: '/webscraper_tl/',
  // base: '/',
  server: {
    proxy: {
      '/api': {
        target: "https://websc-ministry.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
