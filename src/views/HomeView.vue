<template>
  <div class="home">
    <main>
      <h2>ToEat</h2>
    </main>
    <nav-bar></nav-bar>
    <NavBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
  },
});
</script>
