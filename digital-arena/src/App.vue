<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./components/navigation.vue";
import Footer from "./components/footer.vue";

const text = ref();
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
