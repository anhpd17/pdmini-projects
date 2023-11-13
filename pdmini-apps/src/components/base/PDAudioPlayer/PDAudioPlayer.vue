<template>
    <audio-player
        ref="audioPlayerRef"
        :audio-list="props.audioList.map((elm) => elm.url)"
        :before-play="props.handleBeforePlay"
        :before-next="props.handleBeforeNext"
        :before-prev="props.handleBeforePrev"
        :theme-color="props.themeColor"
        @pause="props.onPause()"
    />
</template>
<script setup>
import { ref } from "vue";
import AudioPlayer from "@liripeng/vue-audio-player";
const audioPlayerRef = ref(null);
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
    onPause: {
        type: Function,
        required: true,
    },
    themeColor: {
        type: String,
        default: "#ff2929",
    },
});
function play() {
    audioPlayerRef.value.play();
}
function pause() {
    props.onPause();
    audioPlayerRef.value.play();
}
defineExpose({ play, pause });
</script>
<style>
@import url("./PDAudioPlayer.css");
</style>
