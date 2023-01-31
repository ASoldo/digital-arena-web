<script setup lang="ts">
import { RouterView } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./components/navigation.vue";
import Footer from "./components/footer.vue";

AOS.init();
</script>

<template>
  <Nav />
  <div class="h-screen">
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>

</style>
