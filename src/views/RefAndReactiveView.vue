<template>
    <!-- Jumbotron -->
    <div class="p-5 text-center bg-light content">
        <h1 class="mb-3">ref: {{ num1 }}</h1>
        <h1 class="mb-3">reactive: {{ num2 }}</h1>
        <!-- <a class="btn btn-primary btn-lg" href="https://mdbootstrap.com/learn/mdb-foundations/basics/introduction/"
            role="button">Learn with me</a> -->
        <h4 class="mb-4">虽然显示ref和reactive对象时看不出区别,但是在控制台可以看到ref对象是被RefImpl包裹的</h4>
        <h4 class="mb-4">ref在使用时需要用.value,而reactive不需要</h4>
        <h4 class="mb-4">reactive更推荐去定义复杂的数据类型;ref 更推荐定义基本类型</h4>
    </div>
    <!-- Jumbotron -->
</template>

<script setup>
import { ref, reactive, watchEffect } from 'vue'
const num1 = ref({
    name: '张三',
    val: '123'
})
const num2 = reactive({
    name: '张三',
    val: '123'
})

console.log(num1)
console.log(num2)
</script>

<style scoped>
.content {
    height: 100vh;
}
</style>