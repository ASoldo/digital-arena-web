<script setup lang="ts">
import Interactive from "./../components/interactive.vue";
import Services from "./../components/services.vue";
</script>

<template>
  <main>
    <div class="hero h-screen w-full bg-base-200">
      <div class="bottom-16 mb-5 absolute" data-aos="fade-up" data-aos-delay="500">
        <a href="#services" class="btn btn-primary shadow-xl hover:shadow-blue-500/40">Explore</a>
      </div>
      <Interactive data-aos="fade-out" class="h-screen w-full" />
      <!-- <h1 class="text-5xl font-bold">Digital Arena</h1> -->
      <!-- <p class="py-6 sm:pt-12" data-aos="fade-up" data-aos-delay="250"> -->
      <!--   Understanding the Client -->
      <!-- </p> -->
    </div>
    <Services />
  </main>
</template>
