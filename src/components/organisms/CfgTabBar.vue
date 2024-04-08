<template>
  <div class="cfgTabBar" :style="styles">
    <div class="searchArea">
      <SearchButton :width="50" :height="50" :fill="colSearch" @click="toggleSearch" />
    </div>
    <div class="menuArea">
      <MenuButton :width="50" :height="50" :fill="colMenu" @click="toggleMenu" />
      <div class="tlList" v-if="appState.useMenu">
        <TlTitleBlock v-for="id in tlData.sortedIds" :tl-site-id="id" />
        <input type="button" value="reset" @click="tlDataReset">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import SearchButton from '@/components/atoms/button/SearchButton.vue'
import MenuButton from '@/components/atoms/button/MenuButton.vue'
import TlTitleBlock from '@/components/molecules/TlTitleBlock.vue'
import ColorPallet from '@/assets/ColorPallet.json'

import { useAppState } from '@/stores/appState'
import { useTlDataListStore } from '@/stores/tlData'

const appState = useAppState();
const tlData = useTlDataListStore()

const colSearch = ref(appState.useSearch ? ColorPallet.green1 : ColorPallet.gray2);
const colMenu = ref(appState.useMenu ? ColorPallet.green1 : ColorPallet.gray2);

function toggleSearch() {
  appState.useSearch = !appState.useSearch;
  colSearch.value = appState.useSearch ? ColorPallet.green1 : ColorPallet.gray2;
}

function toggleMenu() {
  appState.useMenu = !appState.useMenu;
  colMenu.value = appState.useMenu ? ColorPallet.green1 : ColorPallet.gray2;
  if (tlData.invalidSiteList) {
    tlData.resetApiSiteList();
  }
}

function tlDataReset() {
  if (window.confirm("データをリセットしますか？")) {
    tlData.resetApiSiteList();
  }
}

const styles = computed(() => {
  return {
    '--width': appState.useMenu ? "250px" : "60px",
  }
})
</script>

<style scoped>
.cfgTabBar {
  padding-top: 5pt;
  width: var(--width);
  height: 100%;
  display: inline-block;
  text-align: left;
}

.cfgTabBar SearchButton {
  display: block;
}

.cfgTabBar MenuButton {
  display: block;
}

.searchArea {
  width: auto;
  height: auto;
}

.menuArea {
  width: auto;
  height: auto;
}

.menuArea .tlList {
  margin-top: 10pt;
}

.tlList TlTitleBlock {
  margin-top: 10pt;
}
</style>
