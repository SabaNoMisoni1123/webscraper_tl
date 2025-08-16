// vite.config.ts
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// ESM 環境で __dirname がないため、URL からファイルパスを解決する
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

// ※ Vuetify 3 を使っている場合は導入推奨（任意）
//   パッケージ: vite-plugin-vuetify
//   npm i -D vite-plugin-vuetify
import vuetify from 'vite-plugin-vuetify'

// __dirname 互換
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig(({ mode }) => {
  // .env / .env.local / .env.[mode] をロード
  // ここで得られる env は全て文字列。使う側は import.meta.env.* を参照する。
  // 露出させたい値は "VITE_" プレフィックスをつけて定義すること（Vite の仕様）。
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      vueJsx(),
      vuetify({ autoImport: true }), // ← Vuetify 3 を使うなら有効化（任意）
    ],

    resolve: {
      alias: {
        // ESM 安全な __dirname からの解決
        '@': resolve(__dirname, 'src'),
      },
    },

    // GitHub Pages (repo: webscraper_tl) 配信ならこの base でOK
    // ルーター側は createWebHistory(import.meta.env.BASE_URL) を使うこと
    base: '/webscraper_tl/',

    server: {
      // 任意：同一ネットワーク内の実機からアクセスしたいときに便利
      host: true,
    },

    // 任意：開発時の依存最適化を明示したい場合（Firebase など）
    optimizeDeps: {
      include: ['firebase/app', 'firebase/firestore', 'firebase/auth'],
    }

  }
})
