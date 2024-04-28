<template>
  <div class="wsapp" :style="styles">
    <div class="sideArea">
      <div :class="{ cfgArea: true, borderClass: hasBorder }">
        <CfgTabBar />
      </div>

      <div class="newsArea" v-show="appState.useNews">
        <Timeline tl-site-id="all" tl-title="新着情報" :last-epoch="today.getTime() / 1000" />
      </div>

      <div class="searchArea" v-show="appState.useSearch">
        <SearchedTimeline v-for="idx in searchCond.size" :search-cond-idx="idx.valueOf() - 1" />
      </div>
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
import { useSearchCondtionStore } from '@/stores/searchCondition'

const appState = useAppState();
const tlData = useTlDataListStore();
const searchCond = useSearchCondtionStore();

let today = new Date();
today = new Date(today.getFullYear(), today.getMonth(), today.getDate());

const hasBorder = computed(() => {
  return !appState.useSearch;
})

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

.sideArea {
  height: 100%;
  float: left;
  width: auto;
  border-right: 3pt solid var(--bg-color);
  margin-right: 5pt;
}

.cfgArea {
  float: left;
  width: auto;
  margin-right: 3pt;
  height: 100%;
}

.newsArea {
  float: left;
  width: auto;
  max-width: 50vw;
  height: 100%;
  margin-right: 3pt;
}

.searchArea {
  float: left;
  width: auto;
  max-width: 50vw;
  margin-right: 3pt;

  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.searchArea Timeline {
  display: inline-block;
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
