<template>
    <div>
        <h2>数组</h2>
        <h3>{{ finishedCount }}/{{ todoItems.length }} </h3>
        <li v-for="item in todoItems" :key="item.id" @click="reverseItem(item.id)" :class="{ 'isFinish': item.finished }">
            {{ item.title }}
        </li>

        <input type="text" v-model="inputValue" @keydown.enter="addItem(inputValue)" @keyup.enter="clearVal()">

    </div>
</template>

<script setup>
import useTodoList from '@/use/useList';
import { ref } from 'vue';

const { todoItems, addItem, finishedCount, reverseItem } = useTodoList()
const inputValue = ref('')

const clearVal = () => {
    inputValue.value = ''
}

</script>

<style scoped>
.isFinish {
    color: #808080;
    text-decoration: line-through;
}
</style>