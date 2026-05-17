<template>
  <!-- 旧 UI 用の検索ボタン。SearchForm と CfgTabBar の両方から使われます。 -->
  <IconLoupe class="searchButton" @click="emit('click')" :width="props.width" :height="props.height"
    :fill="props.iconColor" />
</template>

<script setup lang="ts">
import IconLoupe from '@/components/icons/IconLoupe.vue'
import ColorPallet from '@/assets/ColorPallet.json'

const props = defineProps({
  // サイズと色は親が用途ごとに決める旧 atom 共通の API です。
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

// 検索実行やパネル開閉は親の責務としてクリックだけを通知します。
const emit = defineEmits(["click"])
</script>
