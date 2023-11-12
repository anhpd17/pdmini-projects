<script setup>
import TheHeader from "./components/layout/TheHeader/TheHeader.vue";
import TheSidebar from "./components/layout/TheSidebar/TheSidebar.vue";
import Home from "./views/Home/Home.vue";
</script>

<template>
  <TheHeader />
  <main id="container">
    <TheSidebar />
    <router-view></router-view>
  </main>
</template>

<style>
#container {
  display: flex;
}
</style>
