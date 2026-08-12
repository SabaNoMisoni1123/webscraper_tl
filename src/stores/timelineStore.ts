// src/stores/timelineStore.ts
// 役割: サイトごとのスクレイプ記事（タイトル/URL/発行時刻など）のページングロード
// - Firestore コレクション名 = siteId を前提
// - dbTimestamp を参照して最新確認 → 変化なしならキャッシュを使い回す

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/firebase'
import {
  collection, getDocs, limit, orderBy, query, startAfter, where,
  type DocumentData, type QueryDocumentSnapshot
} from 'firebase/firestore'

export interface ArticleData { title: string; url: string; org: string; epoch: number }

export interface TlBucket {
  scraped: ArticleData[]
  loading: boolean
  dataTimestamp: number // ロード時に参照した DB 側の最終更新 epoch
  lastDoc: QueryDocumentSnapshot<DocumentData> | null
  lastUrl: string // 末尾記事の URL（タイムスタンプ一致チェック用）
}

export type TlState = Record<string, TlBucket>

export interface RecentBucket {
  scraped: ArticleData[]
  loading: boolean
  dataTimestamp: number
  sinceEpoch: number
}

export type RecentState = Record<string, RecentBucket>

export const useTimelineStore = defineStore('timelineStore', () => {
  // 1 回のロード件数
  const pageSize = ref<number>(25)
  const recentLimit = ref<number>(200)
  // サイトごとの記事バケット
  const buckets = ref<TlState>({})
  const recentBuckets = ref<RecentState>({})

  // いずれかロード中？（グローバルスピナー制御などに）
  const anyLoading = computed(() => Object.values(buckets.value).some(b => b.loading))

  // 内部ユーティリティ: バケットの存在を保証
  const ensureBucket = (siteId: string) => {
    if (!buckets.value[siteId]) {
      buckets.value[siteId] = {
        scraped: [],
        loading: false,
        dataTimestamp: -1,
        lastDoc: null,
        lastUrl: '',
      }
    }
  }

  const setPageSize = (n = 25) => { pageSize.value = n }
  const setRecentLimit = (n = 200) => { recentLimit.value = n }

  /**
   * 初回ロード or キャッシュ更新
   * - 条件を満たせばキャッシュを返して Firestore アクセスを避ける
   */
  const load = async (siteId: string, dbTimestamp: number): Promise<ArticleData[]> => {
    ensureBucket(siteId)
    const b = buckets.value[siteId]

    // キャッシュ利用条件
    const cacheOk = b.scraped.length > 0 && b.dataTimestamp === dbTimestamp && (b.scraped.at(-1)?.url ?? '') === b.lastUrl
    if (cacheOk) return b.scraped

    b.loading = true
    b.dataTimestamp = dbTimestamp

    try {
      const q = query(collection(db, siteId), orderBy('epoch', 'desc'), limit(pageSize.value))
      const snaps = await getDocs(q)

      const fresh: ArticleData[] = []
      snaps.forEach(d => fresh.push(d.data() as ArticleData))

      b.scraped = fresh
      b.lastDoc = snaps.docs.at(-1) ?? null
      b.lastUrl = fresh.at(-1)?.url ?? ''
    } catch (e) {
      console.error('[timelineStore] load error:', e)
    } finally {
      b.loading = false
    }
    return buckets.value[siteId].scraped
  }

  /** 追加ロード（ページング） */
  const loadMore = async (siteId: string): Promise<ArticleData[]> => {
    ensureBucket(siteId)
    const b = buckets.value[siteId]

    if (!b.lastDoc) return []

    b.loading = true
    try {
      const q = query(collection(db, siteId), orderBy('epoch', 'desc'), startAfter(b.lastDoc), limit(pageSize.value))
      const snaps = await getDocs(q)
      const add: ArticleData[] = []
      snaps.forEach(d => add.push(d.data() as ArticleData))

      b.scraped = [...b.scraped, ...add]
      b.lastDoc = snaps.docs.at(-1) ?? null
      b.lastUrl = b.scraped.at(-1)?.url ?? b.lastUrl
    } catch (e) {
      console.error('[timelineStore] loadMore error:', e)
    } finally {
      b.loading = false
    }
    return buckets.value[siteId].scraped
  }

  const loadRecent = async (siteId: string, dbTimestamp: number, sinceEpoch: number): Promise<ArticleData[]> => {
    if (!recentBuckets.value[siteId]) {
      recentBuckets.value[siteId] = {
        scraped: [],
        loading: false,
        dataTimestamp: -1,
        sinceEpoch: -1,
      }
    }

    const b = recentBuckets.value[siteId]
    if (b.scraped.length > 0 && b.dataTimestamp === dbTimestamp && b.sinceEpoch === sinceEpoch) {
      return b.scraped
    }

    b.loading = true
    b.dataTimestamp = dbTimestamp
    b.sinceEpoch = sinceEpoch

    try {
      const q = query(
        collection(db, siteId),
        where('epoch', '>=', sinceEpoch),
        orderBy('epoch', 'desc'),
        limit(recentLimit.value)
      )
      const snaps = await getDocs(q)

      const fresh: ArticleData[] = []
      snaps.forEach(d => fresh.push(d.data() as ArticleData))
      b.scraped = fresh
    } catch (e) {
      console.error('[timelineStore] loadRecent error:', e)
    } finally {
      b.loading = false
    }

    return recentBuckets.value[siteId].scraped
  }

  return {
    pageSize,
    recentLimit,
    buckets,
    recentBuckets,
    anyLoading,
    setPageSize,
    setRecentLimit,
    load,
    loadMore,
    loadRecent,
  }
}, { persist: false })
