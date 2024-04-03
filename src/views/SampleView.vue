<template>
  <div class="sample">

    <Timeline v-for="tld in tlData.tlDataList" :tl-cfg="tld" />

  </div>
</template>

<script setup lang="ts">

import Timeline from '@/components/organisms/Timeline.vue'
import { useTlDataListStore } from '@/stores/tlData'

const tlData = useTlDataListStore()

</script>

<style scoped>
.sample {
  width: auto;
}
</style>
