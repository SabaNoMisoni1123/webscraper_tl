<script setup lang="ts">
import AppConfig from '@/assets/AppConfig.json';
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header class="headerClass">
    <nav class="headerNav">
      <RouterLink to="/">HOME</RouterLink>
      <RouterLink to="/about">ABOUT</RouterLink>
      <RouterLink to="/contact">CONTACT</RouterLink>
    </nav>
    <div class="headerIconTitle">
      <img src="/icon.svg" type="image/svg+xml" alt="icon">
      <p>{{ AppConfig.appName }} v{{ AppConfig.version }}</p>
    </div>
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
  width: 95vw;
  display: flex;
  height: 33pt;
}

.headerNav {
  display: inline-block;
}

.headerNav a {
  margin-left: 10pt;
  padding-left: 2pt;
  padding-right: 2pt;
}

.headerIconTitle {
  display: inline-block;
  margin-left: auto;
}

.headerIconTitle img {
  height: 2ex;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: 20pt;
  display: inline-block;
}

.headerIconTitle p {
  color: #003f27;
  margin-left: 0pt;
  margin-right: 20pt;
  margin-top: 0;
  margin-bottom: 0;
  display: inline-block;
}

.appView {
  background: #E6E6E6;
  width: 95vw;
}
</style>
