<template>
  <div class="articleItem">
    <ItemTitleBar :item-title="props.articleSource" v-if="props.showBar"></ItemTitleBar>
    <ItemBox :item-string="props.articleDescription" :is-newer="isNewer" :style="styles"></ItemBox>
    <div :class="isNewer ? 'itemFooterNew' : 'itemFooter'" :style="styles">
      <a :href="props.articleUrl">ページリンク</a>
      <p>{{ dateFromEpoch.getFullYear() }}年{{ dateFromEpoch.getMonth() + 1 }}月{{ dateFromEpoch.getDate() }}日</p>
    </div>

  </div>
</template>


<script setup lang="ts">
import ItemTitleBar from "@/components/atoms/bar/ItemTitleBar.vue";
import ItemBox from "@/components/atoms/box/ItemBox.vue";
import { computed } from 'vue';

import ColorPallet from '@/assets/ColorPallet.json'

const props = defineProps({
  articleDescription: {
    type: String,
    required: true
  },
  articleSource: {
    type: String,
    required: true
  },
  articleUrl: {
    type: String,
    required: true
  },
  articleEpoch: {
    type: Number,
    required: true
  },
  tlTitle: {
    type: String,
    default: ""
  },
  showBar: {
    type: Boolean,
    default: false
  }
})

const dateFromEpoch = computed(() => {
  const date = new Date(0)
  date.setSeconds(props.articleEpoch.valueOf())
  return date
})

const isNewer = computed(() => {
  const today = new Date()
  const artDate = new Date(0)
  artDate.setSeconds(props.articleEpoch.valueOf())

  const isToday = (today.getDate() == artDate.getDate()) && (today.getMonth() == artDate.getMonth()) && (today.getFullYear() == artDate.getFullYear());
  const cmpNow = props.articleEpoch.valueOf() >= Math.floor(today.getTime() / 1000);

  return isToday || cmpNow;
})

const styles = computed(() => {
  return {
    "--bg-color": ColorPallet.yellow3
  }
})


</script>

<style scoped>
.articleItem {
  margin-bottom: 5pt;
}

.itemFooter {
  margin: 0pt;
  background: white;
  text-align: right;
}

.itemFooterNew {
  margin: 0pt;
  background: var(--bg-color);
  text-align: right;
}

p {
  color: black;
  margin-left: 10pt;
  margin-right: 10pt;
  margin-top: 0pt;
  margin-bottom: 2pt;
  display: inline-block;
}

a {
  float: left;
  margin-left: 10pt;
  margin-right: 10pt;
  margin-top: 0pt;
  margin-bottom: 2pt;
}
</style>
