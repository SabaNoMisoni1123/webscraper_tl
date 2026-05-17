<template>
  <!-- 設定ペイン用の小型アイコンボタン。active と enabled を色・variant に変換します。 -->
  <v-btn
    :icon="icon"
    size="small"
    :color="color"
    :variant="variant"
    @click="emit('click')"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  icon: string
  active?: boolean
  enabled?: boolean
}>(), {
  active: false,
  enabled: false,
})

const emit = defineEmits<{
  click: []
}>()

// active を最優先し、機能が有効なだけの場合は success の tonal 表示にします。
const color = computed(() => props.active ? 'primary' : props.enabled ? 'success' : undefined)
const variant = computed(() => props.active || props.enabled ? 'tonal' : 'text')
</script>
