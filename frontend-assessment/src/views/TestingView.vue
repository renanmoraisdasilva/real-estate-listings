<template>
  <input
    type="file"
    accept=".jpg, .jpeg, .png"
    ref="avatar"
    id="avatar"
    :key="fileInputKey"
    @change="handleImageChange"
    style="display: none"
  />
  <label for="avatar">
    <img :src="img" alt="avatar" class="avatar" />
  </label>
  <v-dialog v-model="openCropper">
    <v-card>
      <cropper
        class="cropper"
        :src="rawImg"
        :stencil-props="{
          aspectRatio: 1,
        }"
        @change="handleCropperChange"
      />
      <v-card-actions>
        <v-list-item>
          <v-btn color="teal-lighten-1" block @click="handleUpload"
            >Upload</v-btn
          >
        </v-list-item>

        <v-list-item-action>
          <v-btn color="teal-lighten-1" block @click="cancelUpload"
            >Cancel</v-btn
          >
        </v-list-item-action>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Cropper } from "vue-advanced-cropper"
import "vue-advanced-cropper/dist/style.css"
type Cropper = { coordinates: any; canvas: any }
const openCropper = ref(false)
const img = ref("../../public/blank-avatar.jpg")
const rawImg = ref("")
const fileInputKey = ref(0)
const cropResults = ref<any>()

function handleImageChange(e: any) {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    rawImg.value = reader.result as string
    openCropper.value = true
  }
}

function handleCropperChange({ coordinates, canvas }: any) {
  cropResults.value = { coordinates, canvas } as Cropper
}

function handleUpload() {
  console.log("aqui", cropResults.value)
  img.value = cropResults.value.canvas.toDataURL()
  openCropper.value = false
}

function cancelUpload() {
  openCropper.value = false
  fileInputKey.value += 1
}
</script>

<style scoped>
.cropper {
  width: min-content;
  height: 400px;
}
.avatar {
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
