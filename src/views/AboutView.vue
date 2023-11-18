<template>
  <div class="about">
    <ArticleItem />
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

import { ref } from 'vue'
import ArticleItem from '@/components/molecules/ArticleItem.vue'




</script>
