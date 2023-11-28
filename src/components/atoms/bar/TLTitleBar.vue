<template>
  <div class="tlTitleBar">
    <p>{{ tlTitle }}</p>
  </div>
</template>

<script setup lang="ts">

defineProps({
  tlTitle: {
    type: String,
    required: true,
  }
})

</script>

<style scoped>
.tlTitleBar {
  border-radius: 10pt 10pt 0 0;
  background: linear-gradient(to bottom, #3C82F5, #80AEF8);
  background: -webkit-linear-gradient(to bottom, #3C82F5, #80AEF8);
  background: -ms-lenear-gradient(to bottom, #3C82F5, #80AEF8);
}

.tlTitleBar p {
  color: white;
  padding: 2pt 15pt;
  margin: 0pt;
  text-align: left;
}
</style>
