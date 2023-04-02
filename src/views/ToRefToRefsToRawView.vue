<template>
    <!-- Jumbotron -->
    <div class="p-5 text-center bg-light content">
        <h1 class="mb-3">初始obj: { "name": "张三", "age": 18 }</h1>

        <h2>在nameRef.value = '李四'后</h2>
        <h4 class="mb-4">被toRef解构出来的name: {{ nameRef }}</h4>
        <h4 class="mb-4">被toRef解构出来的age: {{ ageRef }}</h4>
        <h4 class="mb-4">被toRefs解构出来的name: {{ name }}</h4>
        <h4 class="mb-4">被toRefs解构出来的age: {{ age }}</h4>
        <h4 class="mb-4">被toRaw解构出来的普通对象: {{ objRaw }}</h4>

        <h1 class="mb-3">总结：</h1>
        <h4 class="mb-4">toRef,toRefs解构出来的仍是响应式数据,toRaw则返回对应的普通对象</h4>
        <h4 class="mb-4">被ref解构出来的对象,修改其数值,初始对象也会被改变,toRaw则不会</h4>
        <h4 class="mb-4">toRef和toRefs结构出来的对象都会被ObjectRefImpl包裹,使用时需要value</h4>
        <h4 class="mb-4">toRefs结构出来的对象名要和被结构对象的属性名相同</h4>

    </div>
    <!-- Jumbotron -->
</template>

<script setup>
import { reactive, toRef, toRefs, toRaw } from 'vue'
const obj = reactive({
    name: '张三',
    age: 18
})

const nameRef = toRef(obj, 'name')
const ageRef = toRef(obj, 'age')

nameRef.value = '李四'
const { name, age } = toRefs(obj)



const objRaw = toRaw(obj)

console.log(nameRef)
console.log(ageRef)
console.log(name)
console.log(age)
console.log(objRaw)

</script>

<style scoped>
.content {
    height: 100vh;
}
</style>