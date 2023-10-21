import { defineStore } from "pinia"

export default defineStore("snackbar-store", {
  state: () => ({
    isOpen: false,
    text: "",
  }),
  actions: {
    openSnackBar(text: string) {
      this.isOpen = true
      this.text = text
    },
    closeSnackBar() {
      this.isOpen = false
    },
  },
  getters: {},
})
