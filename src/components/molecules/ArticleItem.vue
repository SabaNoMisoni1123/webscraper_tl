<template>
  <div class="articleItem">
    <ItemTitleBar :item-title="props.articleSource"></ItemTitleBar>
    <ItemBox :item-string="props.articleDesctiption"></ItemBox>
    <div class="itemFooter">
      <a :href="props.articleUrl">Link</a>
      <p>{{ dateEpoch.getFullYear() }}年{{ dateEpoch.getMonth() + 1 }}月{{ dateEpoch.getDate() }}日</p>
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

const props = defineProps({
  articleDesctiption: {
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
  }

})

const dateEpoch = ref(new Date(0))
dateEpoch.value.setSeconds(props.articleEpoch.valueOf())

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

