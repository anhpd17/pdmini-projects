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
@import url("./PDButton.css");
</style>
