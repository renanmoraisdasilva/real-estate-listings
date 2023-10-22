<template>
  <main class="estate-detail">
    <EstateDetail :estate="estate" v-if="estate"></EstateDetail>
  </main>
</template>

<script setup lang="ts">
import { useRoute, onBeforeRouteUpdate } from "vue-router"
import { ref, watch, onMounted } from "vue"
import useEstateStore from "@/stores/useEstateStore"
import Axios from "axios"
import EstateDetail from "@/components/Estate/Detail/EstateDetail.vue"
import type { EstateResponse } from "@/interfaces/Estate"

const route = useRoute()
const estateStore = useEstateStore()
var estate = ref()

const getEstateData = async () => {
  const estateId = Number(route.params.id)
  try {
    const response = await Axios.get(
      import.meta.env.VITE_ESTATE_API_URL
    )
    estateStore.setEstateData(response.data)
    estate.value = estateStore.getEstateById(estateId)
  } catch (error) {
    console.error("An error occurred:", error)
  }
}

watch(
  () => route.params.id,
  () => {
    getEstateData()
  }
)

onMounted(() => {
  getEstateData()
})
</script>

<style scoped>
.estate-detail {
  padding-bottom: 40px;
  display: flex;
}
</style>
