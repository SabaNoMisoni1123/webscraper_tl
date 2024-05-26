import { ref } from 'vue'
import { defineStore } from 'pinia'
import AppConfig from '@/assets/AppConfig.json'

export const useAppState = defineStore('appState', () => {
  const appVersion = ref(AppConfig.version);
  const useSearch = ref<boolean>(false);

  const useMenu = ref<boolean>(false);

  const useNews = ref<boolean>(false);


  return { appVersion, useSearch, useMenu, useNews }
}, { persist: true });
