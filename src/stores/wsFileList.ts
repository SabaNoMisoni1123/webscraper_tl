import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface WsFileData {
  "dataName": string,
  "fileName": string,
  "show": boolean
}

export const useWsFileListStore = defineStore('wsFileList', () => {

  const fileList = ref<Array<WsFileData>>()

  function getWsFileList() {
    fetch('/wsFiles.json').then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    }).then(data => {
      console.log(data)
      fileList.value = data as Array<WsFileData>
    })
  }


  getWsFileList()

  const top = computed(() => {
    return fileList.value![0]
  })

  return { fileList, getWsFileList, top }
})
