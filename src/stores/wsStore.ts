// 旧系ストア: siteId ごとの記事データを Firestore からページング取得します。
// 現行主要画面では timelineStore を使いますが、旧コンポーネント互換のため維持しています。
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { collection, getDocs, query, orderBy, limit, startAfter, type QueryDocumentSnapshot, type DocumentData } from 'firebase/firestore'

// 記事データ
export interface ArticleData {
  "title": string,
  "url": string,
  "org": string,
  "epoch": number
}

// ストアで管理するデータその②
// データベースから取得するウェブスクレイプの結果
// タイムラインコンポーネントとのみやり取りを想定
// key: siteId
export interface TlData {
  [index: string]: {
    "scrapedData": Array<ArticleData>,
    "loadingStatus": boolean,
    "dataTimestamp": number,
    "lastArticle": QueryDocumentSnapshot<DocumentData, DocumentData> | null,
    "lastArticleUrl": string,
  }
}

export const useWsDataStore = defineStore('wsDataStore', () => {
  // データ
  // １回のロード件数
  const noLoadArticles = ref(25);

  // データベースからロードしたウェブスクレイプ結果のデータ
  const tlData = ref<TlData>({} as TlData);

  // 関数

  // noLoadArticlesについての関数
  // noLoadArticlesの値を設定する関数
  function setNoLoadArticles(new_n = 25) {
    noLoadArticles.value = new_n;
  }

  // tlDataについての関数
  // tlDataの新しいkeyの追加
  function addNewKeyTlData(siteId: string) {
    if (!tlData.value[siteId]) {
      tlData.value[siteId] = {
        "scrapedData": [] as Array<ArticleData>,
        "dataTimestamp": -1,
        "loadingStatus": false,
        "lastArticle": null,
        "lastArticleUrl": "",
      }
    }
  }

  // key（siteId）を指定してデータベースから記事データをダウンロードする関数
  // リログを繰り返した場合に毎回データベースにアクセスしないようにする。
  const loadTlData = async (siteId: string, dbTimestamp: number): Promise<ArticleData[]> => {
    addNewKeyTlData(siteId);
    let newData = [] as Array<ArticleData>;
    // 以下の条件を順番すべてに満たせば、関数を実行せずに終了
    // 1. scrapedDataの長さが1以上ある
    // 2. データ取得のタイムスタンプが、データベースから得られたタイムスタンプと同じ
    // 3. 最後のarticleのURLの記録が正しい場合
    if (
      tlData.value[siteId].scrapedData.length > 0 &&
      tlData.value[siteId].dataTimestamp == dbTimestamp &&
      (tlData.value[siteId].scrapedData.at(-1)?.url ?? "") == tlData.value[siteId].lastArticleUrl
    ) {
      console.log("Not load data (id: ", siteId, "). The timestamp is the Newest.");
      return tlData.value[siteId].scrapedData;
    }

    console.log("Call loadTlData (id: ", siteId, "timestamp", tlData.value[siteId].dataTimestamp, dbTimestamp, ")");
    tlData.value[siteId].loadingStatus = true;
    tlData.value[siteId].dataTimestamp = dbTimestamp.valueOf();

    try {
      const q = query(collection(db, siteId), orderBy("epoch", "desc"), limit(noLoadArticles.value));
      const docsArticleData = await getDocs(q);

      docsArticleData.forEach((doc) => {
        newData.push(doc.data() as ArticleData);
      });
      tlData.value[siteId].scrapedData = newData;
      tlData.value[siteId].loadingStatus = false;
      tlData.value[siteId].lastArticle = docsArticleData.docs.at(-1) ?? null;
      tlData.value[siteId].lastArticleUrl = newData.at(-1)?.url ?? "";


      console.log("Load DB: ", siteId);
    } catch (error) {
      console.error("Error fetching documents: ", error);
      tlData.value[siteId].loadingStatus = false;
    }
    return newData;
  }

  // 追加でデータをロードする関数
  const loadNextTlData = async (siteId: string) => {
    addNewKeyTlData(siteId);
    let newData = [] as Array<ArticleData>;

    console.log("Call loadNextTlData function");
    if (!tlData.value[siteId].lastArticle) {
      console.log("Last ArticleData is undefined.");
      return newData;
    }

    tlData.value[siteId].loadingStatus = true;
    try {
      const q = query(
        collection(db, siteId),
        orderBy("epoch", "desc"),
        startAfter(tlData.value[siteId].lastArticle),
        limit(noLoadArticles.value),
      );
      const docsArticleData = await getDocs(q);

      docsArticleData.forEach((doc) => {
        newData.push(doc.data() as ArticleData);
      });
      tlData.value[siteId].scrapedData = [...tlData.value[siteId].scrapedData, ...newData];
      tlData.value[siteId].loadingStatus = false;
      tlData.value[siteId].lastArticle = docsArticleData.docs.at(-1) ?? null;
      tlData.value[siteId].lastArticleUrl = tlData.value[siteId].scrapedData.at(-1)?.url ?? "";

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
        "lastArticle": null,
        "lastArticleUrl": "",
      }
    }
  }

  return {
    noLoadArticles,
    tlData,
    addNewKeyTlData,
    loadTlData,
    allLoadingStatus,
    loadNextTlData,
    init,
  }

}, { persist: false });
