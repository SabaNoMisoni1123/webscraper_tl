<template>
  <div class="wsapp" :style="styles">
    <div class="sideArea">
      <div :class="{ cfgArea: true, borderClass: hasBorder }">
        <CfgTabBar />
      </div>

      <div class="newsArea" v-show="appState.useNews">
        <NewsTimeline tl-site-id="all" tl-title="新着情報" :last-epoch="today.getTime() / 1000" :show-bar="true" />
      </div>

      <div class="searchArea" v-show="appState.useSearch">
        <SearchedTimeline v-for="idx in searchCond.size" :search-cond-idx="idx.valueOf() - 1" />
      </div>
    </div>

    <div class="tlArea">
      <div class="noDataState" v-if="noData">
        <p>何度かリログすると正しく表示されるようになります。</p>
        <p>お手数ですが、「ctrl-R」を何度か押してください。</p>
        <p v-show="dbData.isLoadingSiteData">現在読み込み中...</p>
      </div>
      <Timeline v-for="id in dbData.getSortedSiteDataIdFiltered" :tl-site-id="id" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CfgTabBar from '@/components/organisms/CfgTabBar.vue'
import Timeline from '@/components/organisms/Timeline.vue'
import NewsTimeline from '@/components/organisms/NewsTimeline.vue'
import SearchedTimeline from '@/components/organisms/SearchedTimeline.vue'
import ColorPallet from '@/assets/ColorPallet.json'

import { useDbDataStore } from '@/stores/dbStore'
import { useWsDataStore } from '@/stores/wsStore'
import { useAppState } from '@/stores/appState'
import { useSearchCondtionStore } from '@/stores/searchCondition'

// 各種ストア
const appState = useAppState();
const searchCond = useSearchCondtionStore();
const dbData = useDbDataStore();
const wsData = useWsDataStore();

let today = new Date();
today = new Date(today.getFullYear(), today.getMonth(), today.getDate());

const noData = computed(() => {
  return Object.keys(dbData.siteData).length < 2
})

const hasBorder = computed(() => {
  return !appState.useSearch;
})

const styles = computed(() => {
  return {
    '--bg-color': ColorPallet.gray2,
  }
});

// データベースからのデータ取得
dbData.updateSiteData();
wsData.init(dbData.getSortedSiteDataId);
for (const id of dbData.getSortedSiteDataIdFiltered) {
  wsData.loadTlData(id, dbData.dbTimestamp);
}

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
