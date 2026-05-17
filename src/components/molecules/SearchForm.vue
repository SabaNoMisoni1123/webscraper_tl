<template>
  <!-- 旧検索タイムラインで使う検索フォーム。新 UI では SearchConfigPanel が同等の役割を持ちます。 -->
  <div class="searchForm" :style="props.styles">

    <div class="textArea">
      <input type="search" v-model="condition.word" placeholder="Enter text" size=25 @keydown.enter="searchClick">
      <SearchButton @click="searchClick" :height="12" :width="12" icon-color="white" />
    </div>

    <div class="dateArea">
      <select name="year" id="selctMonth" v-model="condition.year">
        <option key="noSelct">-</option>
        <option v-for="y in years" :key="y">{{ y }}</option>
      </select>
      <p>年</p>
      <select name="month" id="selctMonth" v-model="condition.month">
        <option key="noSelct">-</option>
        <option v-for="m in 12" :key="m">{{ m }}</option>
      </select>
      <p>月</p>
      <select name="day" id="selectDay" v-model="condition.day">
        <option key="noSelct">-</option>
        <option v-for="d in days" :key="d">{{ d }}</option>
      </select>
      <p>日</p>
      <XButton @click="crearDate" :height="12" :width="12" icon-color="white" />
    </div>

  </div>
</template>

<script setup lang="ts">
import SearchButton from '@/components/atoms/button/SearchButton.vue'
import XButton from '@/components/atoms/button/XButton.vue'
import ColorPallet from '@/assets/ColorPallet.json';

import { ref, computed } from 'vue'
import { useSearchCondtionStore } from '@/stores/searchCondition'

const props = defineProps({
  styles: {
    type: Object,
    default: () => ({
      "--tl-background-color": ColorPallet.blue1
    }),
  },
  scIdx: {
    type: Number,
    required: true,
  }
})

const scStore = useSearchCondtionStore();

// 旧 UI は検索条件のオブジェクトをフォーム内で編集し、検索ボタンでストアへ反映します。
const condition = ref(scStore.searchCondition[props.scIdx as number]);

const thisYear = new Date().getFullYear();
const years = Array.from({ length: thisYear - 2023 + 1 }, (_, i) => 2023 + i);

// 月・年がそろった場合だけ、その月の日数を選択肢として返します。
const days = computed(() => {
  if (condition.value.month == "-" || condition.value.year == "-") {
    return 0;
  } else {
    return new Date(condition.value.year as number, condition.value.month as number, 0).getDate();
  }
})

function searchClick() {
  // ref 内の条件を指定スロットへ明示的に戻し、永続化対象を更新します。
  scStore.setCondition(props.scIdx as number, condition.value);
}

function crearDate() {
  // 年は残し、月日だけ未指定に戻す旧 UI の挙動を維持します。
  condition.value.day = "-";
  condition.value.month = "-";
}
</script>

<style scoped>
.searchForm {
  background: var(--tl-background-color);
  text-align: center;
  padding-bottom: 5pt;
  height: 40pt;
}

.searchForm p {
  display: inline-block;
  color: white;
}

.searchForm p:last-of-type {
  margin-right: 5pt;
}

.textArea input {
  font-size: 20;
  vertical-align: middle;
  margin-right: 5pt;
  margin-top: 0;
}

.textArea SearchButton {
  vertical-align: middle;
}
</style>
