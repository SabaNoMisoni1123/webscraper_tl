<template>
  <div class="timeline">
    <TLTitleBar :tl-title="props.fileData.dataName" />
    <div class="tlItemList">
      <ArticleItem v-for="item in sorted_articles?.slice(0, numShow)" :article-source="item!.dataSource"
        :article-desctiption="item!.description" :article-url="item!.URL" :article-epoch="item!.epoch" />
    </div>
    <div class="tlFooter">
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
import TLTitleBar from '@/components/atoms/bar/TLTitleBar.vue'
import ArticleItem from '@/components/molecules/ArticleItem.vue'

import { type WsFileData } from '@/stores/wsFileList'

interface ArticleData {
  "datetime64": number,
  "description": string,
  "URL": string,
  "dataSource": string,
  "year": number,
  "month": number,
  "day": number,
  "epoch": number
}
type ArticleDataList = Array<ArticleData>

const props = defineProps({
  fileData: {
    type: Object as PropType<WsFileData>,
    required: true,
  }
})

const articles = ref<ArticleDataList>()
const numShow = ref(20)

const sorted_articles = computed(() => {
  return articles.value?.sort((a, b) => b.epoch.valueOf() - a.epoch.valueOf()
  )
})

fetch('/data/' + props.fileData.fileName).then(response => {
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json()
}).then(data => {
  articles.value = data as ArticleDataList
}).catch(error => {
  console.log(error)
})

</script>


<style scoped>
.timeline {
  margin-right: 5pt;
  display: inline-block;
  vertical-align: top;
}

.tlItemList {
  height: 90vh;
  width: 25vw;
  background: #80AEF8;
  padding: 5pt;

  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.tlItemList::-webkit-scrollbar {
  display: none;
}

.tlFooter {
  width: 25vw;
  height: 5pt;
  background: #80AEF8;
}
</style>

