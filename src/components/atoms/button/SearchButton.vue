<template>
  <IconLoupe class="searchButton" @click="emit('click')" :width="props.width" :height="props.height" :fill="iconColor" />
</template>

<script setup lang="ts">
import IconLoupe from '@/components/icons/IconLoupe.vue'
import ColorPallet from '@/assets/ColorPallet.json'


const props = defineProps({
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
const emit = defineEmits(["click"])

</script>

