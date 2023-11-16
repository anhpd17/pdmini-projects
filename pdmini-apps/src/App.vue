<script setup>
import TheSidebar from "./components/layout/TheSidebar/TheSidebar.vue";
import Home from "./views/Home/Home.vue";
import Music from "./views/Music/Music.vue";
import MindX from "./views/MindX/MindX.vue";

import { ref } from "vue";
const currentPage = ref(0);
</script>

<template>
    <div id="container">
        <TheSidebar />
        <main id="content">
            <Home />
            <Music />
            <MindX />
        </main>
        <button id="btn-to-top" v-show="currentPage">
            <i class="fa-solid fa-house"></i>
        </button>
    </div>
</template>

<style>
#container {
    display: flex;
    background-image: url("./assets/img/bg-dark-green.jpg");
    background-repeat: repeat-y;
    background-size: cover;
}
#content {
    height: 100vh;
}
#btn-to-top {
    position: fixed;
    bottom: 100px;
    right: 20px;
    z-index: 1000;
    border-radius: 50%;
    outline: none;
    border: none;
    font-size: 20px;
    padding: 12px 13px;
    cursor: pointer;
    background-color: var(--pd-white-opa);
    transition: all 0.25s ease;
}
#btn-to-top:hover {
    background-color: var(--pd-gray);
}
</style>
