import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

import ApiUrl from '@/assets/ApiUrl.json'

export interface ArticleData {
  "title": string,
  "url": string,
  "org": string,
  "epoch": number
}

export interface ScrapedData {
  [index: string]: Array<ArticleData>
}

export interface LoadingStatusData {
  [index: string]: boolean
}


export const useWsScrapedDataStore = defineStore('wsScrapedData', () => {
  const scrapedData = ref<ScrapedData>({} as ScrapedData);
  const loadingStatus = ref<LoadingStatusData>({} as LoadingStatusData)

  function scrape(siteId: string) {
    loadingStatus.value[siteId] = true
    axios.get(ApiUrl.apiUrl + "/data", { params: { id: siteId } }).then((response) => {
      scrapedData.value[siteId] = response.data.data;
      console.log(siteId);
      console.log(response.data.msg);
      loadingStatus.value[siteId] = false
    });
  }

  const searchedData = computed((w: string) => {
    let sd = [] as Array<ArticleData>
    for (const data of Object.values(scrapedData.value)) {
      sd = [...sd, ...data.filter((article) => article.title.indexOf(w) >= 0)];
    }
    sd.sort((a, b) => b.epoch - a.epoch);
    return sd
  })

  return { scrapedData, loadingStatus, searchedData, scrape }
}, { persist: true });
