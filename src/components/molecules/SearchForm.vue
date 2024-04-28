<template>
  <div class="searchForm" :style="props.styles">

    <div class="textArea">
      <input ty pe="search" v-model="condition.word" placeholder="Enter text" size=25 @keydown.enter="searchClick">
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
    default: {
      "--tl-background-color": ColorPallet.blue1
    },
  },
  scIdx: {
    type: Number,
    require: true,
  }
})

const scStore = useSearchCondtionStore();
const condition = ref(scStore.searchCondition[props.scIdx as number]);

const years = [2023, 2024];
const days = computed(() => {
  if (condition.value.month == "-" || condition.value.year == "-") {
    return 0;
  } else {
    return new Date(condition.value.year as number, condition.value.month as number, 0).getDate();
  }
})

function searchClick() {
  scStore.setCondition(props.scIdx as number, condition.value);
}

function crearDate() {
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
