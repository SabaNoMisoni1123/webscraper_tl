<template>
  <div class="sample">
    <p>{{ tlDataStore.tlData["micJoho"] }}</p>
    <p>{{ wsScrapedData.allLoadingStatus }}</p>
    <p>{{ wsScrapedData.loadingStatus }}</p>
  </div>
</template>

<script setup lang="ts">
import Timeline from '@/components/organisms/Timeline.vue'

import { useTlDataListStore } from '@/stores/tlData'
import { useWsScrapedDataStore } from '@/stores/wsScrapedData'

const tlDataStore = useTlDataListStore();
const wsScrapedData = useWsScrapedDataStore();

</script>

<style scoped>
.sample {
  width: auto;
  height: 90vh;
}
</style>
