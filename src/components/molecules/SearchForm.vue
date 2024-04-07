<template>
  <div class="searchForm" :style="props.styles">
    <div class="inputArea">
      <input type="search" name="" id="" v-model="text" placeholder="Enter text" size=25>
      <SearchButton @click="searchClick" :height="12" :width="12" icon-color="white" />
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
      "--tl-background-color": ColorPallet.blue1
    },
  },
  initValue: {
    type: Object as () => string,
    default: "" as string,
  }
})

const emit = defineEmits<{
  'searchText': [text: string],
}>()

const text = ref(props.initValue)
const lastText = ref(props.initValue)

function searchClick() {
  if (lastText.value != text.value) {
    lastText.value = text.value;
    emit("searchText", text.value);
  }
}

</script>

<style scoped>
.searchForm {
  background: var(--tl-background-color);
  text-align: center;
  padding-bottom: 5pt;
  height: 25pt;
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
