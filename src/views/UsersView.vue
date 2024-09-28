<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import AppBreadcrumbs from "../components/breadcrumbs/AppBreadcrumbs.vue";
import AppBtn from "../components/btn/AppBtn.vue";

const route = useRoute() 
const router = useRouter()

function createUser() {
  router.push({name: 'users-create'})
}
</script>

<template>
  <main>
    <div class="flex justify-between">
      <AppBreadcrumbs :crumbs="route.meta.breadcrumbs"/>
      <AppBtn @click="createUser" label="Create User"/>
    </div>
    <router-view/>
  </main>
</template>
