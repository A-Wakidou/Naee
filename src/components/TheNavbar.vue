<script setup lang="ts">
    import { reactive } from 'vue'
    import { RouterLink } from 'vue-router';
    import { useGlobalStore } from '@/stores/globalStore'
    const state = reactive({
        isSideBarOpen: false
    })
</script>

<template>
    <div class="navbar">
        <RouterLink to="/">
            <img class="logo" src="@/assets/image/logo.png" alt="Logo Naee">
        </RouterLink>
        <div class="middle-links">
            <RouterLink to="#story">
                <span>Notre histoire</span>
            </RouterLink>
            <RouterLink to="#conception">
                <span>L'éco-conception</span>
            </RouterLink>
            <RouterLink to="#product">
                <span>Nos produits</span>
            </RouterLink>
            <RouterLink to="#">
                <span>Où nous trouver ?</span>
            </RouterLink>
        </div>
        <div class="right-links">
            <RouterLink to="/panier" class="cart">
                <span v-if="useGlobalStore().cart.length > 0"> {{useGlobalStore().cart.length}} </span> <img class="cart" src="@/assets/image/cart.svg" alt="Panier">
            </RouterLink>
            <RouterLink to="#">
                <span>Connexion</span>
            </RouterLink>
        </div>
        <div class="mobile">
            <img src="@/assets/image/mobile-menu-open-black.svg" alt="Ouvrir le menu">
            <img src="@/assets/image/cancel.svg" alt="Fermer le menu">
        </div>
    </div>
</template>

<style scoped>

    .logo {
        width: 250px;
    }

    .navbar {
        padding-top: 70px;
        padding-bottom: 20px;
        padding-right: 10%;
        padding-left: 10%;
        font-size: 24px;
        border-bottom: 3px solid #FDCD41;
        font-weight: bold;
        display: grid;
        grid-template-columns: 20% 50% 30%;
        align-items: center;
    }

    .navbar .middle-links a, .navbar .right-links a{
        margin-right: 1.25rem;
    }

    .navbar .right-links {
        text-align: right;
    }

    .navbar a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    .navbar .cart span {
        font-size: 1rem;
        border-radius: 50%;
        padding: 1px 5px;
        background-color: #D7C1A3;
        color: white;
        margin-right: -8px;
    }

    .cart img {
        vertical-align:bottom;
        margin-bottom: 0.25rem;
    }

    .mobile {
        display: none;
    }

  @media screen and (max-width: 480px) {
    .navbar {
        padding: 5%;
        grid-template-columns: 50% 50%;
    }
    .logo {
        width: 100px
    }
    .middle-links, .right-links {
        display: none;
    }
    .mobile {
        display: block;
    }
    .mobile {
        text-align: right;
    }
  }

</style>