import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppState = defineStore('appState', () => {
  const appVersion = ref("0.2");
  const useSearch = ref<boolean>(false);

  const useMenu = ref<boolean>(false);

  const useNews = ref<boolean>(false);


  return { appVersion, useSearch, useMenu, useNews }
}, { persist: true });
