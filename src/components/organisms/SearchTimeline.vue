<template>
  <!-- 検索条件 1 件に対応する横並びタイムライン列。 -->
  <v-card class="search-timeline">
    <v-toolbar class="timeline-bar" density="comfortable">
      <v-toolbar-title>{{ headerTitle }}</v-toolbar-title>
      <template #append>
        <v-chip size="small" variant="tonal">{{ searchedArticles.length }}</v-chip>
      </template>
    </v-toolbar>

    <v-alert
      v-if="!condition.word"
      class="ma-3"
      density="compact"
      type="info"
      variant="tonal"
    >
      キーワードを入力してください。
    </v-alert>

    <v-list v-else-if="searchedArticles.length === 0" class="empty-list">
      <v-list-item
        prepend-icon="mdi-file-search-outline"
        title="一致する記事はありません"
      />
    </v-list>

    <div v-else class="result-list">
      <ArticleItem
        v-for="art in searchedArticles"
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
import { computed } from 'vue'

import ArticleItem from '@/components/molecules/ArticleItem.vue'
import { useSearchConditionStore } from '@/stores/searchCondition'
import { useSiteStore } from '@/stores/siteStore'
import { useTimelineStore, type ArticleData } from '@/stores/timelineStore'

const props = defineProps<{
  searchCondIdx: number
}>()

const searchStore = useSearchConditionStore()
const sites = useSiteStore()
const timeline = useTimelineStore()

// 検索条件の削除直後などでも描画が落ちないよう、空条件にフォールバックします。
const condition = computed(() => searchStore.searchCondition[props.searchCondIdx] ?? {
  word: '',
  year: '-',
  month: '-',
  day: '-',
  color: 0,
})

const headerTitle = computed(() => {
  const word = condition.value.word.trim()
  return word ? `検索: ${word}` : `検索 ${props.searchCondIdx + 1}`
})

const searchedArticles = computed<ArticleData[]>(() => {
  const word = condition.value.word.trim()
  if (!word) return []

  // 表示対象サイトだけを横断検索し、非表示サイトの記事は検索列にも出さない方針です。
  const articles = sites.sortedVisibleIds.flatMap(id => timeline.buckets[id]?.scraped ?? [])
  const filtered = articles.filter(article => article.title.includes(word))

  // 年月日がすべて数値のときだけ、該当日の 0:00 から 24 時間で絞り込みます。
  const year = Number(condition.value.year)
  const month = Number(condition.value.month)
  const day = Number(condition.value.day)
  const hasDate = Number.isFinite(year) && Number.isFinite(month) && Number.isFinite(day)

  const dateFiltered = hasDate
    ? filtered.filter(article => {
      const start = new Date(year, month - 1, day).getTime() / 1000
      const end = start + 60 * 60 * 24
      return start <= article.epoch && article.epoch < end
    })
    : filtered

  return [...dateFiltered].sort((a, b) => b.epoch - a.epoch)
})
</script>

<style scoped>
.search-timeline {
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

.timeline-bar {
  flex: 0 0 auto;
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
