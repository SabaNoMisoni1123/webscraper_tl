// src/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import vuetify, { setLayoutCssVars } from './vuetify'

import App from './App.vue'
import router from './router'

// * ▼ スタイル読み込み順に注意（後勝ち）
//  1) Vuetify のベーススタイル
//  2) アイコンフォント
//  3) 自前の base.css（リセット・変数など）
//  4) 自前の main.css（レイアウト最終調整）
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './assets/base.css'
import './assets/main.css'

const app = createApp(App)

// Pinia（永続化プラグインを組み込む）
// createPersistedState() に全体オプションを渡すことも可能ですが、
// 具体設定（key/storage/paths など）は各ストア側で persist オプション管理がおすすめ。
const pinia = createPinia()
pinia.use(createPersistedState())

app.use(pinia)
app.use(router)
app.use(vuetify)


// * Vuetifyのレイアウト設定をCSSで利用できるようにする。
setLayoutCssVars()

// * ▼ 初回レンダリングのチラつき/遷移中の不整合を避けるため
//  ルーターが解決してから mount するのがベター（SSR でなくても有効）
router.isReady().then(() => {
  app.mount('#app')
})

// * ▼ 開発時の DX 向上（本番ビルドには影響しません）
if (import.meta.env.DEV) {
  // Vue のパフォーマンス計測（DevTools の performance タブに出やすく）
  app.config.performance = true
  // 予期しないエラーを握りつぶさずに通知（ログ基盤に送るならここで）
  app.config.errorHandler = (err, instance, info) => {
    console.error('[VueError]', err, { instance, info })
  }
  // 過剰警告の抑制や検知をしたければ warnHandler もセット可能
  // app.config.warnHandler = (msg, instance, trace) => { ... }
}
