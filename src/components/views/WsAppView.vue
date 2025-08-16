<template>
  <v-container fluid class="wsView py-2 h-100 d-flex">
    <!-- 画面レベルのローディング -->
    <div v-if="metaLoading || sitesLoading" class="text-center h-100 my-6" aria-live="polite">
      <div class="mb-2">データを読み込んでいます…</div>
      <v-progress-linear indeterminate />

      <!-- 横並びスケルトン（通常時と同じ横スクロール挙動） -->
      <div class="h-scroll-row">
        <v-col v-for="n in 4" :key="n" cols="auto" class="timeline-col">
          <v-skeleton-loader type="card" class="skeleton-card" />
        </v-col>
      </div>
    </div>

    <!-- 非ローディング時 -->
    <div v-else class="h-100">
      <!-- 空状態 -->
      <div v-if="visibleIds.length === 0" class="text-center my-6">
        表示可能なサイトが見つかりません。
      </div>

      <!-- 横並び（横スクロール可）: 1 siteId = 1 Timeline -->
      <div class="h-scroll-row">
        <v-col v-for="id in visibleIds" :key="id" cols="auto" class="timeline-col">
          <Timeline :site-id="id" :db-timestamp="dbTimestamp" @reload="handleManualReload" />
        </v-col>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import Timeline from '@/components/organisms/Timeline.vue'

import { useDbMetaStore } from '@/stores/dbMetaStore'
import { useSiteStore } from '@/stores/siteStore'

// 各種ストア
const meta = useDbMetaStore()
const sites = useSiteStore()

// ローディング
const metaLoading = ref(false)
const sitesLoading = computed(() => sites.isLoading)

// 表示対象の siteId（isShow=true を weight 順で）
const visibleIds = computed(() => sites.sortedVisibleIds)

// dbTimestamp（Firestore 側の最終更新 epoch）
const dbTimestamp = computed(() => meta.dbTimestamp)

onMounted(async () => {
  // 1) メタ（アクセス+1 & 更新時刻の取得）
  metaLoading.value = true
  await meta.refreshMeta()
  metaLoading.value = false

  // 2) サイト一覧
  await sites.fetchSites()
})

/** 子から「更新」ボタンが押された際の挙動（任意） */
async function handleManualReload() {
  metaLoading.value = true
  const updated = await meta.refreshMeta()
  metaLoading.value = false
  if (updated) {
    await sites.fetchSites()
  }
}
</script>

<style scoped>
.wsView {
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

/* 横一列 + 横スクロール */
.h-scroll-row {
  height: 100%;
  /* 70vh をそのまま使う */
  min-height: 0;
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;

  overflow-x: auto;
  /* 横スク本体 */

  --hbar: 12px;
  padding-bottom: var(--hbar);
  margin-bottom: calc(-1 * var(--hbar));
  scrollbar-gutter: stable both-edges;
  -webkit-overflow-scrolling: touch;
}

.height100 {
  height: 100%;
  min-height: 0;
}

</style>
