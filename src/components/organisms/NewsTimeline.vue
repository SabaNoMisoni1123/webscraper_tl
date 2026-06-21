<template>
  <!-- 設定に従って全サイト横断の新規情報を表示するタイムライン列。 -->
  <v-card class="news-timeline">
    <v-toolbar class="news-toolbar">
      <v-toolbar-title>新規情報</v-toolbar-title>
      <template #append>
        <v-chip size="small" variant="tonal">{{ rangeLabel }}</v-chip>
      </template>
    </v-toolbar>

    <v-progress-linear v-if="isLoading" indeterminate />

    <v-list v-if="targetSiteIds.length === 0" class="empty-list">
      <v-list-item
        prepend-icon="mdi-newspaper-variant-outline"
        title="表示対象の情報源がありません"
      />
    </v-list>

    <v-list v-else-if="!isLoading && newsArticles.length === 0" class="empty-list">
      <v-list-item
        prepend-icon="mdi-newspaper-variant-outline"
        title="新規情報はありません"
      />
    </v-list>

    <div v-else class="result-list">
      <ArticleItem
        v-for="art in newsArticles"
        :key="art.url"
        :article-source="art.org"
        :article-description="art.title"
        :article-url="art.url"
        :article-epoch="art.epoch"
        show-bar
      />
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'

import ArticleItem from '@/components/molecules/ArticleItem.vue'
import { useAppState } from '@/stores/appState'
import { useSiteStore } from '@/stores/siteStore'
import { useTimelineStore, type ArticleData } from '@/stores/timelineStore'

const props = defineProps<{
  dbTimestamp: number
}>()

const appState = useAppState()
const sites = useSiteStore()
const timeline = useTimelineStore()

const targetSiteIds = computed(() => {
  const configured = appState.newsSiteIds.length > 0 ? appState.newsSiteIds : sites.sortedIds
  return configured.filter(id => Boolean(sites.siteData[id]))
})

const sinceEpoch = computed(() => {
  const start = new Date()
  start.setHours(0, 0, 0, 0)
  start.setDate(start.getDate() - (appState.newsDays - 1))
  return Math.floor(start.getTime() / 1000)
})

const rangeLabel = computed(() => {
  return appState.newsDays === 1 ? '当日分' : `${appState.newsDays}日分`
})

const isLoading = computed(() =>
  targetSiteIds.value.some(id => timeline.recentBuckets[id]?.loading)
)

const newsArticles = computed<ArticleData[]>(() => {
  const articles = targetSiteIds.value.flatMap(id => timeline.recentBuckets[id]?.scraped ?? [])
  return [...articles].sort((a, b) => b.epoch - a.epoch)
})

watch(
  [targetSiteIds, sinceEpoch, () => props.dbTimestamp],
  async ([ids, since, ts]) => {
    if (!Number.isFinite(ts)) return
    await Promise.all(ids.map(id => timeline.loadRecent(id, ts, since)))
  },
  { immediate: true }
)
</script>

<style scoped>
.news-timeline {
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

.news-toolbar {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--v-theme-surface);
}

.result-list {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding: 8px;
}

.empty-list {
  flex: 1 1 auto;
}
</style>
