import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { db } from '@/firebase'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'

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

export interface LoadingTimeData {
  [index: string]: number
}


export const useWsScrapedDataStore = defineStore('wsScrapedData', () => {
  const scrapedData = ref<ScrapedData>({} as ScrapedData);
  const loadingStatus = ref<LoadingStatusData>({} as LoadingStatusData);
  const lastLoadTime = ref<LoadingTimeData>({} as LoadingTimeData);

  const loadDatabase = async (siteId: string) => {
    // 最終ロード時間からロードするのかを判定
    if (!(siteId in lastLoadTime.value)) {
      lastLoadTime.value[siteId] = 0;
    }

    const nowTime = Math.floor(Date.now() / 1000);
    if (nowTime < lastLoadTime.value[siteId] + 3600 * 3) {
      return;
    }

    loadingStatus.value[siteId] = true
    try {
      const q = query(collection(db, siteId), orderBy("epoch", "desc"), limit(30));
      const docsArticleData = await getDocs(q);
      let newData = [] as Array<ArticleData>;

      docsArticleData.forEach((doc) => {
        newData.push(doc.data() as ArticleData);
      })
      scrapedData.value[siteId] = newData;
      loadingStatus.value[siteId] = false;
      lastLoadTime.value[siteId] = Math.floor(Date.now() / 1000);

      console.log("Load DB: ", siteId);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  }

  const allArticles = computed(() => {
    let ret = [] as Array<ArticleData>
    for (const data of Object.values(scrapedData.value)) {
      ret = [...ret, ...data];
    }
    return ret.sort((a, b) => b.epoch - a.epoch);
  })

  return { scrapedData, loadingStatus, lastLoadTime, loadDatabase, allArticles }
}, { persist: true });
