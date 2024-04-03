<template>
  <div class="itemBox">
    <p class="iStr">{{ props.itemString }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  itemString: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>
.itemBox {
  margin: 0pt;
  /* border: 0pt 1pt 1pt 1pt solid #3C82F5; */
  box-sizing: border-box;
  /* background: #E6E6E6; */
  background: white;
}

.itemBox p {
  color: black;
  padding: 2pt 10pt;
  margin: 0pt;
  text-align: left;
  white-space: normal;
}
</style>
