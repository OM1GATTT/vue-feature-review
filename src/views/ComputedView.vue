<template>
    <!-- Jumbotron -->
    <div class="p-5 text-center bg-light content">

        <h1 class="mb-3">计算属性的值：{{ add }}</h1>
        <a @click="count++" class="btn btn-primary btn-lg" role="button">add</a>

        <h4 class="mb-4">被计算属性所依赖的对象,改变时,计算属性会重新计算</h4>
    </div>
    <!-- Jumbotron -->
</template>

<script setup>
import { computed, ref } from '@vue/reactivity';
const count = ref(0)
//计算属性
const add = computed(() => 1 + (count.value += 1))
</script>

<style scoped>
.content {
    height: 100vh;
}
</style>