<template>
    <div id="sidebar">
        <div
            class="sidebar-item"
            @click="scrollToElement('main-home')"
            title="Home"
        >
            <img
                src="../../../assets/img/house.png"
                alt=""
                class="sidebar-item__img"
            />
        </div>
        <div
            class="sidebar-item"
            @click="scrollToElement('main-music')"
            title="Music"
        >
            <img
                src="../../../assets/img/music.png"
                alt=""
                class="sidebar-item__img"
            />
        </div>
        <div
            class="sidebar-item"
            @click="scrollToElement('mindx-main')"
            title="MindX Links"
        >
            <img
                src="../../../assets/img/mindx.jpg"
                alt=""
                class="sidebar-item__img"
            />
        </div>
    </div>
</template>
<script setup>
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}
</script>
<style>
@import url("./TheSidebar.css");
</style>
