<script setup lang="ts">
import { ref } from 'vue';
import AppBtn from "../components/btn/AppBtn.vue";
import AppInput from "../components/input/AppInput.vue";
const testInput = ref<string>('')
</script>

<template>
  <main>
    <AppBtn label="Button" />
    <AppBtn label="Button" disabled />
    <AppBtn label="Button" outline disabled/>
    <AppBtn label="Button" outline/>
    <AppInput v-model="testInput" placeholder="test placeholder" label="Label"/>
    <AppInput v-model="testInput" disabled placeholder="disabled placeholder" label="Label"/>
  </main>
</template>
