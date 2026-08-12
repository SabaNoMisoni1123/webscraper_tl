<template>
  <!-- 検索タイムライン列のヘッダー。主操作はキーワード、詳細条件は必要時だけ開く。 -->
  <div class="search-header">
    <v-toolbar class="search-toolbar" density="compact">
      <v-toolbar-title class="search-title">{{ title }}</v-toolbar-title>

      <v-text-field
        v-model="wordModel"
        class="search-field"
        clearable
        density="compact"
        hide-details
        placeholder="検索ワード"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
      />

      <template #append>
        <v-chip class="result-chip" size="small" variant="tonal">{{ resultCount }}</v-chip>
        <v-btn
          :color="hasDateRange ? 'primary' : undefined"
          :icon="detailsOpen ? 'mdi-chevron-up' : 'mdi-tune'"
          size="small"
          variant="text"
          @click="detailsOpen = !detailsOpen"
        />
      </template>
    </v-toolbar>

    <v-expand-transition>
      <div v-if="detailsOpen" class="advanced-area">
        <SearchDateRangeFields
          :start-date="condition.startDate"
          :end-date="condition.endDate"
          @update:start-date="updateCondition({ startDate: $event })"
          @update:end-date="updateCondition({ endDate: $event })"
        />
      </div>
    </v-expand-transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import SearchDateRangeFields from '@/components/molecules/SearchDateRangeFields.vue'
import type { SearchConditionData } from '@/stores/searchCondition'

const props = defineProps<{
  condition: SearchConditionData
  resultCount: number
  title: string
}>()

const emit = defineEmits<{
  'update:condition': [condition: SearchConditionData]
}>()

const detailsOpen = ref(false)
const hasDateRange = computed(() => Boolean(props.condition.startDate || props.condition.endDate))

function updateCondition(patch: Partial<SearchConditionData>) {
  emit('update:condition', {
    ...props.condition,
    ...patch,
  })
}

const wordModel = computed({
  get: () => props.condition.word,
  set: value => updateCondition({ word: value.trim() }),
})
</script>

<style scoped>
.search-header {
  flex: 0 0 auto;
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.search-toolbar {
  flex: 0 0 auto;
}

.search-title {
  flex: 0 0 auto;
  max-width: 72px;
  font-size: 0.875rem;
}

.search-field {
  flex: 1 1 auto;
  min-width: 0;
  margin-left: 8px;
}

.result-chip {
  margin-right: 4px;
}

.advanced-area {
  padding: 8px 12px 12px;
  background: rgba(var(--v-theme-surface-variant), 0.35);
}
</style>
