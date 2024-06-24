<script setup lang="ts">
import { computed } from 'vue';
import AppConfig from '@/assets/AppConfig.json';
import { RouterLink, RouterView } from 'vue-router';
import { useDbDataStore } from '@/stores/dbStore'

import IconCrowler from '@/components/icons/IconCrowler.vue'
import IconCracker from '@/components/icons/IconCracker.vue'
import ColorPallet from '@/assets/ColorPallet.json'

const dbData = useDbDataStore();

const isFunny = computed(() => {
  return dbData.noAccess % 100 == 0;
})

</script>

<template>
  <header class="headerClass">
    <nav class="headerNav">
      <RouterLink to="/">HOME</RouterLink>
      <RouterLink to="/about">ABOUT</RouterLink>
      <RouterLink to="/contact">CONTACT</RouterLink>
    </nav>
    <div class="headerNoVistor">
      <p>閲覧者数: {{ dbData.noAccess }}</p>
      <div class="celebrate" v-if="isFunny">
        <IconCracker :fill="ColorPallet.red0" />
      </div>
    </div>
    <div class="headerIconTitle">
      <IconCrowler height=100% :fill="ColorPallet.green0" />
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

.headerClass p {
  color: #003f27;
}

.headerNav {
  display: inline-block;
}

.headerNav a {
  margin-left: 10pt;
  padding-left: 2pt;
  padding-right: 2pt;
}

.headerNoVistor {
  margin-left: auto;
}

.headerNoVistor p {
  font-size: 70%;
  display: inline-block;
  vertical-align: sub;
}

.headerIconTitle {
  display: flex;
  margin-left: auto;
  height: 100%;
}

.headerIconTitle p {
  margin-left: 10pt;
  margin-right: 20pt;
  margin-top: auto;
  margin-bottom: auto;
  display: inline-block;
  height: 100%;
}

.appView {
  background: #E6E6E6;
  width: 95vw;
}
</style>
