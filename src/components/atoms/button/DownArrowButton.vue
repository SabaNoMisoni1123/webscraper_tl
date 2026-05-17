<template>
  <!-- 旧 UI 用の下移動ボタン。SVG アイコンをクリックイベント付きで薄くラップします。 -->
  <IconDownArrow class="downArrowButton" @click="emit('click')" :width="props.width" :height="props.height"
    :fill="iconColor" />
</template>

<script setup lang="ts">
import IconDownArrow from '@/components/icons/IconDownArrow.vue'
import ColorPallet from '@/assets/ColorPallet.json'


const props = defineProps({
  // 旧 atom 群は親側でサイズを pt/px 相当に調整するため、幅と高さを props で受けます。
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

// 親コンポーネントにネイティブクリックをそのまま伝播します。
const emit = defineEmits(["click"])

</script>
