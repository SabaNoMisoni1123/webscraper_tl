<template>
  <!-- 現行 Vuetify 版の記事カード。全タイムラインで同じ情報密度と操作位置に揃えます。 -->
  <v-card class="article-item" variant="outlined">
    <v-toolbar
      v-if="showBar"
      :title="articleSource"
      class="article-item__source"
      density="compact"
    />

    <v-card-text class="article-item__body">
      {{ articleDescriptionText }}
    </v-card-text>

    <v-card-actions class="article-item__actions">
      <span class="article-item__date">{{ formattedDate }}</span>
      <v-spacer />
      <v-btn
        aria-label="記事タイトルとURLをコピー"
        icon="mdi-content-copy"
        size="small"
        variant="text"
        @click="copyText"
      />
      <v-btn
        :href="articleUrl"
        aria-label="記事を別タブで開く"
        icon="mdi-open-in-new"
        rel="noopener noreferrer"
        size="small"
        target="_blank"
        variant="text"
      />
    </v-card-actions>
  </v-card>
</template>


<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  articleDescription: string
  articleSource: string
  articleUrl: string
  articleEpoch: number
  showBar?: boolean
}>(), {
  showBar: false,
})

const articleDescriptionText = computed(() => props.articleDescription)

const dateFromEpoch = computed(() => {
  const date = new Date(0)
  date.setSeconds(props.articleEpoch.valueOf())
  return date
})

const formattedDate = computed(() => {
  const date = dateFromEpoch.value
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
})

async function copyText() {
  try {
    // タイトルと URL を改行区切りにして、チャットやメールへ貼り付けやすい形式にします。
    await navigator.clipboard.writeText(`${articleDescriptionText.value}\n${props.articleUrl}`)
  } catch (error) {
    console.error('テキストのコピーに失敗しました。', error)
  }
}

</script>

<style scoped>
.article-item {
  /* カード外側の余白を調整する場合は margin を追加します。
     例: margin: 0 0 8px 0; は上 0 / 右 0 / 下 8px / 左 0。 */
  --article-item-inline-padding: 16px;

  overflow: hidden;
}

.article-item__source {
  font-size: 1.0rem;
}

.article-item__body {
  color: rgba(var(--v-theme-on-surface), 1);
  line-height: 1.2;
  padding: 16px var(--article-item-inline-padding) 8px;
  overflow-wrap: anywhere;
}

.article-item__actions {
  min-height: 40px;
  padding: 0 8px 0 var(--article-item-inline-padding);
}

.article-item__date {
  color: rgba(var(--v-theme-on-surface), 1.0);
  font-size: 1.0rem;
  white-space: nowrap;
}
</style>
