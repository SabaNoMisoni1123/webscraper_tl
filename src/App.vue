<template>
  <v-app class="v-app h-100 d-flex flex-column">
    <!-- アプリバー -->
    <v-app-bar flat :height="LAYOUT.APPBAR_HEIGHT" density="comfortable" border="b" class="app-bar">
      <template #prepend>
        <v-app-bar-nav-icon :icon="IconCrowler" @click="toggleDrawer" />
      </template>

      <v-app-bar-title>{{ AppConfig.appName }} v{{ AppConfig.version }}</v-app-bar-title>

      <v-btn icon="mdi-chevron-double-left" @click="toggleDrawer" />
    </v-app-bar>

    <!-- メイン領域 -->

    <v-main class="app-main" :height="`calc(100dvh - var(--appbar-h) - var(--footer-h)`" :style="{
      height: `calc(100dvh - var(--appbar-h) - var(--footer-h)`
    }">
      <div class="routerViewWrapper">
        <RouterView />
      </div>
    </v-main>

    <!-- フッター -->
    <v-footer app :height="LAYOUT.FOOTER_HEIGHT" border="t" class="footer-bar">
      <v-icon :icon="IconCrowler" class="mr-5" />
      {{ AppConfig.appName }}

      <v-spacer />

      <!-- 祝アイコンは isCelebrate が true のときだけ 5 個描画（key を必ず付ける） -->
      <template v-if="isCelebrate">
        <v-icon v-for="i in partyCount" :key="`partyhead-${i}`" icon="mdi-party-popper" />
      </template>

      <p>閲覧者数: {{ safeNoAccess }}</p>

      <!-- 同じ見た目を維持しつつ、重複していたループを統合 -->
      <template v-if="isCelebrate">
        <v-icon v-for="i in partyCount" :key="`partyfoot-${i}`" icon="mdi-party-popper" />
      </template>

      <v-spacer />
      (c) Sota Kondo
    </v-footer>

    <!-- 右側一時表示ドロワー -->
    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-list>
        <v-list-item to="/" link>HOME</v-list-item>
        <v-list-item to="/about" link>ABOUT</v-list-item>
        <v-list-item to="/contact" link>CONTACT</v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterView } from 'vue-router'
import { LAYOUT } from '@/vuetify'
import AppConfig from '@/assets/AppConfig.json'
import { useDbDataStore } from '@/stores/dbStore'
import IconCrowler from '@/components/icons/IconCrowler.vue'

/** Pinia ストア */
const dbData = useDbDataStore()

/** 右ドロワーの開閉状態 */
const drawer = ref(false)
/** 祝アイコンの個数（見た目維持のため 5 に固定） */
const partyCount = 5
/** 祝判定の閾値（100 アクセスごと） */
const CELEBRATE_SPAN = 100

/**
 * noAccess を数値として安全に扱うためのラッパ。
 * - ストア側が未初期化/文字列でも Number によって数値化
 * - NaN の場合は 0 を採用（表示・演算の安定性を担保）
 */
const safeNoAccess = computed<number>(() => {
  const n = Number((dbData as any)?.noAccess)
  return Number.isFinite(n) ? n : 0
})

/**
 * 祝アイコン表示フラグ
 */
const isCelebrate = computed<boolean>(() => {
  return safeNoAccess.value > 0 && safeNoAccess.value % CELEBRATE_SPAN === 0
})

/** ドロワーのトグル関数（テンプレート側が読みやすくなる） */
const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<style scoped>
.v-app {
  height: 100dvh;
  display: flex;
}

.app-bar {
  height: var(--appbar-h);
}

.footer-bar {
  height: var(--footer-h);
}

.app-main {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.routerViewWrapper {
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
</style>
