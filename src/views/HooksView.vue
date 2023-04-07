<template>
    <div class="container h-auto">
        <div class="box-border w-8/12 p-4  m-auto mt-5 bg-gray rounded-[15px]">
            <div class=" mb-[30px] mt-14 text-center">
                <p>MyToDos</p>
            </div>

            <div class="text-center">
                <input class=" p-1 border-dotted border-2 border-purple rounded-full" type="text" v-model="inputValue"
                    @keydown.enter="addItem(inputValue)" @keyup.enter="clearVal()">
                <button class=" ml-3 border-dashed border-2 border-purple rounded-lg px-3"
                    @click="addItem(inputValue), clearVal()">添加</button>
            </div>

            <div>
                <div class=" text-center mt-3 mb-2">待办事项助手</div>

                <div v-for="item in todoList.list" :key="item.id" class="flex flex-row">
                    <div class="flex-1 float-left">
                        {{ item.id }}.
                    </div>

                    <div class="flex-1 float-right " :class="{ 'line-through': item.finished }">
                        <input type="checkbox" :checked="item.finished" @click="reverseItem(item.id)">{{ item.title }}
                    </div>

                </div>

                <div class=" text-center mt-2">共有{{ todoItems.length }}项</div>

            </div>

            <div>
                <div class=" text-center" v-if="finishedCount == 0">
                    <ListButton @btn-click="showAll"><template #default>全部</template></ListButton>
                    <ListButton @btn-click="showWillDo"><template #default>待完成</template></ListButton>
                    <ListButton @btn-click="showDone"><template #default>已完成</template></ListButton>
                </div>
                <div class=" text-center" v-else>
                    <ListButton @btn-click="showAll"><template #default>全部</template></ListButton>
                    <ListButton @btn-click="showWillDo"><template #default>待完成</template></ListButton>
                    <ListButton @btn-click="showDone"><template #default>已完成</template></ListButton>
                    <ListButton @btn-click="clearAll" @click="showAll"><template #default>清除完成</template></ListButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import useTodoList from '../use/useList';
import ListButton from '../components/ListButton.vue';

const { todoItems, addItem, finishedCount, reverseItem, clearAll } = useTodoList()

const inputValue = ref('')

const todoList = reactive({
    list: []
})
todoList.list = todoItems
const clearVal = () => {
    inputValue.value = ''
}

const showWillDo = () => {
    todoList.list = todoItems.filter((item) => { return item.finished == false })
}
const showDone = () => {
    todoList.list = todoItems.filter((item) => { return item.finished == true })
}
const showAll = () => {
    todoList.list = todoItems
}

</script>

<style scoped></style>