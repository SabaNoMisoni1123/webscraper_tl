// src/stores/dbMetaStore.ts
// Firestore のメタデータ（最終更新時刻 / アクセスカウンタ）だけを扱う薄いストア

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

export const useDbMetaStore = defineStore('dbMetaStore', () => {
  // データベースの更新時刻（epoch 秒）
  const dbTimestamp = ref<number>(-1)
  // アクセス番号（アクセスした人数）
  const noAccess = ref<number>(-1)
  // 読み込み中フラグ
  const isLoading = ref<boolean>(false)

  /**
   * Firestore から最終更新時刻およびアクセス数を取得し、アクセス数を +1 更新します。
   * @returns 直近の dbTimestamp から変わっていれば true（＝新しいデータがある合図）
   */
  const refreshMeta = async (): Promise<boolean> => {
    isLoading.value = true
    let updated = false
    try {
      const docRef = doc(db, 'timeLog', 'lastTime')
      const snap = await getDoc(docRef)
      if (snap.exists()) {
        const data = snap.data() as { lastTimeEpoch: number; noAccess: number }
        updated = dbTimestamp.value !== data.lastTimeEpoch
        dbTimestamp.value = data.lastTimeEpoch
        noAccess.value = data.noAccess + 1
        // アクセス数をインクリメント
        await updateDoc(docRef, { noAccess: noAccess.value })
      }
    } catch (e) {
      console.error('[dbMetaStore] refreshMeta error:', e)
    } finally {
      isLoading.value = false
    }
    return updated
  }

  return { dbTimestamp, noAccess, isLoading, refreshMeta }
}, { persist: true })
