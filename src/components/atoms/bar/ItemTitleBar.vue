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
  width: 150pt;
  margin: 0pt;
  border-radius: 10pt 10pt 0 0;
  background: linear-gradient(to top, #3C82F5, #80AEF8);
  background: -webkit-linear-gradient(to top, #3C82F5, #80AEF8);
  background: -ms-lenear-gradient(to top, #3C82F5, #80AEF8);

}

.itemTitleBar p {
  color: white;
  padding: 3pt 15pt;
  margin: 0pt;
  text-align: left;
}
</style>
