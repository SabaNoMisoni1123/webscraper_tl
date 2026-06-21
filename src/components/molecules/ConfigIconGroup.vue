<template>
  <!-- 設定カテゴリのアイコン群。通常表示と折りたたみレール表示で共用します。 -->
  <div class="config-icon-group" :class="{ 'config-icon-group--rail': rail }">
    <ConfigIconButton
      v-for="section in CONFIG_SECTIONS"
      :key="section.value"
      :icon="section.icon"
      :enabled="isEnabled(section.value)"
      @click="emit('select', section.value)"
    />
  </div>
</template>

<script setup lang="ts">
import ConfigIconButton from '@/components/atoms/button/ConfigIconButton.vue'
import { CONFIG_SECTIONS, type ConfigSection } from '@/components/views/wsConfigTypes'

const props = defineProps<{
  useSearch: boolean
  useNews: boolean
  rail?: boolean
}>()

const emit = defineEmits<{
  select: [section: ConfigSection]
}>()

// enabled は「機能が有効」、active は「現在開いている設定カテゴリ」を表します。
function isEnabled(section: ConfigSection) {
  if (section === 'search') return props.useSearch
  if (section === 'news') return props.useNews
  return false
}
</script>

<style scoped>
.config-icon-group {
  display: flex;
  align-items: center;
  gap: 4px;
}

.config-icon-group--rail {
  flex-direction: column;
  gap: 6px;
}
</style>
