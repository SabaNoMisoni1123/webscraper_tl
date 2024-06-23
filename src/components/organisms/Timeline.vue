<template>
  <div class="timeline" :style="styles">
    <TLTitleBar :tl-title="tlTitle" :style="styles" />
    <div class="tlItemList">
      <p class="loadingMsg" v-if="wsData.tlData[props.tlSiteId].loadingStatus">--読み込み中--<br>読み込みが終わらない場合はリログしてください。</p>
      <ArticleItem v-for="item in showArticles" :article-source="item!.org" :article-description="item!.title"
        :article-url="item!.url" :article-epoch="item!.epoch" :tl-title="site.name" :show-bar="props.showBar" />
      <div class="loadNext">
        <input type="button" :value="loadNextText" @click="loadMore">
      </div>
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

import { useWsDataStore, type ArticleData } from '@/stores/wsStore';
import { useDbDataStore } from '@/stores/dbStore';

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
const dbData = useDbDataStore();
const wsData = useWsDataStore();

// siteData
const site = computed(() => {
  if (props.tlSiteId in dbData.siteData) {
    return dbData.siteData[props.tlSiteId];
  } else {
    return dbData.defaultSiteData;
  }
})

// tlData
// wsData.loadTlData(props.tlSiteId, dbData.dbTimestamp);

const tlTitle = computed(() => {
  if (props.tlTitle == "") {
    return site.value.name;
  } else {
    return props.tlTitle;
  }
})

// 追加読み込み
function loadMore() {
  wsData.loadNextTlData(props.tlSiteId);
}
const loadNextText = computed(() => {
  if (wsData.tlData[props.tlSiteId].loadingStatus) {
    return "読み込み中";
  } else {
    return "さらに読み込み";
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
  let articles = [] as Array<ArticleData>;
  if (props.tlSiteId == "all") {
    for (const k in dbData.getSortedSiteDataIdFiltered) {
      articles = [...articles, ...wsData.tlData[k]["scrapedData"]]
    }
  } else {
    articles = wsData.tlData[props.tlSiteId].scrapedData;
  }

  // エポック時でフィルタ
  if (articles.length > 0) {
    articles = articles.filter((e) => {
      return e.epoch >= props.lastEpoch;
    })
  }

  return articles;
})

const styles = computed(() => {
  return {
    "--tl-background-color": bgList[site.value.color % bgList.length]
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

.loadNext p {
  margin-left: auto;
  margin-right: auto;
}

.noDataState {
  color: white;
  padding: 2pt 15pt;
  margin: 0pt;
  text-align: left;
  font-weight: bold;
}
</style>
