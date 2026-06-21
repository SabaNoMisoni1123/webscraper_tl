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
  articleDescription?: string
  // 旧コンポーネント由来の typo 名。呼び出し側の互換性のため一時的に受けます。
  articleDesctiption?: string
  articleSource: string
  articleUrl: string
  articleEpoch: number
  showBar?: boolean
}>(), {
  articleDescription: '',
  articleDesctiption: '',
  showBar: false,
})

// 正式名を優先し、旧 typo props しか渡されない場合も表示できるようにします。
const articleDescriptionText = computed(() => props.articleDescription || props.articleDesctiption)

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
  overflow: hidden;
}

.article-item__source {
  font-size: 0.875rem;
}

.article-item__body {
  color: rgba(var(--v-theme-on-surface), 0.92);
  line-height: 1.55;
  padding-bottom: 8px;
  overflow-wrap: anywhere;
}

.article-item__actions {
  min-height: 40px;
  padding: 0 8px 6px 12px;
}

.article-item__date {
  color: rgba(var(--v-theme-on-surface), 0.68);
  font-size: 0.8125rem;
  white-space: nowrap;
}
</style>
