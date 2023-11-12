<template>
  <div id="sidebar">
    <router-link to="/mindx">
      <div class="sidebar-item">
        <i class="fa-solid fa-link"></i>
        <div class="sidebar-item__text">MindX Links</div>
      </div>
    </router-link>
    <router-link to="/music">
      <div class="sidebar-item">
        <i class="fa-solid fa-music"></i>
        <div class="sidebar-item__text">Nghe nhạc</div>
      </div>
    </router-link>
    <div class="sidebar-item">
      <i class="fa-solid fa-gamepad"></i>
      <div class="sidebar-item__text">Mini Games</div>
    </div>
  </div>
</template>
<script setup></script>
<style>
@import url("./TheSidebar.css");
</style>
