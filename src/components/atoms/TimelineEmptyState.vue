<template>
  <!--
    タイムライン列で共通利用する空状態表示。
    各 organism は「なぜ空なのか」だけを渡し、見た目はこの atom に集約します。
  -->
  <v-list class="timeline-empty-state">
    <v-list-item :prepend-icon="icon" :title="title" />
  </v-list>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  icon?: string
  title: string
}>(), {
  icon: 'mdi-information-outline',
})
</script>

<style scoped>
.timeline-empty-state {
  flex: 1 1 auto;
}
</style>
