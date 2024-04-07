<template>
  <div class="cfgTabBar">
    <SearchButton :width="50" :height="50" :fill="colSearch" @click="toggleSearch" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import SearchButton from '@/components/atoms/button/SearchButton.vue'
import ColorPallet from '@/assets/ColorPallet.json'

import { useAppState } from '@/stores/appState'

const appState = useAppState();
const colSearch = ref(appState.useSearch ? ColorPallet.green1 : ColorPallet.gray2);

function toggleSearch() {
  if (appState.useSearch) {
    appState.useSearch = false;
    colSearch.value = ColorPallet.gray2;
  } else {
    appState.useSearch = true;
    colSearch.value = ColorPallet.green1;
  }
}

</script>

<style scoped>
.cfgTabBar {
  padding-top: 5pt;
  width: 60px;
  height: 100%;
  display: inline-block;
  text-align: center;
}
</style>
