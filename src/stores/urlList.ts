import { ref } from 'vue'
import { defineStore } from 'pinia'
// import Urls from '@/assets/urls.json'

export interface UrlData {
  "name": string,
  "url": string
}

export const useUrlListStore = defineStore('urlList', () => {
  const uList = ref<Array<UrlData>>();

  function getUrlList() {
    fetch('/data/urlList.json').then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    }).then(data => {
      console.log(data)
      uList.value = data as Array<UrlData>
    })
  }

  return { uList, getUrlList }
})
