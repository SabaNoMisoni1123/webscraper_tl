<template>
  <v-card class="timeline m-0 p-0">
    <v-toolbar class="timelineBar">
      <v-toolbar-title>{{ tlTitle }}</v-toolbar-title>
    </v-toolbar>

    <v-infinite-scroll mode="manual" @load="loadMore" side="end" class="scrollArea">
      <template v-for="art in showArticles" :key="art.url">
        <div class="art">
          <ArticleItem :article-source="art.org" :article-desctiption="art.title" :article-url="art.url"
            :article-epoch="art.epoch">
          </ArticleItem>
        </div>
      </template>
    </v-infinite-scroll>
  </v-card>

</template>

<script setup lang="ts">
import ArticleItem from '@/components/molecules/ArticleItem.vue'
import ColorPallet from '@/assets/ColorPallet.json'
import { computed, ref } from 'vue'
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
const articles = ref([] as Array<ArticleData>);
wsData.loadTlData(props.tlSiteId, dbData.dbTimestamp).then((data) => {
  articles.value = data;
});

const tlTitle = computed(() => {
  if (props.tlTitle == "") {
    return site.value.name;
  } else {
    return props.tlTitle;
  }
})

// 追加読み込み
async function loadMore({ side, done }: { side: 'end' | 'start' | 'both', done: (status: 'error' | 'loading' | 'empty' | 'ok') => void }) {
  console.log("call loadMore function (Timeline.vue)");
  const newData = await wsData.loadNextTlData(props.tlSiteId);
  articles.value.push(...newData);
  done('ok');
}

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
  ret = articles.value;

  // 必要なフィルタがあれば

  return ret;
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
  width: max(200pt, 20vw);
  min-width: 200pt;
  white-space: normal;
  display: flex;
  flex-direction: column;

  height: 100%;
}
.scrollArea {
  flex-grow: 1;
  overflow-y: auto;
}
</style>
