<template>
    <input class="searchTextbox" :value="modelValue" @input="updateValue" :placeholder="placeholder" type="search" />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// modelValueとplaceholderのpropsを設定
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: 'Enter text'
    }
});

const emit = defineEmits(['update:modelValue']);

// 入力値を更新する関数
const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
};
</script>

<style scoped>
input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 15pt;
    width: auto;
}
</style>
