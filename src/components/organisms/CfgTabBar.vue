<template>
  <div class="cfgTabBar" :style="styles">

    <div class="searchArea">
      <SearchButton :width="50" :height="50" :fill="colSearch" @click="toggleSearch" />
      <div class="serchCfgArea" v-show="appState.useSearch">
        <label for="noWindow">窓数</label>
        <select name="noWindow" v-model="noWindow" @change="changeNoSearchWindow">
          <option v-for="n in 3" :value="n">{{ n }}</option>
        </select>
      </div>
    </div>

    <div class="newsArea">
      <NewsButton :width="50" :height="50" :fill="colNews" @click="toggleNews" />
    </div>

    <div class="menuArea">
      <MenuButton :width="50" :height="50" :fill="colMenu" @click="toggleMenu" />
      <div class="tlList" v-show="appState.useMenu">
        <TlTitleBlock v-for="id in tlData.sortedIds" :tl-site-id="id" />
        <input type="button" value="reset" @click="tlDataReset">
      </div>
    </div>

    <div class="reloadArea">
      <ReloadButton :width="50" :height="50" :fill="colReload" @click="reloadWsData" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import SearchButton from '@/components/atoms/button/SearchButton.vue'
import MenuButton from '@/components/atoms/button/MenuButton.vue'
import NewsButton from '@/components/atoms/button/NewsButton.vue'
import ReloadButton from '@/components/atoms/button/ReloadButton.vue'

import TlTitleBlock from '@/components/molecules/TlTitleBlock.vue'
import ColorPallet from '@/assets/ColorPallet.json'

import { useAppState } from '@/stores/appState'
import { useTlDataListStore } from '@/stores/tlData'
import { useSearchCondtionStore } from '@/stores/searchCondition'
import { useWsScrapedDataStore } from '@/stores/wsScrapedData'

const appState = useAppState();
const tlData = useTlDataListStore();
const sc = useSearchCondtionStore();
const wsData = useWsScrapedDataStore();

const colSearch = computed(() => {
  return appState.useSearch ? ColorPallet.green1 : ColorPallet.gray2;
})
const colMenu = computed(() => {
  return appState.useMenu ? ColorPallet.green1 : ColorPallet.gray2;
})
const colNews = computed(() => {
  return appState.useNews ? ColorPallet.green1 : ColorPallet.gray2;
})
const colReload = computed(() => {
  return wsData.allLoadingStatus ? ColorPallet.green1 : ColorPallet.gray2;
})

const noWindow = ref(0);
noWindow.value = sc.size;

function toggleSearch() {
  appState.useSearch = !appState.useSearch;
}

function changeNoSearchWindow() {
  if (noWindow.value > sc.size) {
    const times = noWindow.value - sc.size;
    for (let i = 0; i < times; i++) {
      sc.pushCondition();
    }
  } else if (noWindow.value < sc.size) {
    const times = sc.size - noWindow.value;
    for (let i = 0; i < times; i++) {
      sc.popCondition();
    }
  }
}

function toggleNews() {
  appState.useNews = !appState.useNews;
}

function toggleMenu() {
  appState.useMenu = !appState.useMenu;
  if (tlData.invalidSiteList) {
    tlData.resetSiteList();
  }
}

function tlDataReset() {
  if (window.confirm("データをリセットしますか？")) {
    tlData.resetSiteList();
    wsData.rmNoId(tlData.sortedIds);
  }
}

function reloadWsData() {
  for (const [k, v] of Object.entries(tlData.tlData)) {
    if (v.isShow) {
      console.log("reload: ", k);
      wsData.loadDatabase(k, true);
    }
  }
}

const styles = computed(() => {
  return {
    '--width': appState.useMenu ? "280px" : "60px",
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

.tlList {
  height: 200pt;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: thin;
}

.tlList TlTitleBlock {
  margin-top: 10pt;
}
</style>
