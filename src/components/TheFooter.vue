<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="footer">
    <RouterLink to="/">
      <img src="@/assets/image/logo.svg" class="logo" alt="Logo Naee" />
    </RouterLink>
    <div class="links-div">
      <RouterLink to="">
        <span>Mentions légales</span>
      </RouterLink>
      <RouterLink to="">
        <span>Contact</span>
      </RouterLink>
      <RouterLink to="">
        <span>Localisations</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.footer {
  padding: 50px 10%;
  font-size: 17px;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
}

.links-div {
  text-align: right;
}

.links-div > * {
  margin-right: 1rem;
}

.footer a {
  color: inherit;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

@media screen and (max-width: 426px) {
  .logo {
    width: 120px;
  }
}
</style>