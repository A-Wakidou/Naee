<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import { useGlobalStore } from '@/stores/globalStore'
</script>

<template>
    <div class="navbar">
        <RouterLink to="/" class="logo">
            <img src="@/assets/image/logo.png" alt="Logo Naee">
        </RouterLink>
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
        <RouterLink to="/panier">
            <span v-if="useGlobalStore().cart.length > 0"> {{useGlobalStore().cart.length}} </span> <img class="cart" src="@/assets/image/cart.svg" alt="Panier">
        </RouterLink>
    </div>
</template>

<style scoped>
    .navbar {
        padding-top: 70px;
        padding-bottom: 20px;
        font-size: 24px;
        border-bottom: 3px solid #FDCD41;
        font-weight: bold;
    }

    .navbar a {
        color: inherit;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
    }

    .navbar a:not(:first-child) {
        width: 200px;
    }

    .navbar a:not(:first-child) :hover {
        background-color: rgba(245, 245, 245, 0.622);
        border-radius: 3px;
    }

    .navbar :not(:first-child, :last-child) span {
        width: 90%;
        display: block;
        padding: 5px;
    }

    .navbar :last-child span {
        font-size: 1rem;
        border-radius: 50%;
        padding: 1px 5px;
        background-color: #D7C1A3;
        color: white;
        margin-right: -8px;
    }

    .cart {
        vertical-align:bottom;
        margin-bottom: 0.25rem;
    }

    .logo {
        width: inherit;
        padding: 0 100px;
        display: inline;
    }

    .logo img {
        width: 250px;
        height:50px;
    }

    span {
        display: inline;
    }


</style>