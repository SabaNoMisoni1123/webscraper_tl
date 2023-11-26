<template>
  <div class="sample">

    <Timeline v-for="file in wsFileData.fileList" :file-data="file" />

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: block;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import { useWsFileListStore } from '@/stores/wsFileList'
import Timeline from '@/components/organisms/Timeline.vue'

const wsFileData = useWsFileListStore()

</script>
