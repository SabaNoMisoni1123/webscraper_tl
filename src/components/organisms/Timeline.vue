<template>
  <!-- 現行のサイト別タイムライン列。1 siteId ごとに 1 枚のカードとして横並び表示します。 -->
  <v-card class="timeline m-0 p-0">
    <v-toolbar class="timelineBar">
      <v-toolbar-title>{{ headerTitle }}</v-toolbar-title>
    </v-toolbar>

    <v-infinite-scroll mode="manual" side="end" class="scrollArea" @load="onInfiniteLoad">
      <!-- 記事リスト -->
      <template v-for="art in showArticles" :key="art.url">
        <div class="art">
          <ArticleItem :article-source="art.org" :article-description="art.title" :article-url="art.url"
            :article-epoch="art.epoch" />
        </div>
      </template>
    </v-infinite-scroll>
  </v-card>
</template>

<script setup lang="ts">
import { computed, toRefs, watch } from 'vue'

import { useTimelineStore } from '@/stores/timelineStore'
import { useSiteStore } from '@/stores/siteStore'

import ArticleItem from '@/components/molecules/ArticleItem.vue'
import type { ArticleData } from '@/stores/timelineStore'

const props = defineProps({
  siteId: { type: String, required: true },
  dbTimestamp: { type: Number, default: -1 },
  title: { type: String, default: '' },
  showBar: { type: Boolean, default: false }
})

/** 任意: 親でリロードボタン等を置く場合（既存のI/F維持） */
defineEmits<{ (e: 'reload'): void }>()

const { siteId, dbTimestamp, title, showBar } = toRefs(props)

// store
const tl = useTimelineStore()
const sites = useSiteStore()

// この Timeline が扱う記事バケット（存在しなければ undefined → store が初期化するまで待つ）
const bucket = computed(() => tl.buckets[siteId.value])

// 見出し文言（props.title が無ければサイト名にフォールバック）
const headerTitle = computed(() => {
  if (title?.value && title.value.trim() !== '') return title.value
  const s = sites.siteData[siteId.value]
  return s ? s.name : ''
})

// 表示する記事（必要なフィルタやソートをここに集約）
const showArticles = computed<ArticleData[]>(() => {
  const list = bucket.value?.scraped ?? []
  return list
})

// ---- 初回＆依存変化時ロード ----
watch([siteId, dbTimestamp], async ([id, ts]) => {
  if (!id || !Number.isFinite(ts)) return
  await tl.load(id, ts) // 内部でキャッシュ条件を満たせば no-op
}, { immediate: true })

// ---- 追加読み込み (v-infinite-scroll: manual) ----
type LoadArg = { side: 'end' | 'start' | 'both', done: (s: 'error' | 'loading' | 'empty' | 'ok') => void }
async function onInfiniteLoad({ done }: LoadArg) {
  if (!siteId.value) return done('error')

  try {
    // Vuetify の manual infinite-scroll は done() の状態でフッター表示を切り替えます。
    const before = bucket.value?.scraped?.length ?? 0
    const afterList = await tl.loadMore(siteId.value)
    const added = (afterList?.length ?? 0) - before
    if (added <= 0) done('empty')
    else done('ok')
  } catch (e) {
    console.error('[Timeline.vue] loadMore error:', e)
    done('error')
  }
}
</script>

<style scoped>
/* =========================================
   横並びの1カラム（カード）本体
   - 親の v-row が row-scroll(height=var(--row-h)) を持つ前提
   - カード自身も同じ高さに合わせて内部スクロールを成立させる
   ========================================= */
.timeline {
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

/* 見出しツールバー固定（任意：使っているなら有効） */
.timelineBar {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--v-theme-surface);
}

/* 縦スク本体 */
.scrollArea {
  flex: 1 1 auto;
  overflow-y: auto;
  min-height: 0;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}

.art {
  margin-bottom: 6px;
}
</style>
