// src/stores/siteStore.ts
// 役割: スクレイプ対象サイトのメタ情報（名称 / URL / 並び順 / 表示可否 / 色）だけを扱う
// - Firestore から siteData コレクションを取り込み、ローカルで並び替え・表示制御する
// - UI から使う関数を小さく保ち、ミューテーション系はユーティリティ化

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

// API から得るサイトデータ定義（Firestore の生データ）
export interface DbSiteData { name: string; url: string; id: string; no: number }

// アプリで扱うサイトデータ
export interface SiteData {
  name: string
  url: string
  weight: number // 並び順（0 始まりの連番）
  color: number
  isShow: boolean
  valid: boolean
  id: string
  no: number // Firestore 側の順序番号（初期 weight 設定に使用）
}

export type SiteDataDict = Record<string, SiteData>

export interface SiteOrderPreset {
  name: string
  order: Array<{ id: string; weight: number }>
}

export const useSiteStore = defineStore('siteStore', () => {
  // ---- state ----
  const siteData = ref<SiteDataDict>({})
  const isLoading = ref<boolean>(false)

  // ---- getters ----
  const sortedIds = computed(() =>
    Object.values(siteData.value)
      .sort((a, b) => a.weight - b.weight)
      .map(s => s.id)
  )

  const sortedVisibleIds = computed(() =>
    Object.values(siteData.value)
      .filter(s => s.isShow)
      .sort((a, b) => a.weight - b.weight)
      .map(s => s.id)
  )

  // ---- private utils ----
  const reindexWeights = () => {
    // weight を 0..N-1 の連番に詰め直す
    const arr = Object.values(siteData.value).sort((a, b) => a.weight - b.weight)
    arr.forEach((s, i) => { siteData.value[s.id].weight = i })
  }

  const setAllValid = (flag: boolean) => {
    Object.keys(siteData.value).forEach(id => { siteData.value[id].valid = flag })
  }

  const dropInvalid = () => {
    Object.entries(siteData.value).forEach(([id, v]) => { if (!v.valid) delete siteData.value[id] })
    reindexWeights()
  }

  // ---- actions ----
  /**
   * Firestore のサイト一覧を取得し、差分マージします（既存にない ID を追加、ある ID は更新）。
   * 取得に成功した場合のみ valid を使ったガーベジコレクションを行います。
   */
  const fetchSites = async () => {
    isLoading.value = true
    // いったん全件 invalid マーク → 取得成功後に生存確認で valid を戻し、未更新を削除
    setAllValid(false)
    try {
      const q = query(collection(db, 'siteData'), orderBy('no'))
      const snaps = await getDocs(q)
      snaps.forEach(d => {
        const s = d.data() as DbSiteData
        if (siteData.value[s.id]) {
          // 既存は一部プロパティのみ更新
          const cur = siteData.value[s.id]
          cur.name = s.name
          cur.url = s.url
          cur.no = s.no
          cur.valid = true
        } else {
          // 新規は末尾 weight で挿入
          const nextWeight = Object.keys(siteData.value).length
          siteData.value[s.id] = {
            id: s.id,
            name: s.name,
            url: s.url,
            no: s.no,
            weight: nextWeight,
            color: 0,
            isShow: true,
            valid: true,
          }
        }
      })
      dropInvalid()
    } catch (e) {
      console.error('[siteStore] fetchSites error:', e)
      // 失敗時は valid を元に戻して現状維持
      setAllValid(true)
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Firestore のデータで完全リセット（取得できた時だけ置き換え）。
   */
  const resetSites = async () => {
    isLoading.value = true
    try {
      const q = query(collection(db, 'siteData'), orderBy('no'))
      const snaps = await getDocs(q)
      const fresh: SiteDataDict = {}
      let i = 0
      snaps.forEach(d => {
        const s = d.data() as DbSiteData
        fresh[s.id] = {
          id: s.id,
          name: s.name,
          url: s.url,
          no: s.no,
          weight: i++,
          color: 0,
          isShow: true,
          valid: true,
        }
      })
      siteData.value = fresh
    } catch (e) {
      console.error('[siteStore] resetSites error:', e)
    } finally {
      isLoading.value = false
    }
  }

  /** 並び順プリセットの適用 */
  const applyOrderPreset = (preset: SiteOrderPreset) => {
    if (preset.name === 'default') {
      // Firestore の no をベースに並び直し
      Object.values(siteData.value).forEach(s => { s.weight = s.no })
    } else {
      // 既存 weight を後ろに逃がして衝突回避 → 指定 weight を適用 → 正規化
      const bump = preset.order.length + 10
      Object.values(siteData.value).forEach(s => { s.weight = s.weight + bump })
      preset.order.forEach(({ id, weight }) => { if (siteData.value[id]) siteData.value[id].weight = weight })
    }
    reindexWeights()
  }

  /** 表示切替 */
  const setShow = (id: string, show: boolean) => { if (siteData.value[id]) siteData.value[id].isShow = show }
  /** 色変更 */
  const setColor = (id: string, color: number) => { if (siteData.value[id]) siteData.value[id].color = color }
  /** 重み直接設定 */
  const setWeight = (id: string, weight: number) => { if (siteData.value[id]) { siteData.value[id].weight = weight; reindexWeights() } }
  /** 上へ */
  const moveUp = (id: string) => { if (siteData.value[id]) { siteData.value[id].weight -= 1.5; reindexWeights() } }
  /** 下へ */
  const moveDown = (id: string) => { if (siteData.value[id]) { siteData.value[id].weight += 1.5; reindexWeights() } }

  return {
    // state
    siteData, isLoading,
    // getters
    sortedIds, sortedVisibleIds,
    // actions
    fetchSites, resetSites, applyOrderPreset,
    setShow, setColor, setWeight, moveUp, moveDown,
  }
}, { persist: true })
