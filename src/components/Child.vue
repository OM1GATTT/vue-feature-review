<template>
    <!-- Jumbotron -->
    <div class="p-5 text-center bg-light content">
        <div>
            <h1>{{ msg }}</h1>
            <h3>{{ list }}</h3>
            <div>
                <a @click="onChangeMsg" class="btn btn-primary btn-lg bt" role="button">改变Msg</a>
                <a @click="onChangeList" class="btn btn-primary btn-lg" role="button">改变List</a>
            </div>
        </div>
    </div>
    <!-- Jumbotron -->
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    msg: String,
    list: Array
})

//通过defineEmits，注册了一个自定义事件
const emits = defineEmits(['changeMsg', 'changeList'])
//点击按钮的时候，触发emit调用我们注册的事件，同时传参
const onChangeMsg = () => {
    emits('changeMsg', 'hello world')
}

const onChangeList = () => {
    emits('changeList', [1, 2, 3, 4])
}
</script>

<style scoped>
.bt {
    margin-right: 20px;
}

.content {
    height: 100vh;
}
</style>