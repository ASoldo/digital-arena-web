<script setup lang="ts">
import Interactive from "./../components/interactive.vue";
import Services from "./../components/services.vue";
</script>

<template>
  <main>
    <div class="hero h-screen w-full bg-base-200">
      <Interactive data-aos="fade-out" class="h-screen w-full z-0" />
      <!-- <h1 class="text-5xl font-bold">Digital Arena</h1> -->
      <p class="z-40 text-center text-3xl lg:text-9xl py-3 bg-clip-text text-transparent bg-gradient-to-b from-light-logo-color to-transparent tracking-tighter font-thin neon-light"
        style="text-shadow: 0px 4px 10px #7dc244" data-aos="fade-up" data-aos-delay="250">
        Understanding the Client
      </p>
      <div class="lg:pt-64 pt-32 z-10" data-aos="fade-up" data-aos-delay="500">
        <a href="#services" class="btn btn-primary shadow-xl hover:shadow-blue-500/40">Explore</a>
      </div>
    </div>
    <Services />
  </main>
</template>
<style>
@keyframes color-change {
  0% {
    background-color: violet;
  }

  50% {
    background-color: blue;
  }

  100% {
    background-color: violet;
  }
}

.neon-light {
  animation: color-change infinite 5s ease-in-out;
}
</style>
