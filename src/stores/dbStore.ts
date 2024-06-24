import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { collection, getDocs, query, orderBy, doc, getDoc, updateDoc } from 'firebase/firestore'

// APIから得るサイトデータ
export interface DbSiteData {
  "name": string,
  "url": string,
  "id": string,
  "no": number,
}

// サイトデータ
export interface SiteData {
  "name": string,
  "url": string,
  "weight": number,
  "color": number,
  "isShow": boolean,
  "valid": boolean,
  "id": string,
  "no": number,
}

// ストアで管理するデータその①
// スクレイプ先のウェブサイト情報
// このストアのメインのコンテンツ
export interface SiteDataDict {
  [index: string]: SiteData
}

// サイト並び替えプリセットのデータ型
export interface SiteOrder {
  "name": string,
  "order": Array<{
    "id": string,
    "weight": number,
  }>
}

export const useDbDataStore = defineStore('dbDataStore', () => {
  // スクレイプ先のウェブサイト情報
  const siteData = ref<SiteDataDict>({} as SiteDataDict);
  const defaultSiteData = ref<SiteData>({
    "name": "default",
    "url": "noUrl",
    "weight": -1,
    "color": 3,
    "isShow": false,
    "valid": true,
    "id": "noId",
    "no": -1,
  });
  const isLoadingSiteData = ref(false);

  // アクセス番号（アクセスした人数）
  const noAccess = ref(-1);

  // データベースの更新時刻
  const dbTimestamp = ref(-1);

  // siteDataをアップデートする関数
  const updateSiteData = async () => {
    // サイト情報の読み込みステータス
    isLoadingSiteData.value = true;
    console.log("Call updateSiteData function");

    // すべてのウェブサイト情報を一度invalitにセットする
    setValidationSiteData(false);

    // データベースにアクセスして最新のサイト情報を取得
    try {
      const q = query(collection(db, 'siteData'), orderBy('no'));
      const docsSiteData = await getDocs(q);
      console.log("Fetching documents: updateSiteData function");

      // 取得したドキュメントのリストから1つずつサイト情報を取得
      docsSiteData.forEach((doc) => {
        // データベースから取得されるサイト情報
        const site = doc.data() as DbSiteData;

        // すでに記録されいてる場合は情報の更新
        // 記録されていない場合は新規追加
        if (site.id in siteData.value) {
          // 情報更新
          siteData.value[site.id].valid = true;
          siteData.value[site.id].name = site.name;
          siteData.value[site.id].url = site.url;
        } else {
          // 新規追加
          siteData.value[site.id] = {
            "name": site.name,
            "url": site.url,
            "weight": Object.keys(siteData.value).length,
            "color": 0,
            "isShow": true,
            "valid": true,
            "id": site.id,
            "no": site.no,
          } as SiteData;
        }
      })
    } catch (error) {
      console.error("Error fetching documents: ", error);
      // 失敗した場合は、サイト情報をすべてvalidしておく。
      setValidationSiteData(true);
    }

    // invalidなサイト情報はすべて削除する。
    rmInvalidSiteData();

    // サイト情報の読み込みステータス
    isLoadingSiteData.value = false;
  };

  // ウェブサイト情報のvalidationを設定する関数
  function setValidationSiteData(set_bool: boolean) {
    for (const k of Object.keys(siteData.value)) {
      siteData.value[k].valid = set_bool;
    }
  }

  // invalidなウェブサイト情報を削除する関数
  function rmInvalidSiteData() {
    // 削除
    for (const [k, v] of Object.entries(siteData.value)) {
      if (!v.valid) {
        delete siteData.value[k];
      }
    }
    // 重みの振り直し
    reweighSiteData();
  }

  // siteDataをリセットする関数
  const resetSiteData = async () => {
    // サイト情報の読み込みステータス
    isLoadingSiteData.value = true;

    // 既存のサイト情報を一度削除
    let newSiteData = {} as SiteDataDict;

    console.log("Call resetSiteData function");
    // データベースにアクセスして最新のサイト情報を取得
    try {
      const q = query(collection(db, 'siteData'), orderBy('no'));
      const docsSiteData = await getDocs(q);
      console.log("Fetching documents: resetSiteData function");

      // 取得したドキュメントのリストから1つずつサイト情報を取得
      docsSiteData.forEach((doc) => {
        // データベースから取得されるサイト情報
        const site = doc.data() as DbSiteData;

        // 新規追加
        siteData.value[site.id] = {
          "name": site.name,
          "url": site.url,
          "weight": Object.keys(siteData.value).length,
          "color": 0,
          "isShow": true,
          "valid": true,
          "id": site.id,
          "no": site.no,
        } as SiteData;

      })

      // データベースにアクセスできた場合のみリセット
      siteData.value = newSiteData;
    } catch (error) {
      console.error("Error fetching documents: ", error);
      console.log("データベースにアクセスできなかったため、サイト情報を更新できませんでした。");
    }
  };

  // siteDataの整列順を変更する関数
  function setOrderSiteDataPreset(weightPreset: SiteOrder) {
    if (weightPreset.name == "default") {
      // デフォルトは、サイト番号を参照して、その順番で整列
      for (const k of Object.keys(siteData.value)) {
        siteData.value[k].weight = siteData.value[k].no;
      }
    } else {
      // 他の場合は、jsonファイルにプリセットを用意し、その順番で整列
      for (const v of Object.values(siteData.value)) {
        v.weight = v.weight + weightPreset.order.length + 10;
      }
      for (const item of weightPreset.order) {
        siteData.value[item.id].weight = item.weight;
      }
      reweighSiteData();
    }
  }

  // siteDataのidをweight順で表示
  const getSortedSiteDataId = computed(() => {
    let sortedIds = [] as Array<{ "id": string, "weight": number }>;
    for (const [k, v] of Object.entries(siteData.value)) {
      sortedIds.push({ "id": k, "weight": v.weight });
    }

    sortedIds.sort((a, b) => a.weight - b.weight);

    return sortedIds.map((a) => a.id);
  })

  // siteDataのidのうち、isShowがtrueのものをweight順で表示
  const getSortedSiteDataIdFiltered = computed(() => {
    let sortedIds = [] as Array<{ "id": string, "weight": number }>;
    for (const [k, v] of Object.entries(siteData.value)) {
      if (v.isShow) {
        sortedIds.push({ "id": k, "weight": v.weight });
      }
    }

    sortedIds.sort((a, b) => a.weight - b.weight);

    return sortedIds.map((a) => a.id);
  })

  // あるsiteIdのweightを小さくする
  // 小さくするが順番は上位になるので、"up"と表現
  function upWeight(siteId: string) {
    siteData.value[siteId].weight -= 1.5;
    reweighSiteData();
  }

  // あるsiteIdのweightを大きくする
  // 大きくするが順番は下位になるので、"down"と表現
  function downWeight(siteId: string) {
    siteData.value[siteId].weight += 1.5;
    reweighSiteData();
  }

  // 重みの再振り分け
  // weightを連番に再設定
  function reweighSiteData() {
    let sortedWeight = [] as Array<{ "id": string, "weight": number }>
    for (const [k, v] of Object.entries(siteData.value)) {
      sortedWeight.push({ "id": k, "weight": v.weight });
    }
    sortedWeight.sort((a, b) => a.weight - b.weight);
    for (let i = 0; i < sortedWeight.length; i++) {
      siteData.value[sortedWeight[i].id].weight = i;
    }
  }

  // siteId毎のセッター
  // 色
  function setSiteDataColor(id: string, newColor: number) {
    siteData.value[id].color = newColor;
  }
  // 重み
  function setSiteDataWeight(id: string, newWeight: number) {
    siteData.value[id].weight = newWeight;
  }

  // データベースのタイムスタンプを取得
  const loadDbAccessData = async () => {
    console.log("Call _loadDbAccessData function");
    let newTimestamp = false;
    try {
      // データのロード
      const docRef = doc(db, 'timeLog', 'lastTime');
      const docSnap = await getDoc(docRef);
      const data = docSnap.data() as { "lastTimeEpoch": number, "noAccess": number };

      newTimestamp = dbTimestamp.value != data.lastTimeEpoch;

      noAccess.value = data.noAccess + 1;
      dbTimestamp.value = data.lastTimeEpoch;

      // アクセス数のアップロード
      await updateDoc(docRef, { "noAccess": noAccess.value });

    } catch (error) {
      console.log("Error getting document: ", error);
    }

    return newTimestamp;
  }

  // 起動時の関数
  const init = async () => {
    console.log("Call init function");
    const newTimestamp = await loadDbAccessData();
    if (newTimestamp) {
      console.log("Database updated");
    }
    console.log("Done init function");
    return 0;
  }

  return {
    siteData,
    defaultSiteData,
    noAccess,
    dbTimestamp,
    isLoadingSiteData,
    updateSiteData,
    resetSiteData,
    setOrderSiteDataPreset,
    getSortedSiteDataId,
    getSortedSiteDataIdFiltered,
    upWeight,
    downWeight,
    setSiteDataColor,
    setSiteDataWeight,
    init,
  }
}, { persist: true });
