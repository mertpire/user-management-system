<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppBtn from '@/components/btn/AppBtn.vue';
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue';
import UserForm from './UserDetailsForm.vue'
const route = useRoute()
const router = useRouter()

function submit() {
  console.log('submitted');
  
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="flex justify-between mb-8 pb-8">
      <AppBreadcrumbs :crumbs="route.meta.breadcrumbs"/>
      <AppBtn @click="router.go(-1)" label="Back"/>
    </div>
    <UserForm @submit="submit"/>
  </div>
</template>
