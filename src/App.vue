<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="headerClass">
    <nav>
      <RouterLink to="/">HOME</RouterLink>
      <RouterLink to="/about">ABOUT</RouterLink>
    </nav>
    <img src="/icon.svg" type="image/svg+xml" alt="icon">
    <p>MagnumCrawler v0.1</p>
  </header>

  <div class="appView">
    <RouterView />
  </div>
</template>

<style scoped>
.headerClass {
  margin: 0pt;
  font-size: 20pt;
  background: #939292;
  display: flex;
  width: 95vw;
}

.headerClass img {
  height: 2ex;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: 20pt;

}

.headerClass a {
  margin-left: 10pt;
  padding: 2pt;
}

.headerClass p {
  color: #003f27;
  margin-left: 0pt;
  margin-right: 20pt;
  margin-top: 0;
  margin-bottom: 0;
}

.appView {
  background: #E6E6E6;
  width: 95vw;
}
</style>
