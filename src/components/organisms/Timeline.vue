<template>
  <div class="timeline" :style="styles">
    <TLTitleBar :tl-title="tlTitle" :style="styles" />
    <div class="tlItemList">
      <p class="loadingMsg" v-if="wsData.loadingStatus[props.tlSiteId]">--読み込み中--</p>
      <ArticleItem v-for="item in showArticles" :article-source="item!.org" :article-description="item!.title"
        :article-url="item!.url" :article-epoch="item!.epoch" :tl-title="tlData.name" />
    </div>
    <div class="tlFooter">
    </div>
  </div>
</template>


<script setup lang="ts">
import TLTitleBar from '@/components/atoms/bar/TLTitleBar.vue';
import ArticleItem from '@/components/molecules/ArticleItemNoButton.vue';
import ColorPallet from '@/assets/ColorPallet.json'

import { computed } from 'vue'

import { useWsScrapedDataStore } from '@/stores/wsScrapedData';
import { useTlDataListStore } from '@/stores/tlData';

const props = defineProps({
  tlSiteId: {
    type: String,
    required: true
  },
  lastEpoch: {
    type: Number,
    default: 0,
  },
  tlTitle: {
    type: String,
    default: "",
  }
})

const tlDataStore = useTlDataListStore();
const tlData = props.tlSiteId in tlDataStore.tlData ? tlDataStore.tlData[props.tlSiteId] : tlDataStore.defaultTlData;

const wsData = useWsScrapedDataStore();
if (props.tlSiteId != "all") {
  wsData.scrape(props.tlSiteId);
}

const tlTitle = props.tlTitle == "" ? tlData.name : props.tlTitle;
const bgList = [
  ColorPallet.blue1,
  ColorPallet.red1,
  ColorPallet.yellow1,
  ColorPallet.green1,
  ColorPallet.gray1,
];

const showArticles = computed(() => {
  let ret = props.tlSiteId == "all" ? wsData.allArticles : wsData.scrapedData[props.tlSiteId];
  return ret.filter((article) => article.epoch >= props.lastEpoch);
})

const styles = computed(() => {
  return {
    "--tl-background-color": bgList[tlData.color % bgList.length]
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
</style>
