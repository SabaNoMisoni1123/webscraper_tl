import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

import ApiUrl from '@/assets/ApiUrl.json'

// APIから得るサイトデータ
export interface SiteData {
  "name": string,
  "url": string,
}

// サイトデータ一覧は辞書型
export interface SiteDataDict {
  [index: string]: SiteData
}

// タイムライン全体のデータ（配列）
export interface tlData {
  "id": string,
  "name": string,
  "url": string,
  "weight": number,
  "color": number,
}

// データロード
export const useTlDataListStore = defineStore('wsSiteList', () => {
  const tlDataList = ref<Array<tlData>>([] as Array<tlData>)

  function getSiteList() {
    // キーの有無で処理を変えたい

    // API接続
    axios.get(ApiUrl.apiUrl + '/siteList').then((response) => {
      const siteDict = response.data.data as SiteDataDict;
      console.log("Site List");

      const existKeys = tlDataList.value.map((i) => { return i["id"] });

      // APIで取得されたデータで処理
      for (const [key, value] of Object.entries(siteDict)) {
        const idx = existKeys.indexOf(key);
        console.log(key, value, idx);
        if (idx < 0) {
          // キーが存在しない場合は追加
          tlDataList.value.push({
            "id": key,
            "name": value.name,
            "url": value.url,
            "weight": tlDataList.value.length,
            "color": 0,
          } as tlData)
        } else {
          // キーが存在する場合は情報の更新
          tlDataList.value[idx].name = value.name
          tlDataList.value[idx].url = value.url
        }
      }

    })
  }
  getSiteList();


  return { tlDataList, getSiteList }
}, { persist: true })
