<template>
  <div class="wsapp">
    <Timeline v-for="id in sites.idList" :site-id="id" :tl-title="sites.siteList[id].name" />
  </div>
</template>

<script setup lang="ts">

import Timeline from '@/components/organisms/Timeline.vue'
import { useWsSiteListStore } from '@/stores/wsSiteList'

const sites = useWsSiteListStore();


</script>

<style scoped>
.wsapp {
  width: 90vw;
  height: auto;
  padding-top: 5pt;
  padding-left: 10pt;
  padding-right: 10pt;
}
</style>
