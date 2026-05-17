<template>
  <!-- ルーティング確認用の空ページ。必要に応じて一時コンポーネントを差し込みます。 -->
  <div class="sample">
  </div>
</template>

<script setup lang="ts">
// ルート確認時に Timeline を差し込めるよう残している開発用 import です。
import Timeline from '@/components/organisms/Timeline.vue'

</script>

<style scoped>
.sample {
  width: auto;
  height: 90vh;
}
</style>
