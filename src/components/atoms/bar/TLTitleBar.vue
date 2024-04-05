<template>
  <div class="tlTitleBar" :style="styles">
    <p>{{ props.tlTitle }}</p>
    <p class="loadingMsg" v-if="isLoading">-読み込み中-</p>
  </div>
</template>

<script setup lang="ts">
import ColorPallet from '@/assets/ColorPallet.json';

const props = defineProps({
  tlTitle: {
    type: String,
    required: true,
  },
  ttBackgroundColor: {
    type: String,
    default: ColorPallet.blue1
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  styles: {
    type: Object,
    default: {
      "--tl-background-color": ColorPallet.blue1
    }
  }
})

</script>

<style scoped>
.tlTitleBar {
  border-radius: 10pt 10pt 0 0;
  background: var(--tl-background-color);
}

.tlTitleBar p {
  color: white;
  padding: 2pt 15pt;
  margin: 0pt;
  text-align: left;
  font-weight: bold;
}

</style>
