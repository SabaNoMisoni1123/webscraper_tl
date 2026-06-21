<template>
  <!-- 設定に従って全サイト横断の新規情報を表示するタイムライン列。 -->
  <TimelineColumnFrame title="新規情報" :scroll="hasNewsArticles">
    <template #append>
      <v-chip size="small" variant="tonal">{{ rangeLabel }}</v-chip>
    </template>

    <template #status>
      <v-progress-linear v-if="isLoading" indeterminate />
    </template>

    <TimelineEmptyState
      v-if="targetSiteIds.length === 0"
      icon="mdi-newspaper-variant-outline"
      title="表示対象の情報源がありません"
    />

    <TimelineEmptyState
      v-else-if="!isLoading && !hasNewsArticles"
      icon="mdi-newspaper-variant-outline"
      title="新規情報はありません"
    />

    <ArticleStack v-else :articles="newsArticles" show-source />
  </TimelineColumnFrame>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'

import TimelineEmptyState from '@/components/atoms/TimelineEmptyState.vue'
import ArticleStack from '@/components/molecules/ArticleStack.vue'
import TimelineColumnFrame from '@/components/molecules/TimelineColumnFrame.vue'
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

const hasNewsArticles = computed(() => newsArticles.value.length > 0)

watch(
  [targetSiteIds, sinceEpoch, () => props.dbTimestamp],
  async ([ids, since, ts]) => {
    if (!Number.isFinite(ts)) return
    await Promise.all(ids.map(id => timeline.loadRecent(id, ts, since)))
  },
  { immediate: true }
)
</script>
