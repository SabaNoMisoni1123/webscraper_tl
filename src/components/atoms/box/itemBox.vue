<template>
  <div class="itemBox">
    <p>{{ itemString }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  itemString: {
    type: String,
    required: true,
  },
})

</script>

<style scoped>
.itemBox {
  width: 200pt;
  margin: 0pt;
  border: 0pt 1pt 1pt 1pt solid #3C82F5;
  box-sizing: border-box;
}

.itemBox p {
  color: black;
  background: #E6E6E6;
  padding: 2pt 10pt;
  margin: 0pt;
  text-align: left;
}
</style>
