<template>
  <div class="about">
    <p>{{ fuga.sampleData?.list[0].num }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import { useSampleStore } from '@/stores/sample'

const fuga = useSampleStore()


</script>
