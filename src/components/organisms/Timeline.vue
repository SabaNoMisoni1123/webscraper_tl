<template>
  <div class="timeline">
    <TLTitleBar tl-title="Time line" />
    <div class="tlItemList">
      <ArticleItem v-for="id in articleIdList" :key="id.valueOf" />
    </div>
    <div class="tlFooter">
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import TLTitleBar from '@/components/atoms/bar/TLTitleBar.vue'
import ArticleItem from '@/components/molecules/ArticleItem.vue'

const articleIdList = ref([
  "a",
  "b",
  "c",
  "d",
  "e",
])

</script>


<style scoped>
.timeline {
  margin-right: 5pt;
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

