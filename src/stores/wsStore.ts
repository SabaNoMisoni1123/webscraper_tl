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

// ストアで管理するデータその②
// データベースから取得するウェブスクレイプの結果
// タイムラインコンポーネントとのみやり取りを想定
export interface TlData {
  [index: string]: {
    "scrapedData": Array<ArticleData>,
    "loadingStatus": boolean,
    "dataTimestamp": number,
  }
}

export const useWsDataStore = defineStore('wsDataStore', () => {
  // スクレイプの結果情報
  const tlData = ref<TlData>({} as TlData);

  // siteIdによる新規追加
  function newTlData(siteId: string) {
    if (!(siteId in Object.keys(tlData.value))) {
      tlData.value[siteId] = {
        "scrapedData": [] as Array<ArticleData>,
        "dataTimestamp": -1,
        "loadingStatus": false,
      }
    }
  }

  // スクレイプデータをデータベースより取得する関数
  // 無駄にデータベースにアクセスしない判断はこの関数が行う
  const loadTlData = async (siteId: string, dbTimestamp: number) => {
    // ローカルのデータがデータベースのデータと
    // 同じであれば、関数は実行せず終了
    if (tlData.value[siteId].dataTimestamp == dbTimestamp) {
      console.log("Not load data (id: ", siteId, "). The timestamp is the Newest.");
      return;
    }

    console.log("Call loadTlData (id: ", siteId, "timestamp", tlData.value[siteId].dataTimestamp, dbTimestamp, ")");
    tlData.value[siteId].loadingStatus = true;
    tlData.value[siteId].dataTimestamp = dbTimestamp.valueOf();

    try {
      const q = query(collection(db, siteId), orderBy("epoch", "desc"), limit(25));
      const docsArticleData = await getDocs(q);
      let newData = [] as Array<ArticleData>;

      docsArticleData.forEach((doc) => {
        newData.push(doc.data() as ArticleData);
      });
      tlData.value[siteId].scrapedData = newData;
      tlData.value[siteId].loadingStatus = false;

      console.log("Load DB: ", siteId);
    } catch (error) {
      console.error("Error fetching documents: ", error);
      tlData.value[siteId].loadingStatus = false;
    }
  }

  // 全てのロードステータスを取得する
  const allLoadingStatus = computed(() => {
    let retStatus = false;
    for (const v of Object.values(tlData.value)) {
      retStatus = retStatus || v.loadingStatus;
    }
    return retStatus;
  })

  // 初期化
  function init(ids: Array<string>) {
    console.log("Call wsStore's init function", ids);
    for (const id of ids) {
      if (id in tlData.value) {
        continue;
      }
      tlData.value[id] = {
        "scrapedData": [] as Array<ArticleData>,
        "loadingStatus": false,
        "dataTimestamp": -1,
      }
    }
  }

  return {
    tlData,
    newTlData,
    loadTlData,
    allLoadingStatus,
    init,
  }

}, { persist: true });
