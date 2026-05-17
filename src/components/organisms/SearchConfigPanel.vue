<template>
  <!-- 検索タイムラインの表示有無と検索条件スロットを編集する設定パネル。 -->
  <div class="panel-body pa-2">
    <v-switch
      v-model="appState.useSearch"
      color="success"
      density="compact"
      hide-details
      label="検索タイムラインを表示"
    />

    <v-select
      v-model="searchWindowCount"
      :items="searchWindowOptions"
      class="mt-2"
      density="compact"
      hide-details
      label="検索窓数"
      variant="outlined"
      @update:model-value="syncSearchWindowCount"
    />

    <v-divider class="my-3" />

    <div class="d-flex align-center mb-2">
      <v-btn
        icon="mdi-chevron-up"
        size="x-small"
        variant="text"
        :disabled="activeSearchIndex <= 0"
        @click="activeSearchIndex--"
      />
      <div class="text-caption text-medium-emphasis flex-grow-1 text-center">
        検索 {{ activeSearchIndex + 1 }} / {{ searchStore.size }}
      </div>
      <v-btn
        icon="mdi-chevron-down"
        size="x-small"
        variant="text"
        :disabled="activeSearchIndex >= searchStore.size - 1"
        @click="activeSearchIndex++"
      />
    </div>

    <template v-if="activeCondition">
      <v-text-field
        v-model.trim="activeCondition.word"
        clearable
        density="compact"
        hide-details
        label="キーワード"
        prepend-inner-icon="mdi-text-search"
        variant="outlined"
      />

      <div class="date-grid mt-2">
        <v-select
          v-model="activeCondition.year"
          :items="yearOptions"
          density="compact"
          hide-details
          label="年"
          variant="outlined"
        />
        <v-select
          v-model="activeCondition.month"
          :items="monthOptions"
          density="compact"
          hide-details
          label="月"
          variant="outlined"
        />
        <v-select
          v-model="activeCondition.day"
          :items="dayOptions"
          density="compact"
          hide-details
          label="日"
          variant="outlined"
        />
      </div>

      <v-btn
        class="mt-3"
        block
        color="error"
        prepend-icon="mdi-close"
        size="small"
        variant="tonal"
        :disabled="searchStore.size <= 1"
        @click="removeCondition(activeSearchIndex)"
      >
        この検索条件を削除
      </v-btn>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useAppState } from '@/stores/appState'
import { useSearchConditionStore, type SearchConditionData } from '@/stores/searchCondition'

const appState = useAppState()
const searchStore = useSearchConditionStore()

// 複数検索窓を省スペースで扱うため、ここでは 1 条件ずつページング表示します。
const activeSearchIndex = ref(0)
const searchWindowOptions = [1, 2, 3]
const searchWindowCount = ref(searchStore.size)

// 日付指定は完全一致検索用。年だけは現在年を起点に過去 8 年分を候補化します。
const currentYear = new Date().getFullYear()
const yearOptions = computed(() => ['-', ...Array.from({ length: 8 }, (_, i) => currentYear - i)])
const monthOptions = ['-', ...Array.from({ length: 12 }, (_, i) => i + 1)]
const dayOptions = ['-', ...Array.from({ length: 31 }, (_, i) => i + 1)]

const activeCondition = computed<SearchConditionData | undefined>(
  () => searchStore.searchCondition[activeSearchIndex.value]
)

// 別 UI から検索条件数が変わった場合も、表示中インデックスが範囲外にならないよう補正します。
watch(() => searchStore.size, size => {
  searchWindowCount.value = size
  if (activeSearchIndex.value >= size) {
    activeSearchIndex.value = Math.max(0, size - 1)
  }
})

function syncSearchWindowCount(value: number) {
  const next = Number(value)
  if (!Number.isFinite(next)) return

  // ストアの push/pop に寄せて、永続化対象の配列を直接置き換えないようにします。
  while (searchStore.size < next) {
    searchStore.pushCondition()
  }
  while (searchStore.size > next) {
    searchStore.popCondition()
  }
}

function removeCondition(idx: number) {
  searchStore.rmCondition(idx)
  // 検索条件が 0 件になると表示側の前提が崩れるため、最低 1 件は維持します。
  if (searchStore.size === 0) {
    searchStore.pushCondition()
  }
  activeSearchIndex.value = Math.min(activeSearchIndex.value, searchStore.size - 1)
  searchWindowCount.value = searchStore.size
}
</script>

<style scoped>
.panel-body {
  height: 100%;
  min-height: 0;
  overflow: hidden;
}

.date-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}
</style>
