<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div>
    <TheNavbar />
    <RouterView />
    <TheFooter />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pompiere&display=swap");

body {
  font-family: "Pompiere", cursive;
}

.button {
  background-color: #b35959;
  color: white;
  border: none;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>
