<template>
  <div class="sample">
    {{ tlDataStore.sortedIdsFiltered }}

    <Timeline v-for="id in tlDataStore.sortedIdsFiltered" :tl-site-id="id as string" />
  </div>
</template>

<script setup lang="ts">
import Timeline from '@/components/organisms/Timeline.vue'

import { useTlDataListStore } from '@/stores/tlData'

const tlDataStore = useTlDataListStore()

</script>

<style scoped>
.sample {
  width: auto;
  height: 90vh;
}
</style>
