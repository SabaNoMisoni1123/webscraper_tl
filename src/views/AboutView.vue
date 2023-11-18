<template>
  <div class="about">
    <Timeline />
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
import Timeline from '@/components/organisms/Timeline.vue'

</script>
