import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppState = defineStore('appState', () => {
  const useSearch = ref<boolean>(false);
  const searchText = ref<string>("");

  const useMenu = ref<boolean>(false);
  return { useSearch, searchText, useMenu }
}, { persist: true });
