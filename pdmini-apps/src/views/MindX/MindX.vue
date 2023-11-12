<template lang="">
  <main id="mindx-main">
    <MindxItem
      v-for="(item, index) in mindxLinks"
      :key="index"
      :title="item.title"
      :type="item.type"
      :url="item.url"
    />
  </main>
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
