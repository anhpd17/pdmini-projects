<template>
    <button class="btn-primary">{{ props.text }}</button>
</template>
<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "",
    },
});
</script>
<style>
.btn-primary {
    border: none;
    outline: none;
    padding: 16px 28px;
    background-color: var(--pd-orange-500);
    border-radius: 30px;
    font-size: 20px;
    color: var(--pd-white);
    font-weight: 500;
}
</style>
