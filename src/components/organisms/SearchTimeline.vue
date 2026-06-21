<template>
  <!-- 検索条件 1 件に対応する横並びタイムライン列。 -->
  <v-card class="search-timeline">
    <SearchTimelineHeader
      v-model:condition="condition"
      :result-count="searchedArticles.length"
      :title="headerTitle"
    />

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
import SearchTimelineHeader from '@/components/molecules/SearchTimelineHeader.vue'
import { useSearchConditionStore, type SearchConditionData } from '@/stores/searchCondition'
import { useSiteStore } from '@/stores/siteStore'
import { useTimelineStore, type ArticleData } from '@/stores/timelineStore'

const props = defineProps<{
  searchCondIdx: number
}>()

const searchStore = useSearchConditionStore()
const sites = useSiteStore()
const timeline = useTimelineStore()

// 検索条件の削除直後などでも描画が落ちないよう、空条件にフォールバックします。
const emptyCondition: SearchConditionData = {
  word: '',
  year: '-',
  month: '-',
  day: '-',
  startDate: '',
  endDate: '',
  color: 0,
}

const condition = computed<SearchConditionData>({
  get: () => searchStore.searchCondition[props.searchCondIdx] ?? emptyCondition,
  set: value => searchStore.setCondition(props.searchCondIdx, value),
})

const headerTitle = computed(() => {
  return `検索 ${props.searchCondIdx + 1}`
})

const searchedArticles = computed<ArticleData[]>(() => {
  const word = condition.value.word.trim()
  if (!word) return []

  // 表示対象サイトだけを横断検索し、非表示サイトの記事は検索列にも出さない方針です。
  const articles = sites.sortedVisibleIds.flatMap(id => timeline.buckets[id]?.scraped ?? [])
  const filtered = articles.filter(article => article.title.includes(word))

  const startAt = dateStartEpoch(condition.value.startDate)
  const endAt = dateEndEpoch(condition.value.endDate)
  const dateFiltered = startAt !== undefined || endAt !== undefined
    ? filtered.filter(article => {
      return (startAt === undefined || startAt <= article.epoch)
        && (endAt === undefined || article.epoch < endAt)
    })
    : filtered

  return [...dateFiltered].sort((a, b) => b.epoch - a.epoch)
})

function dateStartEpoch(dateValue?: string) {
  if (!dateValue) return undefined
  const date = new Date(`${dateValue}T00:00:00`)
  const epoch = date.getTime() / 1000
  return Number.isFinite(epoch) ? epoch : undefined
}

function dateEndEpoch(dateValue?: string) {
  if (!dateValue) return undefined
  const date = new Date(`${dateValue}T00:00:00`)
  date.setDate(date.getDate() + 1)
  const epoch = date.getTime() / 1000
  return Number.isFinite(epoch) ? epoch : undefined
}
</script>

<style scoped>
.search-timeline {
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
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
