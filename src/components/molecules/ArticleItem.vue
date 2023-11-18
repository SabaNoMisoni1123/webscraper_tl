<template>
  <div class="articleItem">
    <ItemTitleBar :item-title="title"></ItemTitleBar>
    <ItemBox :item-string="desc"></ItemBox>
    <div class="itemFooter">
      <p>{{ itemFotterText }}</p>
      <FlagButton v-model:flag-value="flag" :width="15" :height="15" />
      <GoodButton v-model:good-value="good" :width="15" :height="15" />
    </div>

  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import ItemTitleBar from "@/components/atoms/bar/ItemTitleBar.vue"
import ItemBox from "@/components/atoms/box/ItemBox.vue"
import GoodButton from "@/components/atoms/button/GoodButton.vue"
import FlagButton from "@/components/atoms/button/FlagButton.vue"

const good = ref(false)
const flag = ref(0)
const title = ref("Title hoge")
const desc = ref("Desc fuga")
const itemFotterText = ref("Publisher piyo")

const props = defineProps({
  articleId: {
    type: String,
    required: true,
  }
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
  margin-bottom: 2pt;
  display: inline-block;
}

</style>

