<template>
  <!-- 旧 UI 用の新着情報ボタン。News 表示フラグの切り替えに使います。 -->
  <IconNews class="newsButton" @click="emit('click')" :width="props.width" :height="props.height"
    :fill="props.iconColor" />
</template>

<script setup lang="ts">
import IconNews from '@/components/icons/IconNews.vue'
import ColorPallet from '@/assets/ColorPallet.json'

const props = defineProps({
  // 色は親側で ON/OFF 状態を計算して渡します。
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

// 親の toggle 関数へクリックを通知します。
const emit = defineEmits(["click"])
</script>
