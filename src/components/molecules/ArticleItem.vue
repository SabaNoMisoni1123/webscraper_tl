<template>
  <div class="articleItem">
    <ItemTitleBar :item-title="title"></ItemTitleBar>
    <ItemBox :item-string="desc"></ItemBox>
    <div class="itemFooter">
      <p>{{ publisher }}</p>
      <div class="itemFooterButton">
        <FlagButton v-model:flag-value="flag" :width="15" :height="15" />
        <GoodButton v-model:good-value="good" :width="15" :height="15" />
      </div>
    </div>

  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import ItemTitleBar from "@/components/atoms/bar/ItemTitleBar.vue"
import ItemBox from "@/components/atoms/box/itemBox.vue"
import GoodButton from "@/components/atoms/button/GoodButton.vue"
import FlagButton from "@/components/atoms/button/FlagButton.vue"

const good = ref(true)
const flag = ref(0)
const title = ref("Title hoge")
const desc = ref("Desc fuga")
const publisher = ref("Publisher piyo")

</script>

<style scoped>
.itemFooter {
  width: 200pt;
  height: 20pt;
  margin: 0pt;
  border: 0pt 1pt 0pt 1pt solid #3C82F5;
  background: #E6E6E6;
  box-sizing: border-box;
}

.itemFooter p {
  color: black;
  margin-left: 10pt;
  margin-right: auto;
  float: left;
}

.itemFooterButton {
  margin-right: 10pt;
  float: right;
}
</style>

