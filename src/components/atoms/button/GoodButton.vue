<template>
  <img class="goodButton" src="@/assets/heart_gray.png" alt="Good" @click="click">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GoodButton',
  emits: ['click'],
  method: {
    click() {
      this.$emit('click');
    }
  },

  setup(props, { emit }) {
    emit('click')
  }
});
</script>

<style scoped>
.goodButton {
  background: white;
  border: none;
  width: 3ex;
  height: 3ex;
}
</style>
