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
  background: linear-gradient(to top, #E6E6E6, #939292);
  background: -webkit-linear-gradient(to top, #E6E6E6, #939292);
  background: -ms-lenear-gradient(to top, #E6E6E6, #939292);

}

.itemTitleBar p {
  color: black;
  padding: 2pt 10pt;
  margin: 0pt;
  text-align: left;
}
</style>
