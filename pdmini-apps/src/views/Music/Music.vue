<template>
    <main id="main-music">
        <div id="music-player">
            <div class="player-info">
                <h2 class="player-title">{{ playingSong.name }}</h2>
                <h4 class="player-author">{{ playingSong.author }}</h4>
            </div>
            <div class="player-thumbnail">
                <img
                    id="player-thumbnail-img"
                    :src="playingSong.links.images[0].url"
                    alt=""
                />
            </div>
            <PDAudioPlayer
                :audioList="audioList"
                themeColor="#1DB954"
                :handleBeforePlay="handleBeforePlay"
                :handleBeforeNext="handleBeforeNext"
                :handleBeforePrev="handleBeforePrev"
            />
        </div>
        <div id="music-queue">sd</div>
    </main>
</template>
<script setup>
import { ref } from "vue";
import songs from "../../assets/data/songs.json";
import PDAudioPlayer from "../../components/base/PDAudioPlayer/PDAudioPlayer.vue";
const audioList = songs;
const playingSong = ref(audioList[0]);
const isPlaying = ref(false);

function handleBeforePlay(next) {
    next();
}

function handleBeforeNext(next) {
    let currentIndex = playingSong.value.id;
    let nextIndex =
        currentIndex + 1 == audioList.length ? currentIndex : currentIndex + 1;
    playingSong.value = audioList[nextIndex];
    next();
}

function handleBeforePrev(next) {
    let currentIndex = playingSong.value.id;
    let nextIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
    playingSong.value = audioList[nextIndex];
    next();
}
</script>
<style>
@import url("./Music.css");
</style>
