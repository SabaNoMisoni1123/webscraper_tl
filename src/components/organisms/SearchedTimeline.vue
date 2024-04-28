<template>
  <div class="timeline" :style="styles">
    <TLTitleBar :tl-title="searchTlTitle" :style="styles" :is-loading="false" />
    <SearchForm :style="styles" :sc-idx="props.searchCondIdx" />

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
import { useWsScrapedDataStore } from '@/stores/wsScrapedData';
import { useSearchCondtionStore } from '@/stores/searchCondition'

const props = defineProps({
  searchCondIdx: {
    type: Number,
    default: 0,
  }
})

// 検索条件データ
const scStore = useSearchCondtionStore();

// ウェブスクレイプデータ
const wsData = useWsScrapedDataStore();

// タイムラインのタイトル文字列
const searchTlTitle = ref("検索: " + scStore.searchCondition[props.searchCondIdx].word);

// 検索
const searchedArticles = computed(() => {
  let sd = wsData.allArticles;
  const c = scStore.searchCondition[props.searchCondIdx];
  // 検索ワードのフィルタ
  sd = sd.filter(((article) => article.title.indexOf(c.word) >= 0));

  // 日付のフィルタ
  if (c.day != "-" && c.month != "-" && c.year != "-") {
    const epoch_s = new Date(c.year as number, c.month as number - 1, c.day as number).getTime() / 1000;
    const epoch_t = epoch_s + 60 * 60 * 24;
    sd = sd.filter((article) => (epoch_s <= article.epoch && article.epoch < epoch_t));
  }

  // 並び替え
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
  height: calc(90% - 40pt);

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
