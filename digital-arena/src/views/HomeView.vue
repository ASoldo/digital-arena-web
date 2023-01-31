<script setup lang="ts">
import Interactive from "./../components/interactive.vue";
import Services from "./../components/services.vue";
</script>

<template>
  <main>
    <div class="hero h-screen w-full bg-base-200">
      <Interactive data-aos="fade-out" class="h-screen w-full z-0" />
      <!-- <h1 class="text-5xl font-bold">Digital Arena</h1> -->
      <p class="z-40 text-3xl lg:text-9xl py-3 bg-clip-text text-transparent bg-gradient-to-b from-light-logo-color to-transparent tracking-tighter font-thin"
        style="text-shadow: 0px 4px 10px #7dc244" data-aos="fade-up" data-aos-delay="250">
        Understanding the Client
      </p>
      <div class="bottom-1/3 my-5 absolute" data-aos="fade-up" data-aos-delay="500">
        <a href="#services" class="btn btn-primary shadow-xl hover:shadow-blue-500/40">Explore</a>
      </div>
    </div>
    <Services />
  </main>
</template>
<style>
.bg-gradient-to-r {
  background-image: linear-gradient(to right, teal-400, pink-500, purple-500);
}

.transition {
  transition: background-color 300ms ease-linear;
}
</style>
