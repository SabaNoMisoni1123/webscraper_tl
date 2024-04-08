<template>
  <div class="wsapp" :style="styles">
    <div class="cfgArea">
      <CfgTabBar />
    </div>

    <div class="searchArea" v-show="appState.useSearch">
      <SearchedTimeline />
      <!-- 検索用の領域 -->
    </div>

    <div class="tlArea">
      <Timeline v-for="id in tlData.sortedIdsFiltered" :tl-site-id="id" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CfgTabBar from '@/components/organisms/CfgTabBar.vue'
import Timeline from '@/components/organisms/Timeline.vue'
import SearchedTimeline from '@/components/organisms/SearchedTimeline.vue'
import ColorPallet from '@/assets/ColorPallet.json'

import { useAppState } from '@/stores/appState'
import { useTlDataListStore } from '@/stores/tlData'

const appState = useAppState()
const tlData = useTlDataListStore()

const styles = computed(() => {
  return {
    '--bg-color': ColorPallet.gray2,
  }
});

</script>

<style scoped>
.wsapp {
  width: auto;
  height: 90vh;
  padding-top: 5pt;
  padding-bottom: 5pt;
  padding-left: 10pt;
  padding-right: 10pt;

}

.cfgArea {
  float: left;
  width: auto;
  margin-right: 5pt;
  height: 100%;
  border-right: 3pt solid var(--bg-color);
}

.searchArea {
  float: left;
  width: auto;
  max-width: 50vw;
  height: 100%;

  margin-right: 5pt;
  border-right: 3pt solid var(--bg-color);
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
