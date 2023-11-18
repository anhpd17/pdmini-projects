<template>
    <div id="main-home">
        <div class="home-header">
            <div class="home-header__title">
                <h1>ANHPD17</h1>
            </div>
            <div class="home-header__contact">
                <!-- <PDButton text="CONTACT ME" /> -->
            </div>
        </div>
        <div class="home-content">
            <div class="home-content__left">
                <h1 class="home-content__left__name">PHAM DUC ANH</h1>
                <h4 class="home-content__left__job">
                    <VueWriter
                        :array="['Web Developer', 'Programming Teacher']"
                        :typeSpeed="70"
                        :eraseSpeed="50"
                        :delay="2000"
                    />
                </h4>
                <p class="home-content__left__desc">
                    Tôi là người khó tính, hướng nội, hay cười và nói nhiều
                </p>
                <PDButton text="About Me" />
            </div>
            <div class="home-content__right">
                <img src="../../assets/img/me.jpg" alt="" />
            </div>
        </div>
    </div>
</template>
<script setup>
import PDButton from "../../components/base/PDButton/PDButton.vue";
import VueWriter from "vue-writer";
</script>
<style>
@import url("./Home.css");
</style>
