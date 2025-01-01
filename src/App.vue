<template>
  <v-app class="v-app">

    <v-app-bar app class="titleBar">
      <template v-slot:prepend>
        <v-app-bar-nav-icon :icon="IconCrowler" onclick @click.end="drawer = !drawer" />
      </template>
      <v-app-bar-title>{{ AppConfig.appName }} v{{ AppConfig.version }}</v-app-bar-title>

      <v-btn icon="mdi-chevron-double-left" @click.end="drawer = !drawer" />
    </v-app-bar>

    <v-main app class="p-0">
      <RouterView />
    </v-main>

    <v-footer app>
      <v-icon :icon="IconCrowler" class="mr-5"></v-icon>
      {{ AppConfig.appName }}
      <v-spacer />

      <template v-for="i in 5" v-if="isCelebrate">
        <v-icon icon="mdi-party-popper" />
      </template>
      <p>閲覧者数: {{ dbData.noAccess }}</p>
      <template v-for="i in 5">
        <v-icon icon="mdi-party-popper" v-if="isCelebrate" />
      </template>

      <v-spacer />
      (c) Sota Kondo
    </v-footer>

    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-list>
        <v-list-item @click.end="$router.push('/')">
          HOME
        </v-list-item>
        <v-list-item @click.end="$router.push('/about')">
          ABOUT
        </v-list-item>
        <v-list-item @click.end="$router.push('/contact')">
          CONTACT
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import AppConfig from '@/assets/AppConfig.json';
import { RouterView } from 'vue-router';
import { useDbDataStore } from '@/stores/dbStore'

import IconCrowler from '@/components/icons/IconCrowler.vue'

const dbData = useDbDataStore();

const drawer = ref(false);

const isCelebrate = computed(() => {
  return dbData.noAccess % 100 == 0;
})

</script>

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

.v-app {
  width: 98vw;
  background-color: pink;
}
</style>
