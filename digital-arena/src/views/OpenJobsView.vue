<template>
  <div class="hero h-screen overflow-y-auto py-16 w-full bg-base-200">
    <Interactive data-aos="fade-out" class="" />
    <OpenJobs />
    <div class="hero-content text-center">
      <div class="max-w-md pt-52"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import OpenJobs from "../components/openjobs.vue";
import Interactive from "../components/interactive.vue";
</script>

<style scoped>

</style>
