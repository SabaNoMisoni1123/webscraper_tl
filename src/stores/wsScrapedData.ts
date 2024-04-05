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
  [index: string]: {
    "dataList": Array<ArticleData>
    "isLoading": boolean
  }
}

export const useWsScrapedDataStore = defineStore('wsScrapedData', () => {
  const scrapedData = ref<ScrapedData>({} as ScrapedData);

  function scrape(siteId: string) {
    scrapedData.value[siteId]["isLoading"] = true;
    axios.get(ApiUrl.apiUrl + "/data", { params: { id: siteId } }).then((response) => {
      scrapedData.value[siteId]["dataList"] = response.data.data;
      console.log(siteId);
      console.log(response.data.msg);
      scrapedData.value[siteId]["isLoading"] = false;
    });
  }

  return { scrapedData, scrape }
}, { persist: true });
