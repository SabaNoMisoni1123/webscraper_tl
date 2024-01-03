import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Urls from '@/assets/urls.json'
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
    axios.get(Urls.webscAPI + "/siteList").then((response) => {
      siteList.value = response.data.data as SiteDataList;
    })
  }
  getSiteList();

  const idList = computed(() => Object.keys(siteList.value))

  return { siteList, getSiteList, idList }
}, { persist: true })
