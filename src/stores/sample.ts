import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface SubSample {
  "str": String,
  "num": Number
}

export interface Sample {
  "name": String,
  "number": Number,
  "list": Array<SubSample>
}

export const useSampleStore = defineStore('sample', () => {

  const sampleData = ref<Sample>()

  function func() {
    fetch('/sample.json').then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    }).then(data => {
      console.log(data)
      sampleData.value = data as Sample
    });
  }

  func()
  return { sampleData, func }
})
