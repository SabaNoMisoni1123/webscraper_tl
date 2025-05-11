<template>
  <v-container class="wsView m-0 p-0">
    <Timeline v-for="id in dbData.getSortedSiteDataIdFiltered" :tl-site-id="id" />
  </v-container>
</template>

<script setup lang="ts">
import Timeline from '@/components/organisms/Timeline.vue'

import { useDbDataStore } from '@/stores/dbStore'
import { useWsDataStore } from '@/stores/wsStore'
import { useAppState } from '@/stores/appState'
import { useSearchCondtionStore } from '@/stores/searchCondition'

// 各種ストア
const appState = useAppState();
const searchCond = useSearchCondtionStore();
const dbData = useDbDataStore();
const wsData = useWsDataStore();


</script>

<style scoped>
.wsView {
  border: red solid 1pt;
  padding: 0;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  height: 85vh;
}
</style>
