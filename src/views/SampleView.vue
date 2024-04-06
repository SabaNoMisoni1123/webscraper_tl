<template>
  <div class="sample">
    <SearchForm @search-text="newText" />

  </div>
</template>

<script setup lang="ts">
import SearchForm from '@/components/molecules/SearchForm.vue'

function newText(t: string) {
  alert("from sample: " + t);
}

</script>

<style scoped>
.sample {
  width: auto;
}
</style>
