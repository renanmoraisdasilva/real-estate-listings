import { defineStore } from "pinia"

export default defineStore("modalStore", {
  state: () => ({
    isOpen: false,
    title: "",
  }),

  actions: {
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
    },
    setTitle(title: string) {
      this.title = title
    },
  },
  getters: {
    getTitle(): string {
      return this.title
    },
  },
})
