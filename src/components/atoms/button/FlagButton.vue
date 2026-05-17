<template>
  <!-- 5 色を巡回する旧 UI 用フラグボタン。v-model:flagValue で状態を親へ返します。 -->
  <IconFlag @click="click" class="flagButton" :width="props.width" :height="props.height"
    :fill="flagColor[props.flagValue]" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconFlag from '@/components/icons/IconFlag.vue'

// flagValue はこの配列の添字として扱い、クリックごとに次の色へ進めます。
const flagColor = ref(["#3C82F5", "#DC003C", "#329B73", "#DCA000", "#595757"])

const props = defineProps({
  flagValue: {
    type: Number,
    default: 0,
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
  'update:flagValue': [value: Number],
}>()


function click() {
  // 旧 UI の 0..4 の循環値を維持します。
  emit("update:flagValue", (props.flagValue + 1) % 5)
}

</script>
