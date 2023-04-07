<template>
    <button class=" mx-2 border-dashed border-2 border-purple rounded-lg px-3" @click="emit('btn-click')">
        <slot></slot>
    </button>
</template>

<script setup>
const emit = defineEmits(['btn-click'])
</script>

<style scoped></style>