<script setup lang="ts">
import Interactive from "./../components/interactive.vue";
import Services from "./../components/services.vue";
</script>

<template>
  <main>
    <div class="hero h-screen w-full bg-base-200">
      <Interactive data-aos="fade-out" data-aos-delay="500" class="h-screen w-full" />
      <div class="hero-content text-center">
        <div class="max-w-md pt-52">
          <!-- <h1 class="text-5xl font-bold">Digital Arena</h1> -->
          <p class="py-6">Understanding the Client</p>
          <div data-aos="fade-up">
            <a href="#services" class="btn btn-primary shadow-xl hover:shadow-blue-500/40">Explore</a>
          </div>
        </div>
      </div>
    </div>
    <Services />
  </main>
</template>
