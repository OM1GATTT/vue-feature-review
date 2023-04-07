<script setup>
import { reactive, ref } from 'vue';

import socksGreenImage from '../assets/img/socks_green.jpg'
import socksBlueImage from '../assets/img/socks_blue.jpg'
import { computed } from '@vue/reactivity';
import PrettyButton from './PrettyButton.vue';


const props = defineProps({
    vip: {
        type: Boolean,
        required: true,
        default: false
    }
})

const emit = defineEmits(['add-to-cart'])

const product = ref(' Socks')
const brand = ref('Vue3')
const selectedIndex = ref(0)
const details = ref([
    '50% cotton', '30% wool', '20% polyester'
])

const variants = reactive([
    {
        id: 1001,
        color: 'green',
        image: socksGreenImage,
        quantity: 10
    },
    {
        id: 1002,
        color: 'blue',
        image: socksBlueImage,
        quantity: 5
    }
])

const title = computed(() => {
    return brand.value + '' + product.value
})

const image = computed(() => {
    return variants[selectedIndex.value].image
})

const inStock = computed(() => {
    return variants[selectedIndex.value].quantity > 0
})

const price = computed(() => {
    if (props.vip) {
        return 'Free'
    }
    return 99.99
})

const addToCart = () => {
    emit('add-to-cart', variants[selectedIndex.value].id)
    variants[selectedIndex.value].quantity--
}

const changeIndex = (index) => {
    selectedIndex.value = index
}
</script>

<template>
    <div class="flex justify-around">
        <div class="flex-1">
            <img :src="image" alt="" class="w-[60%] border-4 border-solid border-ocean rounded-xl">
        </div>
        <div class="flex-1 text-2xl text-left">
            <p class="text-purple">{{ title }}</p>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>price: {{ price }}</p>

            <div v-for="(variant, index) in variants" class="w-12 h-12 my-2 rounded-full" :key="variant.id" :index="index"
                :style="{ backgroundColor: variant.color }" @mouseover="changeIndex(index)">
            </div>
            <PrettyButton :isActive="inStock" @btn-click="addToCart">
                <!-- 单个插槽使用 #default -->
                <!-- <template #default>
                                <p>Add to Cart</p>
                            </template> -->
                <template #left>
                    <p>Add to Cart</p>
                </template>
                <!-- <template #right>
                                <p>---</p>
                            </template> -->
            </PrettyButton>

        </div>


    </div>
</template>

<style scoped></style>