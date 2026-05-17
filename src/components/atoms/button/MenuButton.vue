<template>
  <!-- 旧 UI 用のメニューボタン。SVG アイコンを共通サイズ props で表示します。 -->
  <IconMenu class="menuButton" @click="emit('click')" :width="props.width" :height="props.height" :fill="iconColor" />
</template>

<script setup lang="ts">
import IconMenu from '@/components/icons/IconMenu.vue'
import ColorPallet from '@/assets/ColorPallet.json'


const props = defineProps({
  // 旧 SVG ボタン群で共通のサイズ・色指定です。
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

// クリック処理の実体は親コンポーネントに委譲します。
const emit = defineEmits(["click"])

</script>
