import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// タイムライン全体のデータ（配列）
export interface SearchConditionData {
  "word": string,
  "year": number | string,
  "month": number | string,
  "day": number | string,
  "color": number,
}

const today = new Date();

// データロード
export const useSearchCondtionStore = defineStore('searchConditionStore', () => {
  const searchCondition = ref<Array<SearchConditionData>>([] as Array<SearchConditionData>)

  function newCondition(word: string, year: number | string, month: number | string, day: number | string) {
    searchCondition.value.push({
      "word": word,
      "year": year,
      "month": month,
      "day": day,
      "color": 0
    } as SearchConditionData)
  }

  if (searchCondition.value.length == 0) {
    pushCondition();
  }

  function setCondition(idx: number, newCondition: SearchConditionData) {
    if (idx >= 0 && idx < searchCondition.value.length) {
      searchCondition.value[idx] = newCondition;
    }
  }

  function rmCondition(idx: number) {
    if (idx >= 0 && idx < searchCondition.value.length) {
      searchCondition.value.splice(idx);
    }
  }

  function pushCondition() {
    searchCondition.value.push({
      "word": "",
      "year": today.getFullYear(),
      "month": "-",
      "day": "-",
      "color": 0
    })
  }

  function popCondition() {
    if (searchCondition.value.length > 1) {
      searchCondition.value.pop();
    }
  }

  const size = computed(() => {
    return searchCondition.value.length
  })

  return { searchCondition, newCondition, setCondition, rmCondition, pushCondition, popCondition, size }
}, { persist: true })
