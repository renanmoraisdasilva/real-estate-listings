<template>
  <div class="wrapper">
    <div class="estate-details">
      <div class="heading">
        <li>
          <h1 class="title">{{ estate.Title }}</h1>
          <label class="price">{{
            formatCurrency(estate["Sale Price"])
          }}</label>
        </li>
        <li>
          <label class="location">{{ estate.Location }}</label>
          <label class="date"
            >Date Listed: {{ formatDate(estate.DateListed) }}</label
          >
        </li>
      </div>
      <v-img :src="estate.PictureURL"></v-img>
      <div class="estate-attributes">
        <div class="attribute">
          <label class="number">{{ estate.Bedrooms }}</label>
          <label class="attr-label">Beds</label>
        </div>
        <div class="attribute">
          <label class="number">{{ estate.Bathrooms }}</label>
          <label class="attr-label">Baths</label>
        </div>
        <div class="attribute">
          <label class="number">{{ estate.Parking }}</label>
          <label class="attr-label">Parking</label>
        </div>
        <div class="attribute">
          <label class="number">{{ estate.Sqft }}</label>
          <label class="attr-label">SqFt.</label>
        </div>
        <div class="attribute">
          <label class="number">{{ estate.YearBuilt }} </label>
          <label class="attr-label">Year Built</label>
        </div>
      </div>
      <li>
        <label class="description">{{ estate.Description }}</label>
      </li>
    </div>
    <div class="contact-agent">
      <v-btn @click="saveProperty" color="teal-lighten-1"
        ><v-icon start icon="mdi-heart-outline" />Save Property</v-btn
      >
      <div class="form-wrapper">
        <h2>Contact Agent</h2>
        <v-form ref="form" class="form">
          <v-text-field
            v-model="name"
            label="Name"
            required
            :rules="nameRules"
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="Email"
            required
            :rules="emailRules"
          ></v-text-field>
          <v-text-field
            v-model="phoneNumber"
            v-maska:[options]
            label="Phone Number"
            required
            :rules="phoneNumberRules"
          ></v-text-field>
          <v-textarea
            v-model="message"
            label="Message"
            required
            :rules="messageRules"
          ></v-textarea>
          <v-btn @click="contact" type="submit" color="teal-lighten-1"
            >Contact Now</v-btn
          >
        </v-form>
      </div>
    </div>
  </div>
  <SnackBar></SnackBar>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { vMaska } from "maska"
import type { Estate } from "@/interfaces/Estate"
import SnackBar from "@/components/SnackBar.vue"
import { formatCurrency, formatDate } from "@/utils/formatting"
import useSnackBarStore from "@/stores/useSnackBarStore"
import useEstateStore from "@/stores/useEstateStore"
import type { PropType } from "vue"

const form = ref<any>(null)

const snackBarStore = useSnackBarStore()
const estateStore = useEstateStore()

const options = { mask: "(###) ###-####" }

const props = defineProps({
  estate: {
    type: Object as PropType<Estate>,
    required: true,
  },
})

const name = ref("")
const email = ref("")
const message = ref("")
const phoneNumber = ref("")

const nameRules = [
  (v: string) => !!v || "Name is required",
  (v: string) => v.length <= 10 || "Name must be less than 10 characters",
]
const emailRules = [
  (v: string) => !!v || "Email is required",
  (v: string) => /.+@.+\..+/.test(v) || "Email must be valid",
]
const messageRules = [
  (v: string) => !!v || "Message is required",
  (v: string) => v.length <= 100 || "Message must be less than 100 characters",
]
const phoneNumberRules = [(v: string) => !!v || "Phone Number is required"]

function saveProperty() {
  estateStore.saveEstate(props.estate.Id)
  snackBarStore.openSnackBar("Property saved successfully")
}

function contact() {
  if (form.value?.isValid) {
    snackBarStore.openSnackBar("Message sent successfully")
    form.value.reset()
  }
}
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

ul {
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px 0;
  list-style: none;
  margin: 0;
}

.wrapper {
  display: flex;
  align-items: baseline;
  width: 1000px;
  margin: 0 auto;
  gap: 10px;
}
.estate-details {
  display: flex;
  flex-direction: column;
  width: 75%;
  gap: 20px;
}

.estate-attributes {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  padding: 15px;
  display: flex;
  justify-content: space-around;
}

.attribute {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number {
  font-size: 20px;
  font-weight: 600;
}

.attr-label {
  font-size: 14px;
  font-weight: 300;
}
.form-wrapper {
  margin-top: 25px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 10px;
  background-color: #f5f5f5;
  align-items: center;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.price {
  font-size: 20px;
  font-weight: 600;
}

.date {
  font-size: 14px;
  font-weight: 400;
}

.location {
  font-size: 14px;
  font-weight: 500;
}

.contact-agent {
  position: sticky;
  top: 90px;
  width: 25%;
  display: flex;
  flex-direction: column;
  z-index: 1;
}
</style>
