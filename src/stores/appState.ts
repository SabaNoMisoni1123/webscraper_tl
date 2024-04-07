import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppState = defineStore('appState', () => {
  const useSearch = ref<boolean>(false);
  const searchText = ref<string>("");
  return { useSearch, searchText }
}, { persist: true });
