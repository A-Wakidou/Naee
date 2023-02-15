<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue'
import Produits from '@/components/Produits.vue'
</script>

<template>
  <div>
    <TheNavbar />
    <RouterView />
    <Produits />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Pompiere&display=swap');

  body {
    font-family: 'Pompiere', cursive;
  }
</style>
