<script setup lang="ts">
import Interactive from "./../components/interactive.vue";
</script>

<template>
  <main>
    <div class="hero h-screen w-full bg-base-200">
      <Interactive data-aos="fade-out" data-aos-delay="500" class="h-screen w-full" />
      <div class="hero-content text-center">
        <div class="max-w-md mt-52">
          <!-- <h1 class="text-5xl font-bold">Digital Arena</h1> -->
          <p class="py-6">Understanding the Client</p>
          <div data-aos="fade-up">
            <button class="btn btn-primary">Explore</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
