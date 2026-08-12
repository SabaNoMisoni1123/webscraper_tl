<template>
  <!-- 設定カテゴリを文字付きで切り替えるタブ。アイコンだけのレール表示とは役割を分けています。 -->
  <v-btn-toggle
    :model-value="modelValue"
    mandatory
    divided
    density="compact"
    variant="outlined"
    class="w-100"
    @update:model-value="emit('update:modelValue', $event as ConfigSection)"
  >
    <v-btn
      v-for="section in CONFIG_SECTIONS"
      :key="section.value"
      :value="section.value"
      class="flex-grow-1"
      :prepend-icon="section.icon"
    >
      {{ section.label }}
    </v-btn>
  </v-btn-toggle>
</template>

<script setup lang="ts">
import { CONFIG_SECTIONS, type ConfigSection } from '@/components/views/wsConfigTypes'

defineProps<{
  modelValue: ConfigSection
}>()

const emit = defineEmits<{
  'update:modelValue': [section: ConfigSection]
}>()
</script>
