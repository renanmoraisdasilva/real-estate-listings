<template>
  <div class="gallery">
    <label class="title">Saved Estates</label>
    <v-row>
      <v-col
        justify="center"
        align="center"
        cols="3"
        v-for="(estate, index) in paginatedEstates"
        :key="index"
      >
        <EstateCard :estate="estate"></EstateCard>
        <v-btn density="compact" color="red" @click="removeEstate(estate.Id)"
          >Remove</v-btn
        >
      </v-col>
    </v-row>
    <div class="no-estates" v-if="paginatedEstates.length === 0">
      <v-icon start icon="mdi-home-alert-outline" />No estates in your saved
      list
    </div>
    <v-pagination v-model="currentPage" :length="totalPages"></v-pagination>
  </div>
</template>

<script setup lang="ts">
import EstateCard from "../Gallery/EstateCard.vue"
import useEstateStore from "@/stores/useEstateStore"
import { ref, computed } from "vue"

const estateStore = useEstateStore()
estateStore.init()

function removeEstate(id: number) {
  estateStore.removeSavedEstate(id)
}

const currentPage = ref(1)

const itemsPerPage = 4

const totalPages = computed(() => {
  if (!estateStore.savedEstates) return 0
  return Math.ceil(estateStore.savedEstates.length / itemsPerPage)
})

const paginatedEstates = computed(() => {
  if (!estateStore.savedEstates) return []
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return estateStore.savedEstates.slice(startIndex, endIndex)
})
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px 20px 20px 20px;
  width: 1000px !important;
}
.title {
  font-size: 18px;
  font-weight: 600;
}

.v-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.no-estates {
  min-height: 474px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
}
</style>
