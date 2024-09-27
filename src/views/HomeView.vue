<script setup lang="ts">
import { ref } from 'vue';
import AppBtn from "../components/btn/AppBtn.vue";
import AppInput from "../components/input/AppInput.vue";
import AppBreadcrumbs from "../components/breadcrumbs/AppBreadcrumbs.vue";
const testInput = ref<string>('')
</script>

<template>
  <main class="gutter-2">
    <div><AppBtn label="Button" /></div>
    <div>    <AppBtn label="Button" disabled />
</div>
    <div>    <AppBtn label="Button" outline disabled/>
</div>
    <div>    <AppBtn label="Button" outline/>
</div>
    <div>    <AppInput v-model="testInput" placeholder="test placeholder" label="Label"/>
</div>
    <div>    <AppInput v-model="testInput" disabled placeholder="disabled placeholder" label="Label"/>
</div>
<div>    <AppBreadcrumbs :crumbs="[{label: 'Users', link: 'users'}, {label: 'Create'}]"/>
</div>
    
  </main>
</template>
