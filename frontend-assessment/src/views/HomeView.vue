<script setup lang="ts">
import EstateGallery from "../components/Estate/Gallery/EstateGallery.vue"
import Axios from "axios"
import EstateFilters from "../components/Estate/Gallery/EstateFilters.vue"
import useEstateStore from "@/stores/useEstateStore"
import type { EstateResponse } from "@/interfaces/Estate"

const estateStore = useEstateStore()
estateStore.$reset()

Axios.get(import.meta.env.VITE_ESTATE_API_URL)
  .then((response: EstateResponse) => {
    estateStore.setEstateData(response.data)
  })
  .catch((error: any) => {
    console.error("An error occurred:", error)
  })
</script>

<template>
  <main class="estate-gallery">
    <EstateFilters />
    <EstateGallery />
  </main>
</template>

<style scoped>
.estate-gallery {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 962px;
}
</style>
