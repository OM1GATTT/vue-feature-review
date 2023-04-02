<template>
    <!-- Jumbotron -->
    <div class="p-5 text-center bg-light content">

        <h1 class="mb-4">watchEffect()的监听对象的值初始化时，会监听，无论是否发生改变</h1>
    </div>
    <!-- Jumbotron -->
</template>

<script setup>
import { ref, watchEffect } from 'vue';


//watchEffect,会立即监听
let num = ref(100)

setTimeout(() => {
    num.value += 50;
}, 3000)

watchEffect(() => {
    console.log('num 的值:' + num.value);
})
</script>

<style scoped>
.content {
    height: 100vh;
}
</style>