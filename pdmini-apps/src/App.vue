<script setup>
import TheSidebar from "./components/layout/TheSidebar/TheSidebar.vue";
import Home from "./views/Home/Home.vue";
import Music from "./views/Music/Music.vue";
import MindX from "./views/MindX/MindX.vue";
</script>

<template>
    <div id="container">
        <TheSidebar />
        <main id="content">
            <Home />
            <Music />
            <MindX />
        </main>
    </div>
</template>

<style>
#container {
    display: flex;
    background-image: url("./assets/img/bg-dark-green.jpg");
    background-repeat: repeat-y;
    background-size: cover;
}
</style>
