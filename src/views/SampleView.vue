<template>
  <div class="sample">

    <Timeline site-id="micJoho" tl-title="hoge" />

  </div>
</template>

<script setup lang="ts">

import Timeline from '@/components/organisms/Timeline.vue'
import { useTlDataListStore } from '@/stores/tlData'

const tlData = useTlDataListStore()
console.log("sample=============")
console.log(tlData.tlDataList)
console.log("sample=============")


</script>

<style scoped>
.sample {
  width: auto;
}
</style>
