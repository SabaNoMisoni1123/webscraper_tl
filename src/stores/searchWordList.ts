import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// タイムライン全体のデータ（配列）
export interface SearchWordData {
  "word": string,
  "weight": number,
  "color": number,
}


// データロード
export const useTlDataListStore = defineStore('wsSiteList', () => {
  const searchWord = ref<Array<SearchWordData>>([] as Array<SearchWordData>)

  function newWordItem(word: string) {
    searchWord.value.push({
      "word": word,
      "weight": searchWord.value.length,
      "color": 0
    } as SearchWordData)
  }

  function rmWordItem(word: string | number) {
    let idx = 0;
    if (typeof word == 'string') {
      idx = 0;
    }
  }

  return { searchWord, newWordItem, rmWordItem }
}, { persist: true })
