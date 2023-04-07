import { computed, reactive } from "vue";


export default function useTodoList() {

    //定义了响应式数据
    const todoItems = reactive([
        {
            id: 1,
            title: '吃饭',
            finished: false
        },
        {
            id: 2,
            title: '上课',
            finished: false
        },
        {
            id: 3,
            title: '运动',
            finished: true
        },
        {
            id: 4,
            title: '睡觉',
            finished: true
        },
    ])



    // const printList = () => {

    // }

    const addItem = (val) => {
        todoItems.push({
            id: todoItems.length + 1,
            title: val,
            finished: false
        })
    }

    const finishedCount = computed(() => {

        return todoItems.filter((item) => item.finished === true).length
    })

    const reverseItem = (val) => {
        console.log(val)
        console.log(todoItems[val - 1])
        todoItems[val - 1].finished = !(todoItems[val - 1].finished)
    }
    const clearAll = () => {
        todoItems.forEach((item) => {
            item.finished = false
        })
    }


    return { todoItems, addItem, finishedCount, reverseItem, clearAll }
}