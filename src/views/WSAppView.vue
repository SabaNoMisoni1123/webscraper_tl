<template>
  <div class="wsapp">
    <Timeline v-for="tld in tlData.tlDataList" :tl-cfg="tld" />
  </div>
</template>

<script setup lang="ts">

import Timeline from '@/components/organisms/Timeline.vue'
import { useTlDataListStore } from '@/stores/tlData'

const tlData = useTlDataListStore()

</script>

<style scoped>
.wsapp {
  width: auto;
  height: auto;
  padding-top: 5pt;
  padding-left: 10pt;
  padding-right: 10pt;

  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.wsapp Timeline {
  display: inline-block;
}
</style>
