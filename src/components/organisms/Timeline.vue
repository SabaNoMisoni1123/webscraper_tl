<template>
  <div class="timeline">
    <TLTitleBar :tl-title="props.tlTitle" />
    <div class="tlItemList">
      <ArticleItem v-for="item in wsData.scrapedData[props.siteId]" :article-source="item!.org"
        :article-desctiption="item!.title" :article-url="item!.url" :article-epoch="item!.epoch" />
    </div>
    <div class="tlFooter">
    </div>
  </div>
</template>


<script setup lang="ts">
import TLTitleBar from '@/components/atoms/bar/TLTitleBar.vue'
import ArticleItem from '@/components/molecules/ArticleItemNoButton.vue'

import { useWsScrapedDataStore } from '@/stores/wsScrapedData'

const props = defineProps({
  siteId: {
    type: String,
    required: true
  },
  tlTitle: {
    type: String,
    required: true
  }
})

const wsData = useWsScrapedDataStore();
wsData.scrape(props.siteId);

</script>

<style scoped>
.timeline {
  margin-right: 2pt;
  display: inline-block;
  vertical-align: top;
  width: 25vw;
  height: 90vh;
  white-space: normal;
}

.tlItemList {
  background: #3C82F5;
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
  background: #3C82F5;
}
</style>

