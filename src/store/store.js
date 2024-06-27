import {defineStore} from 'pinia'
import {ref} from "vue";

export const useStore = defineStore('counter', () => {
  const errorForm = ref(false)
  const isLoadingForm = ref(false)


  function setErrorFrom(value) {
    errorForm.value = value
  }

  function setLoadingForm(value) {
    isLoadingForm.value = value
  }

  return {errorForm, setErrorFrom, isLoadingForm, setLoadingForm}
})