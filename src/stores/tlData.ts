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
export interface TlData {
  "name": string,
  "url": string,
  "weight": number,
  "color": number,
  "isShow": boolean,
}

export interface TlDataDict {
  [index: string]: TlData
}

// データロード
export const useTlDataListStore = defineStore('tlData', () => {
  const tlData = ref<TlDataDict>({} as TlDataDict)

  function apiSiteList() {
    // キーの有無で処理を変えたい
    // API接続
    axios.get(ApiUrl.apiUrl + '/siteList').then((response) => {
      const dlSiteData = response.data.data as SiteDataDict;
      console.log("Site List");

      // APIで取得されたデータで処理
      for (const [key, value] of Object.entries(dlSiteData)) {
        console.log(key, value);
        if (key in tlData.value) {
          // キーが存在する場合は情報の更新
          tlData.value[key].name = value.name;
          tlData.value[key].url = value.url;

          // isShowがない場合
          if (!("isShow" in tlData.value[key])) {
            tlData.value[key].isShow = true;
          }
        } else {
          tlData.value[key] = {
            "name": value.name,
            "url": value.url,
            "weight": Object.keys(tlData.value).length,
            "color": 0,
            "isShow": true,
          } as TlData
        }

      }
    })
  }
  apiSiteList();

  const sortedIds = computed(() => {
    let sk = [] as Array<{ "id": string, "weight": number }>

    for (const [k, v] of Object.entries(tlData.value)) {
      sk.push({
        "id": k,
        "weight": v.weight
      })
    }
    sk.sort((a, b) => a.weight - b.weight)

    return sk.map((a) => a.id)
  })

  const sortedIdsFiltered = computed(() => {
    let sk = [] as Array<{ "id": string, "weight": number }>

    for (const [k, v] of Object.entries(tlData.value)) {
      if (v.isShow == false) {
        continue
      }
      sk.push({
        "id": k,
        "weight": v.weight
      })
    }
    sk.sort((a, b) => a.weight - b.weight)

    return sk.map((a) => a.id)
  })

  function setColor(id: string, newC: number) {
    tlData.value[id].color = newC
  }

  function setWeight(id: string, newW: number) {
    tlData.value[id].weight = newW
  }

  function upWeight(id: string) {
    const currentWeight = tlData.value[id].weight;
    if (currentWeight > 0) {
      const targetWeight = currentWeight - 1;
      const targetId = Object.keys(tlData.value).find(key => tlData.value[key].weight == targetWeight) as string;
      console.log("upWeight");
      console.log(currentWeight, id);
      console.log(targetWeight, targetId);
      tlData.value[id].weight = targetWeight;
      tlData.value[targetId].weight = currentWeight;
    }
  }

  function downWeight(id: string) {
    const currentWeight = tlData.value[id].weight;
    if (currentWeight < Object.keys(tlData.value).length - 1) {
      const targetWeight = currentWeight + 1;
      const targetId = Object.keys(tlData.value).find(key => tlData.value[key].weight == targetWeight) as string;
      tlData.value[id].weight = targetWeight;
      tlData.value[targetId].weight = currentWeight;
    }
  }

  function resetTlData() {
    // タイムライン設定の初期化
    tlData.value = {} as TlDataDict;

    // API接続
    axios.get(ApiUrl.apiUrl + '/siteList').then((response) => {
      const dlSiteData = response.data.data as SiteDataDict;
      console.log("Site List");

      // APIで取得されたデータで処理
      for (const [key, value] of Object.entries(dlSiteData)) {
        console.log(key, value);
        tlData.value[key] = {
          "name": value.name,
          "url": value.url,
          "weight": Object.keys(tlData.value).length,
          "color": 0,
          "isShow": true,
        } as TlData
      }
    })

  }

  return { tlData, sortedIds, sortedIdsFiltered, apiSiteList, setColor, setWeight, upWeight, downWeight, resetTlData }
}, { persist: true })
