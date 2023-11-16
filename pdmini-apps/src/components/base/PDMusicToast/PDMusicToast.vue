<template>
    <div class="music-toast">
        <div class="music-toast__info">
            <p class="music-toast__info--name">{{ props.playingSong.name }}</p>
            <p class="music-toast__info--author">
                {{ props.playingSong.author }}
            </p>
        </div>
        <img
            class="music-toast__icon"
            :src="props.playingSong.links.images[0].url"
        />
    </div>
</template>
<script setup>
const props = defineProps({
    playingSong: {
        type: Object,
        required: true,
    },
    isPlaying: {
        type: Boolean,
        default: false,
    },
});
</script>
<style>
@import url("./PDMusicToast.css");
</style>
