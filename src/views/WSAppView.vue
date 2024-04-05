<template>
  <div class="wsapp">
    <div class="cfgArea">
      <!-- 設定用の領域 -->
    </div>
    <div class="tlArea">
      <Timeline v-for="id in tlData.sortedIds" :tl-site-id="id" />
    </div>
  </div>
</template>

<script setup lang="ts">

import Timeline from '@/components/organisms/Timeline.vue'
import { useTlDataListStore } from '@/stores/tlData'

const tlData = useTlDataListStore()
</script>

<style scoped>
.wsapp {
  width: auto;
  height: auto;
  padding-top: 5pt;
  padding-left: 10pt;
  padding-right: 10pt;

}

.cfgArea {
  float: left;
}

.tlArea {
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.tlArea Timeline {
  display: inline-block;
}
</style>
