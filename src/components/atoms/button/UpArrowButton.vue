<template>
  <!-- 旧 UI 用の上移動ボタン。サイト並び替え操作から使われます。 -->
  <IconUpArrow class="upArrowButton" @click="emit('click')" :width="props.width" :height="props.height" :fill="iconColor" />
</template>

<script setup lang="ts">
import IconUpArrow from '@/components/icons/IconUpArrow.vue'
import ColorPallet from '@/assets/ColorPallet.json'


const props = defineProps({
  // 旧 SVG ボタン群で共通化している表示サイズ・色指定です。
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

// 並び替え処理自体は親ストア操作に委譲します。
const emit = defineEmits(["click"])

</script>
