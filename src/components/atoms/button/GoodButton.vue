<template>
  <!-- 旧 UI 用のいいねボタン。Boolean 値を赤/灰色のハートで表現します。 -->
  <IconHeart class="goodButton" @click="click" :width="props.width" :height="props.height" :fill="iconColor" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconHeart from '@/components/icons/IconHeart.vue'


const props = defineProps({
  goodValue: {
    type: Boolean,
    required: true,
  },
  width: {
    type: Number,
    default: 20,
  },
  height: {
    type: Number,
    default: 20,
  },
})
const emit = defineEmits<{
  'update:goodValue': [value: Boolean],
}>()

// props の初期値をアイコン色へ反映します。以後のクリックでは emit と同時に色も更新します。
const iconColor = ref("")
if (props.goodValue) {
  iconColor.value = "#DC003C"
} else {
  iconColor.value = "#939292"
}

function click() {
  // 親の v-model 更新を待たず、クリック直後に見た目を切り替えます。
  if (props.goodValue) {
    iconColor.value = "#939292"
    emit("update:goodValue", !props.goodValue)
  } else {
    iconColor.value = "#DC003C"
    emit("update:goodValue", !props.goodValue)
  }
}


</script>
