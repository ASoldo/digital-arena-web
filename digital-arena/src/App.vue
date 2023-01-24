<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const text = ref();
</script>

<template>
  <h1>Welcome Page</h1>
  <InputText id="text" type="text" v-model="text" />
  <h1>{{ text }}</h1>
  <RouterView />
</template>

<style scoped>

</style>
