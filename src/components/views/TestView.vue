<template>
  <!-- 開発確認用ページ。旧ストア/新ストア移行中のタイムライン挙動確認に使います。 -->

  <div class="test">
    <h1>タイムラインコンポーネント作成用テストページ</h1>

    <div class="tlArea">
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

// 日付境界の確認用に、現在日の 0:00 を保持します。
let today = new Date();
today = new Date(today.getFullYear(), today.getMonth(), today.getDate());

const noData = computed(() => {
  // 旧テスト UI でサイト一覧ロード済みかを判定する補助値です。
  return Object.keys(dbData.siteData).length < 2
})

const hasBorder = computed(() => {
  // 検索パネルの表示状態に応じたデバッグ表示切替用です。
  return !appState.useSearch;
})

const styles = computed(() => {
  return {
    '--bg-color': ColorPallet.gray2,
  }
});

// データベースからのデータ取得
// 旧ストアの初期化順序を検証するため、明示的に init -> siteData -> timeline の順で実行します。
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
