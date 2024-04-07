import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppState = defineStore('appState', () => {
  const useSearch = ref<boolean>(false);
  return { useSearch }
}, { persist: true });
