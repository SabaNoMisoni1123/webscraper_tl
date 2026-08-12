<template>
  <!-- 検索タイムラインの表示有無と列数だけを編集する設定パネル。 -->
  <div class="panel-body pa-2">
    <v-switch
      v-model="appState.useSearch"
      color="success"
      density="compact"
      hide-details
      label="検索タイムラインを表示"
    />

    <v-select
      :model-value="searchWindowCount"
      :items="searchWindowOptions"
      class="mt-2"
      density="compact"
      :disabled="!appState.useSearch"
      hide-details
      label="検索窓数"
      variant="outlined"
      @update:model-value="syncSearchWindowCount"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useAppState } from '@/stores/appState'
import { useSearchConditionStore } from '@/stores/searchCondition'

const appState = useAppState()
const searchStore = useSearchConditionStore()

const searchWindowOptions = [1, 2, 3]
const searchWindowCount = computed(() => searchStore.size)

// 永続化データが 0 件の場合でも、検索列を再表示したときに編集対象を確保します。
watch(() => searchStore.size, size => {
  if (size === 0) {
    searchStore.pushCondition()
  }
})

function syncSearchWindowCount(value: number) {
  const next = Number(value)
  if (!Number.isFinite(next)) return

  appState.useSearch = next > 0
  if (next === 0) return

  // ストアの push/pop に寄せて、永続化対象の配列を直接置き換えないようにします。
  while (searchStore.size < next) {
    searchStore.pushCondition()
  }
  while (searchStore.size > next) {
    searchStore.popCondition()
  }
}
</script>

<style scoped>
.panel-body {
  height: 100%;
  min-height: 0;
  overflow: hidden;
}
</style>
