<script setup lang="ts">
import { useRouter } from 'vue-router';
import AppBtn from "../components/btn/AppBtn.vue";
const router = useRouter()
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen min-w-screen gap-4">
    <img width="20%" src="../assets/imgs/error-404.png">
    <div class="text-xl">OPPS...!!!!</div>
    <div>We should go back.</div>
    <AppBtn label="Go home" @click="router.push({name: 'home'})"/>
  </div>
</template>
