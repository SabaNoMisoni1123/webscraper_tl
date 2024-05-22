<template>
  <div class="sample">
    {{ tlDataStore.tlData }}
  </div>
</template>

<script setup lang="ts">
import { useTlDataListStore } from '@/stores/tlData'

const tlDataStore = useTlDataListStore()

</script>

<style scoped>
.sample {
  width: auto;
  height: 90vh;
}
</style>
