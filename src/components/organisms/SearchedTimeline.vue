<template>
  <div class="timeline" :style="styles">
    <TLTitleBar :tl-title="searchTlTitle" :style="styles" :is-loading="false" />
    <SearchForm @search-text="newText" :style="styles" />

    <div class="tlItemList">
      <ArticleItem v-for="item in searchedArticles" :article-source="item!.org" :article-description="item!.title"
        :article-url="item!.url" :article-epoch="item!.epoch" :tl-title="item!.org" :show-bar="true" />
    </div>
    <div class="tlFooter">

    </div>
  </div>
</template>


<script setup lang="ts">
import TLTitleBar from '@/components/atoms/bar/TLTitleBar.vue';
import ArticleItem from '@/components/molecules/ArticleItemNoButton.vue';
import SearchForm from '@/components/molecules/SearchForm.vue'

import ColorPallet from '@/assets/ColorPallet.json'

import { ref, computed } from 'vue'
import { useWsScrapedDataStore, type ArticleData } from '@/stores/wsScrapedData';

// ウェブスクレイプデータ
const wsData = useWsScrapedDataStore();

// 検索ワード
const searchText = ref("")
const searchTlTitle = ref("検索");

// 検索
function newText(t: string) {
  searchText.value = t;
  searchTlTitle.value = "検索: " + t;
}

const searchedArticles = computed(() => {
  let sd = [] as Array<ArticleData>
  for (const data of Object.values(wsData.scrapedData)) {
    sd = [...sd, ...data.filter((article) => article.title.indexOf(searchText.value) >= 0)];
  }
  sd.sort((a, b) => b.epoch - a.epoch);
  return sd
})


const bgList = [
  ColorPallet.blue1,
  ColorPallet.red1,
  ColorPallet.yellow1,
  ColorPallet.green1,
  ColorPallet.gray1,
];

const styles = computed(() => {
  return {
    "--tl-background-color": bgList[3]
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
  height: calc(90% - 25pt);

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
