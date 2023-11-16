<template>
    <div id="main-home">
        <div class="home-header">
            <div class="home-header__title">
                <h1>ANHPD17</h1>
            </div>
            <div class="home-header__contact">
                <PDButton text="CONTACT ME" />
            </div>
        </div>
        <div class="home-content">
            <div class="home-content__left">
                <h1 class="home-content__left__name">PHAM DUC ANH</h1>
                <h4 class="home-content__left__job">WEB DEVELOPER</h4>
                <p class="home-content__left__desc">
                    daskdhakjshdkjahsdkjhaskjdhjsahdkasdkjahdskjahsdkjhaskjdh
                </p>
            </div>
            <div class="home-content__right">
                <img src="../../assets/img/me.jpg" alt="" />
            </div>
        </div>
    </div>
</template>
<script setup>
import PDButton from "../../components/base/PDButton/PDButton.vue";
</script>
<style>
@import url("./Home.css");
</style>
