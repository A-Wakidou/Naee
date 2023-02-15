<script setup lang="ts">

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
    </div>
</template>

<style scoped>
    .navbar {
        padding-top: 70px;
        padding-bottom: 20px;
        font-size: 24px;
        border-bottom: 3px solid #FDCD41;
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

    .navbar :not(:first-child) span {
        width: 90%;
        display: block;
        padding: 5px;
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


</style>