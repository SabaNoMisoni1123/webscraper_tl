<template>

  <div class="test">
    <h1>タイムラインコンポーネント作成用テストページ</h1>

    <div class="tlArea">
      <div class="noDataState" v-if="noData">
        <p>何度かリログすると正しく表示されるようになります。</p>
        <p>お手数ですが、「ctrl-R」を何度か押してください。</p>
        <p v-show="dbData.isLoadingSiteData">現在読み込み中...</p>
      </div>
      <TimelineOld tl-site-id="micRSS" />
      <Timeline tl-site-id="micJoho" />
    </div>
  </div>

</template>

<script setup lang="ts">
import { computed } from 'vue'
import TimelineOld from '@/components/organisms/Timeline_old.vue'
import Timeline from '@/components/organisms/Timeline.vue'
import ColorPallet from '@/assets/ColorPallet.json'

import { useDbDataStore } from '@/stores/dbStore'
import { useWsDataStore } from '@/stores/wsStore'
import { useAppState } from '@/stores/appState'
import { useSearchCondtionStore } from '@/stores/searchCondition'

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
dbData.init().then(() => {
  dbData.updateSiteData();
}).then(() => {
  wsData.init(dbData.getSortedSiteDataId);
}).then(() => {
  for (const id of dbData.getSortedSiteDataIdFiltered) {
    wsData.loadTlData(id, dbData.dbTimestamp);
  }
}).catch((error) => {
  console.log(error);
});
</script>

<style scoped>
.tlArea {
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.tlArea Timeline {
  display: inline-block;
}
</style>
