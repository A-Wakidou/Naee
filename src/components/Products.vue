<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div @click="$emit('emit-product',0)">
            <img src="@/assets/image/diane1.svg" alt="Diane1">
            <p>En savoir plus ></p>
        </div>
        <div @click="$emit('emit-product',1)">
            <img src="@/assets/image/diane2.svg" alt="Diane2">
            <p>En savoir plus ></p>
        </div>
        <div @click="$emit('emit-product',2)">
            <img src="@/assets/image/diane3.svg" alt="Diane3">
            <p>En savoir plus ></p>
        </div>
    </div>
</template>


<style scoped>
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        text-align: center;
    }
    .container div:first-child {
        background-color: #E7DCC1;
    }
    .container div:nth-child(2) {
        background-color: #E7CEC1;
    }
    .container div:nth-child(3) {
        background-color: #D9E7C1;
    }
    .container div img {
        width: 100%;
        cursor: pointer;
    }
    .container div p {
        color: white;
        font-weight: 500;
        font-size: 1.5rem;
    }
</style>