<template>
    <audio-player
        :audio-list="props.audioList.map((elm) => elm.url)"
        :before-play="props.handleBeforePlay"
        :before-next="props.handleBeforeNext"
        :before-prev="props.handleBeforePrev"
        :theme-color="props.themeColor"
    />
</template>
<script setup>
import AudioPlayer from "@liripeng/vue-audio-player";
const props = defineProps({
    audioList: {
        type: Array,
        required: true,
    },
    handleBeforePlay: {
        type: Function,
        required: true,
    },
    handleBeforeNext: {
        type: Function,
        required: true,
    },
    handleBeforePrev: {
        type: Function,
        required: true,
    },
    themeColor: {
        type: String,
        default: "#ff2929",
    },
});
</script>
<style>
@import url("./PDAudioPlayer.css");
</style>
