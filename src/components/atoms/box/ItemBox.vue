<template>
  <div class="itemBox" :style="styles">
    <p class="iStr">{{ props.itemString }}</p>
  </div>
</template>

<script setup lang="ts">
import ColorPallet from '@/assets/ColorPallet.json';
import { computed } from 'vue';

const props = defineProps({
  itemString: {
    type: String,
    required: true,
  }
})

const styles = computed(() => {
  return {
    "--tb-background-color": ColorPallet.gray3
  }
})
</script>

<style scoped>
.itemBox {
  margin: 0pt;
  border: 0pt 1pt 1pt 1pt solid #3C82F5;
  box-sizing: border-box;
  /* background: #E6E6E6; */
  background: var(--tb-background-color);
}

.itemBox p {
  color: black;
  padding: 2pt 10pt;
  margin: 0pt;
  text-align: left;
  white-space: normal;
}
</style>
