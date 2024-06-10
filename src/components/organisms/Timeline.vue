<template>
  <div class="timeline" :style="styles">
    <TLTitleBar :tl-title="tlTitle" :style="styles" />
    <div class="tlItemList">
      <p class="loadingMsg" v-if="wsData.loadingStatus[props.tlSiteId]">--読み込み中--<br>読み込みが終わらない場合はリログしてください。</p>
      <ArticleItem v-for="item in showArticles" :article-source="item!.org" :article-description="item!.title"
        :article-url="item!.url" :article-epoch="item!.epoch" :tl-title="tlData.name" :show-bar="props.showBar" />
    </div>
    <div class="tlFooter">
    </div>
  </div>
</template>


<script setup lang="ts">
import TLTitleBar from '@/components/atoms/bar/TLTitleBar.vue';
import ArticleItem from '@/components/molecules/ArticleItemNoButton.vue';
import ColorPallet from '@/assets/ColorPallet.json'

import { computed, onMounted } from 'vue'

import { useWsScrapedDataStore, type ArticleData } from '@/stores/wsScrapedData';
import { useTlDataListStore } from '@/stores/tlData';

const props = defineProps({
  tlSiteId: {
    type: String,
    required: true
  },
  tlTitle: {
    type: String,
    default: "",
  },
  showBar: {
    type: Boolean,
    default: false,
  },
  lastEpoch: {
    type: Number,
    default: -1,
  }
})

// store
const tlDataStore = useTlDataListStore();
const wsData = useWsScrapedDataStore();

// tlData
const tlData = computed(() => {
  if (props.tlSiteId in tlDataStore.tlData) {
    return tlDataStore.tlData[props.tlSiteId];
  } else {
    return tlDataStore.defaultTlData;
  }
})


const tlTitle = computed(() => {
  if (props.tlTitle == "") {
    return tlData.value.name;
  } else {
    return props.tlTitle;
  }
})

const bgList = [
  ColorPallet.blue1,
  ColorPallet.red1,
  ColorPallet.yellow1,
  ColorPallet.green1,
  ColorPallet.gray1,
];

// 表示記事
const showArticles = computed(() => {
  let ret = [] as Array<ArticleData>;
  if (props.tlSiteId == "all") {
    for (const id of tlDataStore.sortedIdsFiltered) {
      ret = [...ret, ...wsData.scrapedData[id]];
    }
    ret = ret.sort((a, b) => b.epoch - a.epoch);
  } else {
    ret = wsData.scrapedData[props.tlSiteId];
  }

  // エポック時でフィルタ
  if (ret.length > 0) {
    ret = ret.filter((e) => {
      return e.epoch >= props.lastEpoch;
    })
  }

  return ret;
})

// マウント時のデータベースアクセス
onMounted(() => {
  if (props.tlSiteId != "all" && tlData.value.isShow) {
    wsData.loadDatabase(props.tlSiteId);
  } else {
    console.log("Not load DB: ", props.tlSiteId);
  }
})

const styles = computed(() => {
  return {
    "--tl-background-color": bgList[tlData.value.color % bgList.length]
  }
})

</script>

<style scoped>
.timeline {
  margin-right: 2pt;
  display: inline-block;
  vertical-align: top;
  width: max(200pt, 20vw);
  height: 90vh;
  white-space: normal;
}

.tlItemList {
  background: var(--tl-background-color);
  padding: 2pt;
  height: 90%;

  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.tlItemList::-webkit-scrollbar {
  display: none;
}

.tlFooter {
  height: 5pt;
  background: var(--tl-background-color);
}

.loadingMsg {
  color: white;
  padding: 2pt 15pt;
  margin: 0pt;
  text-align: left;
  font-weight: bold;
}

.noDataState {
  color: white;
  padding: 2pt 15pt;
  margin: 0pt;
  text-align: left;
  font-weight: bold;
}
</style>
