<template>
  <div class="filters">
    <v-select
      density="compact"
      v-model="bedroomFilter"
      :items="[1, 2, 3, 4, 5]"
      label="Bedrooms"
      multiple
      chips
    ></v-select>
    <v-select
      density="compact"
      v-model="bathroomFilter"
      :items="[1, 2, 3, 4, 5]"
      label="Bathrooms"
      multiple
      chips
    ></v-select>
    <v-select
      density="compact"
      v-model="parkingFilter"
      :items="[1, 2, 3, 4, 5]"
      label="Parking"
      multiple
      chips
    ></v-select>
    <div class="price-range">
      <label>Price Range:</label>
      <v-range-slider
        v-model="priceRange"
        :max="1000000"
        :min="0"
        step="10000"
        thumb-label="always"
      >
        <template v-slot:thumb-label="{ modelValue }">
          {{ formatCurrency(modelValue) }}
        </template></v-range-slider
      >
    </div>

    <v-btn @click="search" color="teal-lighten-1"
      ><v-icon start icon="mdi-home-search" />Search</v-btn
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import useEstateStore from "@/stores/useEstateStore"
import usePaginationStore from "@/stores/usePaginationStore"
import { formatCurrency } from "@/utils/formatting"

const estateStore = useEstateStore()
const paginationStore = usePaginationStore()

const bedroomFilter = ref<number[]>([])
const bathroomFilter = ref<number[]>([])
const parkingFilter = ref<number[]>([])
const priceRange = ref<number[]>([0, 800000])

function search() {
  paginationStore.setCurrentPage(1)
  estateStore.setFilters({
    bedrooms: bedroomFilter.value,
    bathrooms: bathroomFilter.value,
    parking: parkingFilter.value,
    priceRange: priceRange.value,
  })
}
</script>

<style scoped>
.filters {
  display: flex;
  gap: 20px;
  align-items: center;
  width: 1000px !important;
  padding-top: 20px;
}

.price-range {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 300px;
}

.v-slider-thumb__surface {
  height: 10px !important;
  width: 10px;
}

.v-btn {
  margin-bottom: 20px;
}
.v-select {
  width: 190px;
}
</style>
