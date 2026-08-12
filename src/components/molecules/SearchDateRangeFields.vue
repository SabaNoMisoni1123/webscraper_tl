<template>
  <!-- 詳細検索でだけ使う日付範囲フィールド。通常のタイムライン閲覧では折りたたまれます。 -->
  <div class="date-range-fields">
    <v-text-field
      v-model="startDateModel"
      clearable
      density="compact"
      hide-details
      label="開始日"
      type="date"
      variant="outlined"
    />
    <v-text-field
      v-model="endDateModel"
      clearable
      density="compact"
      hide-details
      label="終了日"
      type="date"
      variant="outlined"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  startDate?: string
  endDate?: string
}>()

const emit = defineEmits<{
  'update:startDate': [value: string]
  'update:endDate': [value: string]
}>()

const startDateModel = computed({
  get: () => props.startDate ?? '',
  set: value => emit('update:startDate', value ?? ''),
})

const endDateModel = computed({
  get: () => props.endDate ?? '',
  set: value => emit('update:endDate', value ?? ''),
})
</script>

<style scoped>
.date-range-fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}
</style>
