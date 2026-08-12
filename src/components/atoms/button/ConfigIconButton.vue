<template>
  <!-- 設定ペイン用の小型アイコンボタン。有効な機能だけを色・variant に変換します。 -->
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
  enabled?: boolean
}>(), {
  enabled: false,
})

const emit = defineEmits<{
  click: []
}>()

// 色付き表示は「表示結果に追加の条件やモードが効いている」場合に限定します。
const color = computed(() => props.enabled ? 'success' : undefined)
const variant = computed(() => props.enabled ? 'tonal' : 'text')
</script>
