<template>
  <div class="timeline" :style="styles">
    <TLTitleBar :tl-title="props.tlTitle" :styles="styles" />
    <div class="tlItemList">
      <ArticleItem v-for="item in wsData.scrapedData[props.siteId]" :article-source="item!.org"
        :article-description="item!.title" :article-url="item!.url" :article-epoch="item!.epoch"
        :tl-title="props.tlTitle" />
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

const props = defineProps({
  siteId: {
    type: String,
    required: true
  },
  tlTitle: {
    type: String,
    required: true
  },
  colorTheme: {
    type: Number,
    default: 0,
  }
})

const wsData = useWsScrapedDataStore();
wsData.scrape(props.siteId);

const styles = computed(() => {
  return {
    "--tl-background-color": ColorPallet.blue0
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
