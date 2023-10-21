import { defineStore } from "pinia"
import type { Estate } from "@/interfaces/Estate"
import type { EstateFilters } from "@/interfaces/EstateFilters"

export default defineStore("estateStore", {
  state: () => ({
    estateData: [] as Estate[],
    filters: <EstateFilters>{
      bedrooms: [],
      bathrooms: [],
      parking: [],
      priceRange: [],
    },
    savedProperties: [] as number[],
  }),

  actions: {
    init() {
      const savedProperties = JSON.parse(
        localStorage.getItem("savedProperties") || "[]"
      )
      this.savedProperties = savedProperties
    },
    setEstateData(data: Array<Estate>) {
      this.estateData = data
    },
    setFilters(filters: EstateFilters) {
      this.filters = filters
    },
    getEstateById(id: number) {
      return this.estateData.find((item: Estate) => item.Id == id)
    },
    removeSavedEstate(id: number) {
      const savedProperties = JSON.parse(
        localStorage.getItem("savedProperties") || JSON.stringify([])
      )
      const index = savedProperties.indexOf(id)
      if (index > -1) {
        savedProperties.splice(index, 1)
      }
      localStorage.setItem("savedProperties", JSON.stringify(savedProperties))
      this.savedProperties = savedProperties
    },
    saveEstate(id: number) {
      const savedProperties = JSON.parse(
        localStorage.getItem("savedProperties") || JSON.stringify([])
      )
      if (!savedProperties.includes(id)) {
        savedProperties.push(id)
        localStorage.setItem("savedProperties", JSON.stringify(savedProperties))
      }
      this.savedProperties = savedProperties
    },
  },

  getters: {
    filteredEstates(): Estate[] {
      return this.estateData.filter((estate) => {
        if (
          this.filters.bedrooms.length != 0 &&
          !this.filters.bedrooms.includes(estate.Bedrooms)
        ) {
          return false
        }
        if (
          this.filters.bathrooms.length != 0 &&
          !this.filters.bathrooms.includes(estate.Bathrooms)
        ) {
          return false
        }
        if (
          this.filters.parking.length != 0 &&
          !this.filters.parking.includes(estate.Parking)
        ) {
          return false
        }
        if (
          estate["Sale Price"] <= this.filters.priceRange[0] ||
          estate["Sale Price"] >= this.filters.priceRange[1]
        ) {
          return false
        }
        return true
      })
    },
    savedEstates(): Estate[] {
      return this.estateData.filter((estate) =>
        this.savedProperties.includes(estate.Id)
      )
    },
  },
})
