import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

import ApiUrl from '@/assets/ApiUrl.json'
import { db } from '@/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

// APIから得るサイトデータ
export interface SiteData {
  "name": string,
  "url": string,
  "id": string,
  "no": number,
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
  "valid": boolean,
}

export interface TlDataDict {
  [index: string]: TlData
}

// データロード
export const useTlDataListStore = defineStore('tlData', () => {
  const firebaseDb = db;

  const tlData = ref<TlDataDict>({} as TlDataDict);
  const defaultTlData = ref<TlData>({
    "name": "default",
    "url": "noUrl",
    "weight": -1,
    "color": 3,
    "isShow": false,
    "valid": true,
  })

  const apiSiteList = async () => {
    // すべてのデータをinvalidにする
    allInvalid();

    // データベースからサイトデータを取得
    try {
      const q = query(collection(db, 'siteData'), orderBy('no'));
      const docsSiteData = await getDocs(q);
      docsSiteData.forEach((doc) => {
        const site = doc.data() as SiteData;

        if (site.id in tlData.value) {
          tlData.value[site.id].valid = true;
          tlData.value[site.id].name = site.name;
          tlData.value[site.id].url = site.url;
        } else {
          tlData.value[site.id] = {
            "name": site.name,
            "url": site.url,
            "weight": Object.keys(tlData.value).length,
            "color": 0,
            "isShow": true,
            "valid": true,
          } as TlData
        }
      })

      // invalidなデータがあれば削除する必要がある
      
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  }

  function resetApiSiteList() {
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
  apiSiteList();

  const invalidSiteList = computed(() => {
    let weights = [] as Array<number>;
    for (const v of Object.values(tlData.value)) {
      weights.push(v.weight);
    }

    let weightsSet = new Set(weights);

    return weightsSet.size != weights.length;
  })

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

  function allInvalid() {
    for (const [k, v] of Object.entries(tlData.value)) {
      v.valid = false;
    }
  }

  function rmInvalid() {
    for (const [k, v] of Object.entries(tlData.value)) {
      if (!v.valid) {
        delete tlData.value[k];
      }
    }
  }

  return { tlData, defaultTlData, sortedIds, sortedIdsFiltered, apiSiteList, setColor, setWeight, upWeight, downWeight, resetApiSiteList, invalidSiteList }
}, { persist: true })
