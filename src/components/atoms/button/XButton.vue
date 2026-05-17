<template>
  <!-- 旧 UI 用のクリアボタン。主に検索フォームの日付リセットに使います。 -->
  <IconX class="xButton" @click="emit('click')" :width="props.width" :height="props.height" :fill="props.iconColor" />
</template>

<script setup lang="ts">
import IconX from '@/components/icons/IconX.vue'
import ColorPallet from '@/assets/ColorPallet.json'

const props = defineProps({
  // SVG ボタンの見た目だけを調整する props です。
  width: {
    type: Number,
    default: 20,
  },
  height: {
    type: Number,
    default: 20,
  },
  iconColor: {
    type: String,
    default: ColorPallet.gray2
  }
})

// クリックの意味づけはフォーム側に任せます。
const emit = defineEmits(["click"])
</script>
