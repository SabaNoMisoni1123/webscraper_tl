<template>
  <div class="searchForm" :style="props.styles">
    <div class="inputArea">
      <input type="search" name="" id="" v-model="condition.word" placeholder="Enter text" size=25
        @keydown.enter="searchClick">
      <SearchButton @click="searchClick" :height="12" :width="12" icon-color="white" />
      <br>
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
        <option v-for="d in 30" :key="d">{{ d }}</option>
      </select>
      <p>日</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchButton from '@/components/atoms/button/SearchButton.vue'
import ColorPallet from '@/assets/ColorPallet.json';

import { ref } from 'vue'
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

function searchClick() {
  scStore.setCondition(props.scIdx as number, condition.value);
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

.inputArea input {
  font-size: 20;
  vertical-align: middle;
  margin-right: 5pt;
  margin-top: 0;
}

.inputArea SearchButton {
  vertical-align: middle;
}
</style>
