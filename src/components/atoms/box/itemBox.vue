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
  width: 150pt;
  margin: 0pt;
  border: 2pt solid #3C82F5;
  box-sizing: border-box;
}

.itemBox p {
  color: black;
  background: white;
  padding: 2pt 10pt;
  margin: 0pt;
  text-align: left;
}
</style>
