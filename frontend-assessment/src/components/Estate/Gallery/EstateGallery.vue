<template>
  <div class="gallery">
    <v-row>
      <v-col
        justify="center"
        align="center"
        cols="3"
        v-for="(estate, index) in paginationStore.paginatedEstates"
        :key="index"
      >
        <EstateCard :estate="estate"></EstateCard>
      </v-col>
    </v-row>
    <div
      class="no-estates"
      v-if="paginationStore.paginatedEstates.length === 0"
    >
      <v-icon start icon="mdi-home-alert-outline" />
      No estates found.
    </div>
    <v-pagination
      v-model="paginationStore.currentPage"
      :length="paginationStore.totalPages"
    ></v-pagination>
  </div>
</template>

<script setup lang="ts">
import EstateCard from "./EstateCard.vue"
import usePaginationStore from "@/stores/usePaginationStore"

const paginationStore = usePaginationStore()
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 932px;
  margin: 10px 0 20px 0;
  width: 1000px !important;
}

.no-estates {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 20px;
  font-weight: 600;
}
</style>
