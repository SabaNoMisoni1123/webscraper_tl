<template>
  <div :class="isNewer ? 'itemBoxNew' : 'itemBox'">
    <p class="iStr">{{ props.itemString }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ColorPallet from '@/assets/ColorPallet.json'

const props = defineProps({
  itemString: {
    type: String,
    required: true,
  },
  isNewer: {
    type: Boolean,
    default: false,
  }
})

const styles = computed(() => {
  return {
    "--bg-color": ColorPallet.yellow3
  }
})
</script>

<style scoped>
.itemBoxNew {
  margin: 0pt;
  /* border: 0pt 1pt 1pt 1pt solid #3C82F5; */
  box-sizing: border-box;
  /* background: #E6E6E6; */
  background: var(--bg-color);
}

.itemBox {
  margin: 0pt;
  /* border: 0pt 1pt 1pt 1pt solid #3C82F5; */
  box-sizing: border-box;
  /* background: #E6E6E6; */
  background: white;
}

p {
  color: black;
  padding: 2pt 10pt;
  margin: 0pt;
  text-align: left;
  white-space: normal;
}
</style>
