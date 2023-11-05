<template>
  <div class="about">
    <FlagButton v-model:flag-value="flag"></FlagButton>
    <p>{{ flag }}</p>
    <GoodButton v-model:good-value="good" />
    <p>{{ good }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import FlagButton from '@/components/atoms/button/FlagButton.vue'
import GoodButton from '@/components/atoms/button/GoodButton.vue'

const flag = ref(0)
const good = ref(false)


</script>
