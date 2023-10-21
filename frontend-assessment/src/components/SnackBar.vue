<template>
  <div class="text-center">
    <v-snackbar color="success" v-model="snackBarStore.isOpen" timeout="4000">
      {{ snackBarStore.text }}
      <template v-slot:actions></template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import useSnackBarStore from "@/stores/useSnackBarStore"

const snackBarStore = useSnackBarStore()
</script>

<style scoped></style>
