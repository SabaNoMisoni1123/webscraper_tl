// src/vuetify.ts
// Vuetify インスタンスを作るファイル。
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// JSON からブランドパレットを読み込み。
// Vite + TS では通常 tsconfig で "resolveJsonModule": true が必要です。
import ColorPallet from '@/assets/ColorPallet.json'

// レイアウト設定
export const LAYOUT = {
  APPBAR_HEIGHT: 40,
  FOOTER_HEIGHT: 40,
} as const

// CSS変数にも同期して、calc(100dvh - ...) などで利用したい場合に使用
export function setLayoutCssVars(): void {
  const root = document.documentElement
  root.style.setProperty('--appbar-h', `${LAYOUT.APPBAR_HEIGHT}px`)
  root.style.setProperty('--footer-h', `${LAYOUT.FOOTER_HEIGHT}px`)
}

// 型を少し固めておくと補完が効く
const palette = ColorPallet as Record<string, string>

// 【ポイント】意味色（semantic）を定義する。
const mriLight: ThemeDefinition = {
  dark: false,
  colors: {
    primary: palette.mriblue,
    secondary: palette.gray2,
    accent: palette.green1,
    error: palette.red1,
    warning: palette.yellow1,
    info: palette.blue2,
    success: palette.green1,

    // === ブランド生色（UI外でも直接参照したい時のために並べておく）===
    mriblue: '#003B83',
    red0: '#420011',
    red1: '#DC003C',
    red2: '#EC7394',
    red3: '#FAD9E2',
    blue0: '#001942',
    blue1: '#0054DC',
    blue2: '#80AEF8',
    blue3: '#E2ECFD',
    gray0: '#212121',
    gray1: '#595757',
    gray2: '#939292',
    gray3: '#E6E6E6',
    green0: '#004229',
    green1: '#329B73',
    green2: '#7ABEA4',
    green3: '#E0F0EA',
    yellow0: '#423100',
    yellow1: '#DCA000',
    yellow2: '#E8C159',
    yellow3: '#E8FCCC',
  },
  // （任意）ここで “変数” を追加すると `--v-<key>` として出力されます。
  // グローバルな角丸・エレベーションなど、「色以外のトークン」を一緒に置くのも手です。
  variables: {
    'border-radius-root': '10px',
  },
}

// ダークテーマを増やす場合の雛形（必要になったら調整）
// const mriDark: ThemeDefinition = {
//   dark: true,
//   colors: {
//     primary: palette.mriblue,
//     // ...必要に応じて置き換え
//   },
// }

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'mriLight',   // ← 固有名にしておくと拡張時に楽
    themes: {
      mriLight,
      // mriDark,
    },
    // （任意）バリエーション自動生成が必要なら有効化
    // variations: {
    //   colors: ['primary', 'secondary'],
    //   lighten: 2,
    //   darken: 2,
    // },
  },
})

export default vuetify
