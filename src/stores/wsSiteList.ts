import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export interface SiteData {
  "name": string,
  "url": string,
}

export interface SiteDataList {
  [index: string]: SiteData
}

export const useWsSiteListStore = defineStore('wsSiteList', () => {
  const siteList = ref<SiteDataList>({} as SiteDataList);

  function getSiteList() {
    axios.get('/api/siteList').then((response) => {
      siteList.value = response.data.data as SiteDataList;
      console.log("Site List");
      console.log(response.data.data);
    })
  }
  getSiteList();

  const idList = computed(() => Object.keys(siteList.value))

  return { siteList, getSiteList, idList }
}, { persist: true })
