<template>
  <div class="link-item" :class="props.type">
    <a target="_blank" :href="props.url" class="link-item__container">
      <p class="link-item__title">{{ props.title }}</p>
      <span>&#62;</span>
    </a>
  </div>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>
<style>
@import url("./MindxItem.css");
</style>
