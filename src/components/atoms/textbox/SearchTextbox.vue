<template>
  <input :value="modelValue" @input="updateValue" :placeholder="placeholder" />
</template>

<script setup>
import { ref, watch } from 'vue';

// modelValueプロパティとupdate:modelValueイベントの定義
const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: ""
  }
});
const emit = defineEmits(['update:modelValue']);

// 入力値を更新する関数
const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};

// 親コンポーネントからのmodelValueの変更を監視
watch(() => props.modelValue, (newVal) => {
  text.value = newVal;
}, { immediate: true });

// 内部的に使用するリアクティブなデータ
const text = ref(props.modelValue);

</script>

<style scoped>
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
