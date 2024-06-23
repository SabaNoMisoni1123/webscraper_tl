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
      <div class="menuItems" v-show="appState.useMenu">
        <div class="tlList">
          <TlTitleBlock v-for="id in dbData.getSortedSiteDataId" :tl-site-id="id" />
        </div>
        <p>並び替えプリセット</p>
        <input type="button" v-for="k of Object.keys(siteOrderPreset)" :value="siteOrderPreset[k].name"
          @click="sortTlPreset(siteOrderPreset[k])">
        <p>初期化</p>
        <input type="button" value="reset" @click="tlDataReset">
      </div>
    </div>

    <!-- <div class="reloadArea">
      <ReloadButton :width="50" :height="50" :fill="colReload" @click="reloadWsData" />
    </div> -->

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
import SiteDataWeightPreset from '@/assets/siteDataWeightPreset.json'

import { useAppState } from '@/stores/appState'
import { useDbDataStore, type SiteOrder } from '@/stores/dbStore'
import { useWsDataStore } from '@/stores/wsStore'
import { useSearchCondtionStore } from '@/stores/searchCondition'

const appState = useAppState();
const sc = useSearchCondtionStore();
const dbData = useDbDataStore();
const wsData = useWsDataStore();
const siteOrderPreset = SiteDataWeightPreset as {
  [index: string]: SiteOrder,
};

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
}

function sortTlPreset(so: SiteOrder) {
  dbData.setOrderSiteDataPreset(so);
}

function tlDataReset() {
  if (window.confirm("データをリセットしますか？")) {
    dbData.resetSiteData();
  }
}

const styles = computed(() => {
  return {
    '--width': appState.useMenu ? "280px" : "60px",
    '--textColor': ColorPallet.green0,
  }
})
</script>

<style scoped>
p {
  color: var(--textColor);
  margin-top: 3pt;
}

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
  height: 150pt;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: thin;
}

.tlList TlTitleBlock {
  margin-top: 10pt;
}
</style>
