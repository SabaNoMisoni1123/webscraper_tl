<template>
  <div class="sample">
    <Timeline tl-site-id="micJoho" />
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
