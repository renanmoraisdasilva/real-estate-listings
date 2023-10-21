import { defineStore } from "pinia"
import useEstateStore from "./useEstateStore"
import type { Estate } from "@/interfaces/Estate"

export default defineStore("paginationStore", {
  state: () => ({
    itemsPerPage: 8,
    currentPage: 1,
  }),

  actions: {
    setCurrentPage(page: number) {
      this.currentPage = page
    },
    setItemsPerPage(itemsPerPage: number) {
      this.itemsPerPage = itemsPerPage
    },
  },

  getters: {
    totalPages(): string | number | undefined {
      const estateStore = useEstateStore()
      if (!estateStore.filteredEstates) return 0
      return Math.ceil(estateStore.filteredEstates.length / this.itemsPerPage)
    },
    paginatedEstates(): Array<Estate> {
      const estateStore = useEstateStore()
      if (!estateStore.filteredEstates) return []
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return estateStore.filteredEstates.slice(startIndex, endIndex)
    },
    getCurrentPage(): number {
      return this.currentPage
    },
  },
})
