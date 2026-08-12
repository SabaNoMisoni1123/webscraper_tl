// src/stores/appState.ts
// アプリ横断の UI フラグと簡易履歴を管理する Pinia ストア。

import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import AppConfig from '@/assets/AppConfig.json'

// UIフラグ
export type UIFlags = {
  useSearch: boolean
  useMenu: boolean
  useNews: boolean
}

export type NewsSettings = {
  days: number
  siteIds: string[]
}

// 遷移ログ1件
export type TransitionLog = {
  key: keyof UIFlags
  value: boolean
  at: number // epoch ms
}

const HISTORY_MAX = 200

export const useAppState = defineStore(
  'appState',
  () => {
    // --- state（setup-store では ref / reactive で宣言）---
    // 表示用途のバージョン。頻繁に変わらないため非永続にします。
    const appVersion = ref<string>(AppConfig.version)

    // UIフラグ群
    const ui = reactive<UIFlags>({
      useSearch: false,
      useMenu: false,
      useNews: false,
    })

    const newsSettings = reactive<NewsSettings>({
      days: 1,
      siteIds: [],
    })

    // デバッグ/分析用の簡易履歴（非永続）
    const history = ref<TransitionLog[]>([])

    // --- getters（setup-store では computed を返す）---
    const isAnyPanelOpen = computed<boolean>(
      () => ui.useSearch || ui.useMenu || ui.useNews
    )

    // 旧 UI が appState.useSearch のように直接参照しているため、
    // ui 配下へ移行しつつ後方互換の writable computed を公開します。
    const useSearch = computed<boolean>({
      get: () => ui.useSearch,
      set: value => setFlag('useSearch', value),
    })
    const useMenu = computed<boolean>({
      get: () => ui.useMenu,
      set: value => setFlag('useMenu', value),
    })
    const useNews = computed<boolean>({
      get: () => ui.useNews,
      set: value => setFlag('useNews', value),
    })
    const newsDays = computed<number>({
      get: () => normalizeNewsDays(newsSettings.days),
      set: value => setNewsDays(value),
    })
    const newsSiteIds = computed<string[]>({
      get: () => Array.isArray(newsSettings.siteIds) ? newsSettings.siteIds : [],
      set: value => setNewsSiteIds(value),
    })

    // --- actions ---
    /**
     * 単一フラグを更新（変更があったときだけ履歴を追記）
     */
    function setFlag<K extends keyof UIFlags>(key: K, value: boolean) {
      if (ui[key] === value) return
      ui[key] = value
      history.value.push({ key, value, at: Date.now() })
      if (history.value.length > HISTORY_MAX) history.value.shift()
    }

    /** 単一フラグをトグル */
    function toggle<K extends keyof UIFlags>(key: K) {
      setFlag(key, !ui[key])
    }

    /**
     * 複数フラグをまとめて更新（描画回数と履歴のバラつきを抑える）
     *
     * 例:
     *   setMany({ useMenu: true, useSearch: false })
     */
    function setMany(patch: Partial<UIFlags>) {
      let touched = false;
        (Object.keys(patch) as (keyof UIFlags)[]).forEach((k) => {
          const next = patch[k]
          if (typeof next === 'boolean' && ui[k] !== next) {
            ui[k] = next
            history.value.push({ key: k, value: next, at: Date.now() })
            touched = true
          }
        })
      if (touched && history.value.length > HISTORY_MAX) {
        history.value.splice(0, history.value.length - HISTORY_MAX)
      }
    }

    /** 全フラグを false に（画面遷移時などのクリーンアップ想定） */
    function closeAll() {
      setMany({ useSearch: false, useMenu: false, useNews: false })
    }

    /** UI状態を既定に（将来項目追加時に分岐しやすいよう関数を分けておく） */
    function resetUI() {
      closeAll()
    }

    function normalizeNewsDays(value: number) {
      const days = Math.floor(Number(value))
      if (!Number.isFinite(days)) return 1
      return Math.min(Math.max(days, 1), 30)
    }

    function setNewsDays(value: number) {
      newsSettings.days = normalizeNewsDays(value)
    }

    function setNewsSiteIds(siteIds: string[]) {
      newsSettings.siteIds = Array.from(new Set(siteIds.filter(Boolean)))
    }

    // setup-store では「返した値」が store の公開APIになります
    return {
      // state
      appVersion,
      ui,
      newsSettings,
      history,
      useSearch,
      useMenu,
      useNews,
      newsDays,
      newsSiteIds,

      // getters
      isAnyPanelOpen,

      // actions
      setFlag,
      toggle,
      setMany,
      setNewsDays,
      setNewsSiteIds,
      closeAll,
      resetUI,
    }
  },
  {
    // --- 永続化設定（pinia-plugin-persistedstate）---
    // Composition API でも第3引数に options を渡せます
    persist: {
      key: 'appState',
      paths: ['ui', 'newsSettings'], // 履歴やバージョンは保存しない
    },
  }
)

/**
 * ◆ 利用例（<script setup lang="ts">）
 *
 * <script setup lang="ts">
 * import { computed } from 'vue'
 * import { useAppState } from '@/stores/appState'
 *
 * const app = useAppState()
 *
 * function onClickMenu() {
 *   app.toggle('useMenu')
 * }
 *
 * function openSearchAndNews() {
 *   app.setMany({ useSearch: true, useNews: true })
 * }
 *
 * const anyOpen = computed(() => app.isAnyPanelOpen)
 * </script>
 *
 * <template>
 *   <button @click="onClickMenu">Menu</button>
 *   <button @click="openSearchAndNews">Open Search+News</button>
 *   <button @click="app.closeAll()">Close All</button>
 *   <div v-if="anyOpen">Something is open!</div>
 * </template>
 */
