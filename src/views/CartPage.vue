<script setup lang="ts">
    import { reactive } from 'vue'
    import { useGlobalStore } from '@/stores/globalStore'
    import type { User, Lamp } from "@/types"

    const state = reactive({
        total: 0
    })

    for(let i=0; i<useGlobalStore().cart.length;i++) {
        state.total += useGlobalStore().cart[i].price * useGlobalStore().cart[i].quantity
    }

</script>

<template>
  <div class="container">
    <h1> Votre panier</h1>
    <table v-if="state.total">
        <tr v-for="item in useGlobalStore().cart" :key="item.id">
            <td> <img :src="item.img" :alt="item.name"></td>
            <td>{{item.name}}</td>
            <td>
                <span>Quantity</span>
                <select name="" id="" v-model="item.quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </td>
            <td>{{item.price}}€</td>
        </tr>
    </table>
    <p v-else>Votre panier est vide.</p>
    <div class="total">
        <h2>Total : {{state.total}} € </h2>
        <button class="button">Passer commande</button>
    </div>
  </div>
</template>

<style scoped>
    h1 {
        color: #B35959;
    }
    .container {
        width: 70%;
        margin: 5rem auto;
    }
    table {
        font-size: 1.25rem;
        font-weight: bold;
        width: 100%;
    }
    table img {
        background-color: rgba(245, 245, 245, 0.532);
        width: 250px;
    }
    th, td {
        padding: 15px;
        text-align: left;
    }
    td {
        border-bottom: 1px solid #ddd;
        width: 150px
    }
    select {
        margin-left: 0.75rem;
    }
    .total {
        text-align: right;
    }

</style>