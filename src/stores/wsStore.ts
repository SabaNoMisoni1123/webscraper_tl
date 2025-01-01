import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { collection, getDocs, query, orderBy, limit, startAfter, type QueryDocumentSnapshot, type DocumentData } from 'firebase/firestore'

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
    "lastArticle": QueryDocumentSnapshot<DocumentData, DocumentData>,
  }
}

export const useWsDataStore = defineStore('wsDataStore', () => {
  const noLoadArticles = 25; // １回のロード件数

  // スクレイプの結果情報
  const tlData = ref<TlData>({} as TlData);

  // siteIdによる新規追加
  function newTlData(siteId: string) {
    if (!(siteId in Object.keys(tlData.value))) {
      tlData.value[siteId] = {
        "scrapedData": [] as Array<ArticleData>,
        "dataTimestamp": -1,
        "loadingStatus": false,
        "lastArticle": {} as QueryDocumentSnapshot<DocumentData, DocumentData>,
      }
    }
  }

  // スクレイプデータをデータベースより取得する関数
  // 無駄にデータベースにアクセスしない判断はこの関数が行う
  const loadTlData = async (siteId: string, dbTimestamp: number) => {
    // ローカルのデータがデータベースのデータと
    // 同じであれば、関数は実行せず終了
    let newData = [] as Array<ArticleData>;
    if (
      tlData.value[siteId].scrapedData.length > 0 &&
      tlData.value[siteId].dataTimestamp == dbTimestamp
    ) {
      console.log("Not load data (id: ", siteId, "). The timestamp is the Newest.");
      return tlData.value[siteId].scrapedData;
    }

    console.log("Call loadTlData (id: ", siteId, "timestamp", tlData.value[siteId].dataTimestamp, dbTimestamp, ")");
    tlData.value[siteId].loadingStatus = true;
    tlData.value[siteId].dataTimestamp = dbTimestamp.valueOf();

    try {
      const q = query(collection(db, siteId), orderBy("epoch", "desc"), limit(noLoadArticles));
      const docsArticleData = await getDocs(q);

      docsArticleData.forEach((doc) => {
        newData.push(doc.data() as ArticleData);
      });
      tlData.value[siteId].scrapedData = newData;
      tlData.value[siteId].loadingStatus = false;

      tlData.value[siteId].lastArticle = docsArticleData.docs[docsArticleData.docs.length - 1];
      console.log("Load DB: ", siteId);
    } catch (error) {
      console.error("Error fetching documents: ", error);
      tlData.value[siteId].loadingStatus = false;
    }
    return newData;
  }

  // 追加でデータをロードする関数
  const loadNextTlData = async (siteId: string) => {
    let newData = [] as Array<ArticleData>;

    console.log("Call loadNextTlData function");
    if (tlData.value[siteId].lastArticle == {} as QueryDocumentSnapshot<DocumentData, DocumentData>) {
      console.log("Last ArticleData is undefined.");
      return newData;
    }

    tlData.value[siteId].loadingStatus = true;
    try {
      const q = query(
        collection(db, siteId),
        orderBy("epoch", "desc"),
        startAfter(tlData.value[siteId].lastArticle),
        limit(noLoadArticles),
      );
      const docsArticleData = await getDocs(q);

      docsArticleData.forEach((doc) => {
        newData.push(doc.data() as ArticleData);
      });
      tlData.value[siteId].scrapedData = [...tlData.value[siteId].scrapedData, ...newData];
      tlData.value[siteId].loadingStatus = false;

      tlData.value[siteId].lastArticle = docsArticleData.docs[docsArticleData.docs.length - 1];
      console.log("Load DB: ", siteId);
    } catch (error) {
      console.error("Error fetching documents: ", error);
      tlData.value[siteId].loadingStatus = false;
    }
    tlData.value[siteId].loadingStatus = false;

    return newData;
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
        "lastArticle": {} as QueryDocumentSnapshot<DocumentData, DocumentData>,
      }
    }
  }

  return {
    tlData,
    newTlData,
    loadTlData,
    allLoadingStatus,
    loadNextTlData,
    init,
  }

}, { persist: true });
