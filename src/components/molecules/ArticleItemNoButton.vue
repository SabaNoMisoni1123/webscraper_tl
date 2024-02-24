<template>
  <div class="articleItem">
    <ItemTitleBar :item-title="props.articleSource" v-if="false"></ItemTitleBar>
    <ItemBox :item-string="props.articleDescription"></ItemBox>
    <div class="itemFooter">
      <a :href="props.articleUrl">ページリンク</a>
      <p>{{ dateFromEpoch.getFullYear() }}年{{ dateFromEpoch.getMonth() + 1 }}月{{ dateFromEpoch.getDate() }}日</p>
    </div>

  </div>
</template>


<script setup lang="ts">
import ItemTitleBar from "@/components/atoms/bar/ItemTitleBar.vue";
import ItemBox from "@/components/atoms/box/ItemBox.vue";
import { computed } from 'vue';


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
  }
})

const dateFromEpoch = computed(() => {
  const date = new Date(0)
  date.setSeconds(props.articleEpoch.valueOf())
  return date
})

</script>

<style scoped>
.articleItem {
  margin-bottom: 5pt;
}

.itemFooter {
  margin: 0pt;
  background: #E6E6E6;
  text-align: right;
}

.itemFooter p {
  color: black;
  margin-left: 10pt;
  margin-right: 10pt;
  margin-top: 0pt;
  margin-bottom: 2pt;
  display: inline-block;
}

.itemFooter a {
  float: left;
  margin-left: 10pt;
  margin-right: 10pt;
  margin-top: 0pt;
  margin-bottom: 2pt;
}
</style>

