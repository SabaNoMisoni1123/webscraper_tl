import { ref } from 'vue'
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

  return { scrapedData, loadingStatus, scrape }
}, { persist: true });
