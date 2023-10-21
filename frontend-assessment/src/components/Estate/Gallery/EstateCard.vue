<template>
  <v-card>
    <v-img :src="estate.ThumbnailURL"></v-img>
    <ul>
      <li>
        <label class="title">{{ estate.Title }}</label>
      </li>
      <li>
        <label class="location">{{ estate.Location }}</label>
      </li>
      <li>
        <label class="bed-bath"
          >{{ estate.Bedrooms }} beds | {{ estate.Bathrooms }} baths</label
        >
      </li>
      <li>
        <label class="price">{{ formatCurrency(estate["Sale Price"]) }}</label>
      </li>
      <li class="view-details">
        <router-link :to="{ name: 'estate', params: { id: estate.Id } }">
          <v-btn @click="modalStore.closeModal" color="teal-lighten-1">
            View Details
          </v-btn>
        </router-link>
      </li>
    </ul>
  </v-card>
</template>

<script setup lang="ts">
import type { Estate } from "@/interfaces/Estate"
import { formatCurrency } from "@/utils/formatting"
import useModalStore from "@/stores/useModalStore"
import type { PropType } from "vue"

const modalStore = useModalStore()

const props = defineProps({
  estate: {
    type: Object as PropType<Estate>,
    required: true,
  },
})
</script>

<style scoped>
.view-details {
  padding: 10px;
}

ul {
  list-style: none;
  padding: 10px;
  margin: 0;
}

label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  display: block;
  text-align: left;
}
.title {
  font-size: 18px;
  font-weight: 600;
}

.location {
  font-size: 14px;
  font-weight: 300;
}

.bedrooms {
  font-size: 14px;
  font-weight: 300;
}

.price {
  font-size: 20px;
  font-weight: 600;
}
</style>
