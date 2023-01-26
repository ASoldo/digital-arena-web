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
  <div class="relative">
    <div class="fixed w-full z-10">
      <Nav />
    </div>
  </div>
  <!-- <div data-aos="fade-up"> -->
  <!--   <button class="btn">Hello daisyui</button> -->
  <!-- </div> -->
  <div class="h-screen">
    <RouterView />
  </div>
  <div class="flex flex-col">
    <div class="mt-auto w-full">
      <Footer />
    </div>
  </div>
</template>

<style scoped>

</style>
