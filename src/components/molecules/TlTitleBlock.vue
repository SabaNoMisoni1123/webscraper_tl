<template>
  <div class="tlTitleBlock" :style="styles">
    <p>{{ dbData.siteData[props.tlSiteId].weight + 1 }} {{ dbData.siteData[props.tlSiteId].name }}</p>
    <div class="buttons">
      <input type="checkbox" v-model="dbData.siteData[props.tlSiteId].isShow">
      <UpArrowButton @click="clickedUp" fill="white" :height="15" />
      <DownArrowButton @click="clickedDown" fill="white" :height="15" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDbDataStore } from '@/stores/dbStore'
import UpArrowButton from '@/components/atoms/button/UpArrowButton.vue'
import DownArrowButton from '@/components/atoms/button/DownArrowButton.vue'

import ColorPallet from '@/assets/ColorPallet.json'

const props = defineProps({
  tlSiteId: {
    type: String,
    required: true
  },
})

const dbData = useDbDataStore();

function clickedUp() {
  dbData.upWeight(props.tlSiteId);
}
function clickedDown() {
  dbData.downWeight(props.tlSiteId);
}


const styles = computed(() => {
  return {
    "--ttb-bg-color": ColorPallet.green1
  }
})
</script>

<style scoped>
.tlTitleBlock {
  width: auto;
  height: auto;
  background-color: var(--ttb-bg-color);
  padding-left: 5pt;
  padding-right: 5pt;
  display: flex;
  margin-top: 2pt;
}

.tlTitleBlock p {
  color: white;
  display: inline-block;
}

.buttons {
  display: inline-block;
  margin: 0 0 0 auto;
}

.buttons input {
  margin-right: 3pt;
}
</style>
