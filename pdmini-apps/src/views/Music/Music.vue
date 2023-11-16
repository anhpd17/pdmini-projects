<template>
    <div id="main-music">
        <div id="music-player">
            <div class="player-info">
                <h2 class="player-title">{{ playingSong.name }}</h2>
                <h4 class="player-author">{{ playingSong.author }}</h4>
            </div>
            <div class="player-thumbnail">
                <img
                    id="player-thumbnail-img"
                    :class="{ thumbnailRotate: isPlaying }"
                    :src="playingSong.links.images[0].url"
                    alt=""
                />
            </div>
            <PDAudioPlayer
                ref="pdPlayerRef"
                :audioList="[playingSong]"
                themeColor="#089740"
                :handleBeforePlay="handleBeforePlay"
                :handleBeforeNext="handleBeforeNext"
                :handleBeforePrev="handleBeforePrev"
                :onPause="onPause"
            />
        </div>
        <div id="music-queue">
            <h2 class="queue-title">Danh sách phát</h2>
            <div class="queue-list">
                <QueueItem
                    v-for="(item, index) in audioList"
                    :key="index"
                    :urlThumbnail="item.links.images[0].url"
                    :name="item.name"
                    :author="item.author"
                    :isSelected="playingSong.id == item.id"
                    @click.stop="selectSongOnQueue(item, handleBeforePlay)"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import songs from "../../assets/data/songs.json";
import PDAudioPlayer from "../../components/base/PDAudioPlayer/PDAudioPlayer.vue";
import QueueItem from "../../components/base/QueueItem/QueueItem.vue";
const audioList = songs;
const playingSong = ref(audioList[0]);
const pdPlayerRef = ref(null);
const isPlaying = ref(false);

function handleBeforePlay(next) {
    isPlaying.value = true;
    next();
}
function onPause() {
    isPlaying.value = false;
}

function handleBeforeNext(next) {
    let currentIndex = playingSong.value.id;
    let nextIndex =
        currentIndex + 1 == audioList.length ? currentIndex : currentIndex + 1;
    playingSong.value = audioList[nextIndex];
    isPlaying.value = true;
    next();
}

function handleBeforePrev(next) {
    let currentIndex = playingSong.value.id;
    let nextIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
    playingSong.value = audioList[nextIndex];
    isPlaying.value = true;
    next();
}

function selectSongOnQueue(item) {
    playingSong.value = item;
    pdPlayerRef.value.pause();
    setTimeout(() => {
        isPlaying.value = true;
        pdPlayerRef.value.play();
    }, 1000);
}
</script>
<style>
@import url("./Music.css");
</style>
