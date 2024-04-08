import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppState = defineStore('appState', () => {
  const appVersion = ref("0.1");
  const useSearch = ref<boolean>(false);
  const searchText = ref<string>("");

  const useMenu = ref<boolean>(false);
  return { appVersion, useSearch, searchText, useMenu }
}, { persist: true });
