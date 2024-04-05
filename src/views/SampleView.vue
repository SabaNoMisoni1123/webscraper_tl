<template>
  <div class="sample">

    <Timeline v-for="id in tlData.sortedIds" :tl-site-id="id" />

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
