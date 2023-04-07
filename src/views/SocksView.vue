<template>
    <!-- <div class="md:container md:mx-auto">
        <ProductDisplay></ProductDisplay>
    </div> -->

    <div class="h-16 mb-6 bg-gradient-to-r from-ocean to-leaf">

    </div>
    <div class="my-6 mx-24 p-7 border-solid border-mist bg-cloud float-fight">
        Cart {{ cart.length }}
    </div>
    <ProductDisplay :vip="vip" @add-to-cart="handleClick"></ProductDisplay>
</template>

<script setup>
import { reactive, ref } from 'vue';
import ProductDisplay from '../components/ProductDisplay.vue';
const vip = ref(true)

const cart = reactive([])
const handleClick = (id) => {
    cart.push(id)
}
</script>

<style lang="scss" scoped></style>