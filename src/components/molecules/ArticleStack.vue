<template>
  <!--
    記事カードを縦に並べるだけの表示専用 molecule。
    絞り込みやロード判断は呼び出し元 organism に残し、記事表示の統一だけを担当します。
  -->
  <div class="article-stack">
    <ArticleItem
      v-for="article in articles"
      :key="article.url"
      :article-source="article.org"
      :article-description="article.title"
      :article-url="article.url"
      :article-epoch="article.epoch"
      :show-bar="showSource"
    />
  </div>
</template>

<script setup lang="ts">
import ArticleItem from '@/components/molecules/ArticleItem.vue'
import type { ArticleData } from '@/stores/timelineStore'

withDefaults(defineProps<{
  articles: ArticleData[]
  showSource?: boolean
}>(), {
  showSource: false,
})
</script>

<style scoped>
.article-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
