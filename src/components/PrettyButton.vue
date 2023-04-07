<template>
    <button class="px-10 py-4 text-center text-cloud bg-purple rounded-[5px]"
        :class="isActive ? ['bg-midnight', 'cursor-pointer'] : ['bg-mist', 'cursor-not-allowed']" :disabled="!isActive"
        @click="emit('btn-click')">
        <slot name="left"></slot>
        <slot name="right"></slot>
    </button>
</template>

<script setup>
const { isActive } = defineProps({
    isActive: {
        type: Boolean,
        required: true
    }
})

const emit = defineEmits(['btn-click'])
</script>

<style scoped></style>