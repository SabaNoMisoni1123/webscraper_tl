// 検索タイムラインで使う条件配列を管理する Pinia ストア。
// 新 UI と旧 UI の両方から参照されるため、互換 export もこのファイルに残します。
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 検索条件 1 件分。"-" は日付未指定を表す UI 上のセンチネル値です。
export interface SearchConditionData {
  "word": string,
  "year": number | string,
  "month": number | string,
  "day": number | string,
  "startDate"?: string,
  "endDate"?: string,
  "color": number,
}

// 初期条件の年には起動日の年を入れ、月日だけ未指定にします。
const today = new Date();

export const useSearchConditionStore = defineStore('searchConditionStore', () => {
  const searchCondition = ref<Array<SearchConditionData>>([] as Array<SearchConditionData>)

  // 任意の条件を追加します。旧 SearchForm から直接利用される公開 API です。
  function newCondition(word: string, year: number | string, month: number | string, day: number | string) {
    searchCondition.value.push({
      "word": word,
      "year": year,
      "month": month,
      "day": day,
      "startDate": "",
      "endDate": "",
      "color": 0
    } as SearchConditionData)
  }

  // 永続化データが空の場合でも、画面側が必ず 1 件を参照できるようにします。
  if (searchCondition.value.length == 0) {
    pushCondition();
  }

  // 指定インデックスだけを置き換えます。範囲外アクセスは無視して UI 操作を安全にします。
  function setCondition(idx: number, newCondition: SearchConditionData) {
    if (idx >= 0 && idx < searchCondition.value.length) {
      searchCondition.value[idx] = newCondition;
    }
  }

  // 検索窓数を減らす操作で利用します。最低件数の制御は呼び出し側でも行います。
  function rmCondition(idx: number) {
    if (idx >= 0 && idx < searchCondition.value.length) {
      searchCondition.value.splice(idx, 1);
    }
  }

  // 空の検索条件を末尾に追加します。
  function pushCondition() {
    searchCondition.value.push({
      "word": "",
      "year": today.getFullYear(),
      "month": "-",
      "day": "-",
      "startDate": "",
      "endDate": "",
      "color": 0
    })
  }

  // UI の検索窓は最低 1 件を前提にしているため、最後の 1 件は削除しません。
  function popCondition() {
    if (searchCondition.value.length > 1) {
      searchCondition.value.pop();
    }
  }

  // テンプレート側で検索窓数を扱いやすくするための算出値です。
  const size = computed(() => {
    return searchCondition.value.length
  })

  return { searchCondition, newCondition, setCondition, rmCondition, pushCondition, popCondition, size }
}, { persist: true })

// 既存コードに typo を含む import が残っているため、移行完了まで互換 export を残します。
export const useSearchCondtionStore = useSearchConditionStore
