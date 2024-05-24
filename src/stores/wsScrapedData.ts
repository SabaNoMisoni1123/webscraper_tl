import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import axios from 'axios'
import ApiUrl from '@/assets/ApiUrl.json'

import { db } from '@/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'


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

  const loadDatabase = async (siteId: string) => {
    loadingStatus.value[siteId] = true
    try {
      const q = query(collection(db, siteId), orderBy("epoch"));
      const docsArticleData = await getDocs(q);
      let newData = [] as Array<ArticleData>;

      docsArticleData.forEach((doc) => {
        newData.push(doc.data() as ArticleData);
      })
      scrapedData.value[siteId] = newData;
      loadingStatus.value[siteId] = false;
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  }

  function scrape(siteId: string) {

    axios.get(ApiUrl.apiUrl + "/data", { params: { id: siteId } }).then((response) => {
      scrapedData.value[siteId] = response.data.data;
      console.log(siteId);
      console.log(response.data.msg);
      loadingStatus.value[siteId] = false
    });

  }

  const allArticles = computed(() => {
    let ret = [] as Array<ArticleData>
    for (const data of Object.values(scrapedData.value)) {
      ret = [...ret, ...data];
    }
    return ret.sort((a, b) => b.epoch - a.epoch);
  })

  return { scrapedData, loadingStatus, scrape, loadDatabase, allArticles }
}, { persist: true });
