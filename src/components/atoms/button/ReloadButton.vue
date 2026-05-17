<template>
  <!-- 旧 UI 用の再読み込みボタン。現在は CfgTabBar 側でコメントアウトされています。 -->
  <IconReload class="searchButton" @click="emit('click')" :width="props.width" :height="props.height"
    :fill="props.iconColor" />
</template>

<script setup lang="ts">
import IconReload from '@/components/icons/IconReload.vue'
import ColorPallet from '@/assets/ColorPallet.json'

const props = defineProps({
  // 他の旧 SVG ボタンと同じ props 形状を維持します。
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

// クリック後の処理は呼び出し元で決めるため、イベントだけを公開します。
const emit = defineEmits(["click"])
</script>
