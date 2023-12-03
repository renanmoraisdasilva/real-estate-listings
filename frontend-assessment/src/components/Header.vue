<template>
  <header>
    <nav>
      <RouterLink to="/">
        <v-icon color="#333" start icon="mdi-home-silo" />
        <h1>Real Estate Listings</h1></RouterLink
      >
<RouterLink to="/testing">Testing</RouterLink>
      <v-btn color="teal-lighten-1" @click="openModal">
        <v-icon start icon="mdi-heart-outline" />{{ modalStore.getTitle }}
      </v-btn>
    </nav>
    <Modal><SavedEstateGallery /></Modal>
  </header>
</template>

<script setup lang="ts">
import Modal from "./Modal.vue"
import SavedEstateGallery from "./Estate/Saved/SavedEstateGallery.vue"
import useModalStore from "@/stores/useModalStore"

const modalStore = useModalStore()
modalStore.setTitle("Saved")

const openModal = () => {
  modalStore.openModal()
}
</script>

<style>
nav {
  width: 1000px;
  display: flex;
  justify-content: space-between;
}

header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav a {
  text-decoration: none;
  display: flex;
  align-items: center;
}

h1 {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: #333;
}

header {
  position: fixed;
  top: 0;
  background-color: white;
  display: flex;
  width: inherit;
  line-height: 1.5;
  height: 70px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
}
</style>
