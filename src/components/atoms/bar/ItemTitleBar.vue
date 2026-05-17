<template>
  <!-- 旧カード用の小見出しバー。ArticleItemNoButton から利用されます。 -->
  <div class="itemTitleBar" :style="styles">
    <p>{{ itemTitle }}</p>
  </div>
</template>

<script setup lang="ts">
import ColorPallet from '@/assets/ColorPallet.json';
import { computed } from 'vue';

defineProps({
  itemTitle: {
    type: String,
    required: true
  }
});

// 色は旧デザインのパレット JSON に寄せ、呼び出し側の style と衝突しない CSS 変数で渡します。
const styles = computed(() => {
  return {
    "--it-background-color": ColorPallet.gray3
  }
})

</script>

<style scoped>
.itemTitleBar {
  margin: 0pt;
  background: var(--it-background-color);

}

.itemTitleBar p {
  color: black;
  padding: 2pt 10pt;
  margin: 0pt;
  text-align: left;
  font-weight: bold;
}
</style>
