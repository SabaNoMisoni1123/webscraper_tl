<template>
  <v-container class="wsConfig m-0 p-0" fluid>
    <v-row align="center" justify="center">
      <v-btn class="mt-1 mb-1" icon="mdi-magnify" :color="appState.useSearch ? 'success' : 'secondary'"
        @click="appState.useSearch = !appState.useSearch"></v-btn>
    </v-row>

    <v-row align="center" justify="center">
      <v-btn class="mt-1 mb-1" icon="mdi-new-box" :color="appState.useNews ? 'success' : 'secondary'"
        @click="appState.useNews = !appState.useNews"></v-btn>
    </v-row>

    <v-row align="center" justify="center">
      <v-btn class="mt-1 mb-1" icon="mdi-cog" :color="appState.useMenu ? 'success' : 'secondary'"
        @click="appState.useMenu = !appState.useMenu"></v-btn>
    </v-row>

  </v-container>
</template>

<script setup lang="ts">
import { useAppState } from '@/stores/appState'

const appState = useAppState();

</script>

<style scoped>
.wsConfig {
  border: red solid 1pt;
}
</style>
