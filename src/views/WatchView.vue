<template>
    <!-- Jumbotron -->
    <div class="p-5 text-center bg-light content">

        <h1 class="mb-3">{{ obj1 }}</h1>

        <h1 class="mb-4">watch()的三个参数</h1>
        <h2 class="mb-4">watch默认只有值发生改变才会监听</h2>
        <h4 class="mb-4">参数1：监听对象</h4>
        <h4 class="mb-4">参数2：通过回调函数，可以操作获取并操作新旧数据</h4>
        <h4 class="mb-4">参数3：当设置immediate属性为true时，无论值是否发生改变，时刻都会监听；</h4>
        <h4 class="mb-4">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            当设置immediate属性为false时，常规用法，只有值发生改变才会监听。</h4>
        <h4 class="mb-4">
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            我们监听form对象内部属性的变化，是监听不到的，需要使用deep:true
        </h4>
    </div>
    <!-- Jumbotron -->
</template>

<script setup>
import { reactive, watch } from 'vue';
const obj = reactive({
    name: '张三',
    age: 18
})

let obj1 = reactive({
    value: JSON.stringify(obj)
})


setTimeout(() => {
    obj.name = '李四',
        obj.age = 20
}, 3000)

watch(() => JSON.stringify(obj), (newVal, oldVal) => {
    obj1.value = newVal;
    console.log(newVal + ',' + oldVal)
})
</script>

<style scoped>
.content {
    height: 100vh;
}
</style>