<template>
    <div class="queue-item" :class="{ selected: isSelected }">
        <img :src="props.urlThumbnail" alt="" class="queue-thumbnail" />
        <div class="queue-item__info">
            <p class="queue-item-name">{{ props.name }}</p>
            <p class="queue-item-author">{{ props.author }}</p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    urlThumbnail: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    isSelected: {
        type: Boolean,
        default: false,
    },
});
</script>
<style>
@import url("./QueueItem.css");
</style>
