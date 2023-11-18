<template>
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

const iconColor = ref("")
if (props.goodValue) {
  iconColor.value = "#DC003C"
} else {
  iconColor.value = "#939292"
}

function click() {
  if (props.goodValue) {
    iconColor.value = "#939292"
    emit("update:goodValue", !props.goodValue)
  } else {
    iconColor.value = "#DC003C"
    emit("update:goodValue", !props.goodValue)
  }
}


</script>

<style scoped>
.goodButton {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
