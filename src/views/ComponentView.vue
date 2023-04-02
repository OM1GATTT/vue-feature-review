<template>
    <div>
        <Child :msg="msg" :list="list" @changeMsg="changeMsg" @changeList="changeList"></Child>
    </div>
</template>

<script setup>


import { ref, reactive } from 'vue'
import Child from '../components/Child.vue';
const msg = ref('hello')
let list = reactive([1, 2, 3])

const changeMsg = (str) => {
    msg.value = str
}

const changeList = (str) => {
    console.log(list)
    list.length = 0
    list.push(...str)
    console.log(list)
}


</script>

<style scoped></style>