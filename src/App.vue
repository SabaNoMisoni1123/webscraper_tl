<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="headerClass">
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <div class="appView">
    <RouterView />
  </div>
</template>

<style scoped>
.headerClass {
  display: block;
  margin: 0pt;
}

.appView {
  display: block;
}
</style>
