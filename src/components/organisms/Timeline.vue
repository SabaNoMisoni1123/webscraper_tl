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
import axios from 'axios'
import { ref, computed } from 'vue'

import TLTitleBar from '@/components/atoms/bar/TLTitleBar.vue'
import ArticleItem from '@/components/molecules/ArticleItemNoButton.vue'
import Urls from '@/assets/urls.json'

import { useWsScrapedDataStore } from '@/stores/wsScrapedData'

interface ArticleData {
  "title": string,
  "url": string,
  "org": string,
  "epoch": number
}
type ArticleDataList = Array<ArticleData>

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

const articles = ref<ArticleDataList>()

const sorted_articles = computed(() => {
  return articles.value?.sort((a, b) => b.epoch.valueOf() - a.epoch.valueOf()
  )
})

axios.get(Urls.webscAPI + "/data", { params: { id: props.siteId } }).then((response) => {
  articles.value = response.data.data;
  console.log(props.siteId);
  console.log(response.data);
});
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

