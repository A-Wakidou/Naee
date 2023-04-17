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
@import url("https://fonts.cdnfonts.com/css/avenir");

body {
  font-family: "Avenir", serif;
}

@font-face {
  font-family: Gliker;
  src: url("./assets/font-glicker/Gliker-Regular.woff");
}

h1,
h2 {
  font-family: Gliker;
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
