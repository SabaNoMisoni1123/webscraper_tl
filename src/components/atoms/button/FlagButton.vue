<template>
  <IconFlag @click="click" class="flagButton" :width="props.width" :height="props.height"
    :fill="flagColor[props.flagValue]" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconFlag from '@/components/icons/IconFlag.vue'

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
  emit("update:flagValue", (props.flagValue + 1) % 5)
}

</script>

<style scoped>
.flagButton {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
