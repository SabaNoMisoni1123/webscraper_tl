<template>
  <div class="ArticleItem">
    <ItemTitleBar :item-title="articleTitle"></ItemTitleBar>
    <ItemBox :item-string="articleDescription"></ItemBox>
  </div>
</template>


<script setup lang="ts">
import ItemTitleBar from "@/components/atoms/bar/ItemTitleBar.vue"
import ItemBox from "@/components/atoms/box/itemBox.vue"

const props = defineProps({
  articleTitle: {
    type: String,
    required: true,
  },
  articleDescription: {
    type: String,
    required: true,
  },
})

</script>

