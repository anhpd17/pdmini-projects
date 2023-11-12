<template>
  <header id="header">
    <div class="header-logo">PD MiniApps</div>
    <nav class="nav-menu">
      <router-link to="/">
        <div class="nav-item">
          <i class="fa-solid fa-house"></i>
          <span class="nav-item__text">Home</span>
        </div>
      </router-link>
      <div class="nav-item">
        <i class="fa-solid fa-user"></i>
        <span class="nav-item__text">About</span>
      </div>
      <div class="nav-item">
        <i class="fa-solid fa-envelope"></i>
        <span class="nav-item__text">Contact</span>
      </div>
    </nav>
  </header>
</template>
<script setup></script>
<style>
@import url("./TheHeader.css");
</style>
