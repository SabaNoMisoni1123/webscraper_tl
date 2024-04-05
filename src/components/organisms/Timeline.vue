<template>
  <div class="timeline" :style="styles">
    <TLTitleBar :tl-title="tlCfg.name" :styles="styles" />
    <div class="tlItemList">
      <ArticleItem v-for="item in wsData.scrapedData[props.tlSiteId]" :article-source="item!.org"
        :article-description="item!.title" :article-url="item!.url" :article-epoch="item!.epoch"
        :tl-title="tlCfg.name" />
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
})

const tlData = useTlDataListStore()
const tlCfg = tlData.tlData[props.tlSiteId]

const wsData = useWsScrapedDataStore();
wsData.scrape(props.tlSiteId);

const bgList = [
  ColorPallet.blue1,
  ColorPallet.red1,
  ColorPallet.yellow1,
  ColorPallet.green1,
  ColorPallet.gray1,
];

const styles = computed(() => {
  return {
    "--tl-background-color": bgList[tlCfg.color % bgList.length]
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
</style>
