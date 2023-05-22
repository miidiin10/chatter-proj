<template>
  <header>
    <nav class="container">
      <div class="brand">
        <router-link class="header" :to="{ name: 'Home' }">Chatter</router-link>
      </div>
      <div class="nav-links">
        <ul>
          <router-links class="links" to="#">Home</router-links>
          <router-links class="links" to="#">Blogs</router-links>
          <router-links class="links" to="#">Create Post</router-links>
          <router-links class="links" to="#">Login/Register</router-links>
        </ul>
      </div>
    </nav>
    <menuIcon />
    <transition class="mobile-nav">
        <ul>
          <router-links class="links" to="#">Home</router-links>
          <router-links class="links" to="#">Blogs</router-links>
          <router-links class="links" to="#">Create Post</router-links>
          <router-links class="links" to="#">Login/Register</router-links>
        </ul>
    </transition>
  </header>
</template>
<script lang="ts">
import menuIcon from "../assets/icons/icons8-menu.svg";

export default {
    name: "navbar",
    components: {
        menuIcon,
    },
};
</script>
<style scoped></style>
