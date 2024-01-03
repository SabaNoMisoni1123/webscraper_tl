<template>
  <div class="itemTitleBar">
    <p>{{ itemTitle }}</p>
  </div>
</template>

<script setup lang="ts">

defineProps({
  itemTitle: {
    type: String,
    required: true
  }
});

</script>

<style scoped>
.itemTitleBar {
  margin: 0pt;
  background: #E6E6E6;

}

.itemTitleBar p {
  color: black;
  padding: 2pt 10pt;
  margin: 0pt;
  text-align: left;
  font-weight: bold;
}
</style>
