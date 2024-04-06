<template>
  <div class="searchForm" :style="props.styles">
    <div class="inputArea">
      <input type="search" name="" id="" v-model="text" placeholder="Enter text">
      <SearchButton @click="searchClick" :height="10" :width="10" icon-color="white" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchButton from '@/components/atoms/button/SearchButton.vue'
import ColorPallet from '@/assets/ColorPallet.json';

const props = defineProps({
  styles: {
    type: Object,
    default: {
      "--sf-bg-color": ColorPallet.blue1
    }
  }
})

const emit = defineEmits<{
  'searchText': [text: string],
}>()

const text = ref("")
const lastText = ref("")

function searchClick() {
  if (lastText.value != text.value) {
    lastText.value = text.value;
    emit("searchText", text.value);
  }
}

</script>

<style scoped>
.searchForm {
  background: var(--sf-bg-color);
  text-align: center;
  padding-top: 2pt;
  padding-bottom: 2pt;
}

.inputArea input {
  font-size: 15;
  vertical-align: middle;
  margin-right: 5pt;
}

.inputArea SearchButton {
  vertical-align: middle;
}
</style>
