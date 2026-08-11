<template>
  <v-container fluid class="ws-view h-100 min-h-0 pa-2 d-flex flex-column">
    <!-- 画面レベルのローディング -->
    <div v-if="isLoading" class="loading-state text-center h-100" aria-live="polite">
      <div class="mb-2 text-body-2">データを読み込んでいます...</div>
      <v-progress-linear indeterminate />

      <!-- 横並びスケルトン（通常時と同じ横スクロール挙動） -->
      <div class="timeline-row mt-4">
        <v-col v-for="n in SKELETON_COUNT" :key="n" cols="auto" class="timeline-col pa-0">
          <v-skeleton-loader type="card" class="skeleton-card" />
        </v-col>
      </div>
    </div>

    <!-- 非ローディング時 -->
    <div v-else class="content-state h-100 min-h-0">
      <!-- 空状態 -->
      <v-alert v-if="visibleIds.length === 0" type="info" variant="tonal" class="ma-4">
        表示可能なサイトが見つかりません。
      </v-alert>

      <!-- 横並び（横スクロール可）: 1 siteId = 1 SiteTimeline -->
      <div v-else class="timeline-row">
        <v-col v-if="appState.useNews" cols="auto" class="timeline-col pa-0">
          <NewsTimeline :db-timestamp="dbTimestamp" />
        </v-col>

        <v-col
          v-for="idx in searchColumnIndexes"
          :key="`search-${idx}`"
          cols="auto"
          class="timeline-col pa-0"
        >
          <SearchTimeline :search-cond-idx="idx" />
        </v-col>

        <v-col v-for="id in visibleIds" :key="id" cols="auto" class="timeline-col pa-0">
          <SiteTimeline :site-id="id" :db-timestamp="dbTimestamp" />
        </v-col>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import SiteTimeline from '@/components/organisms/SiteTimeline.vue'
import NewsTimeline from '@/components/organisms/NewsTimeline.vue'
import SearchTimeline from '@/components/organisms/SearchTimeline.vue'

import { useAppState } from '@/stores/appState'
import { useDbMetaStore } from '@/stores/dbMetaStore'
import { useSearchConditionStore } from '@/stores/searchCondition'
import { useSiteStore } from '@/stores/siteStore'

// 各種ストア
const appState = useAppState()
const meta = useDbMetaStore()
const searchStore = useSearchConditionStore()
const sites = useSiteStore()

// ローディング
const metaLoading = ref(false)
const sitesLoading = computed(() => sites.isLoading)
const isLoading = computed(() => metaLoading.value || sitesLoading.value)

// 表示対象の siteId（isShow=true を weight 順で）
const visibleIds = computed(() => sites.sortedVisibleIds)

// 検索機能が有効なときだけ、検索条件数に応じた検索タイムライン列を先頭に追加します。
const searchColumnIndexes = computed(() =>
  appState.useSearch
    ? searchStore.searchCondition.map((_, idx) => idx)
    : []
)

// dbTimestamp（Firestore 側の最終更新 epoch）
const dbTimestamp = computed(() => meta.dbTimestamp)

const SKELETON_COUNT = 4

async function refreshMeta() {
  // メタ情報取得は画面全体のローディングに反映するため、個別にフラグを持ちます。
  metaLoading.value = true
  try {
    return await meta.refreshMeta()
  } finally {
    metaLoading.value = false
  }
}

async function loadInitialData() {
  // 1) メタ（アクセス+1 & 更新時刻の取得）
  await refreshMeta()

  // 2) サイト一覧
  await sites.fetchSites()
}

onMounted(async () => {
  await loadInitialData()
})

</script>

<style scoped>
.loading-state,
.content-state,
.timeline-row {
  height: 100%;
  min-height: 0;
}

/* 横一列 + 横スクロール */
.timeline-row {
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  overflow-x: auto;
  --hbar: 12px;
  padding-bottom: var(--hbar);
  margin-bottom: calc(-1 * var(--hbar));
  scrollbar-gutter: stable both-edges;
  -webkit-overflow-scrolling: touch;
}

.timeline-col {
  width: clamp(260px, 25vw, 420px);
  height: 100%;
  flex: 0 0 auto;
}

.skeleton-card {
  height: 100%;
}
</style>
