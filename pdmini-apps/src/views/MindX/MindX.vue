<template lang="">
    <div id="mindx-main">
        <h1 class="mindx-title">MindX Links</h1>
        <MindxItem
            v-for="(item, index) in mindxLinks"
            :key="index"
            :title="item.title"
            :type="item.type"
            :url="item.url"
        />
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import MindxItem from "./MindxItem/MindxItem.vue";
import mindx from "../../assets/data/mindx.json";
const mindxLinks = ref([]);

onMounted(() => {
    mindxLinks.value = mindx;
});
</script>
<style>
@import url("./MindX.css");
</style>
