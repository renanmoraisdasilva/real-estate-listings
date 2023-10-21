<template>
  <div class="text-center">
    <v-dialog v-model="modalStore.isOpen">
      <v-card>
        <slot></slot>
        <v-card-actions>
          <v-btn color="teal-lighten-1" block @click="modalStore.closeModal"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import useModalStore from "@/stores/useModalStore"

const modalStore = useModalStore()
</script>

<style scoped>
.v-dialog {
  width: 1090px;
  align-items: center;
}
</style>
