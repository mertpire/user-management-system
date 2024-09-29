<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import AppBreadcrumbs from "../components/breadcrumbs/AppBreadcrumbs.vue";
import AppBtn from "../components/btn/AppBtn.vue";

const route = useRoute() 
const router = useRouter()

function createUser() {
  router.push({name: 'user-details-modal',params: {id: 'create'}})
}

</script>

<template>
  <main>
    <div class="flex justify-between">
      <AppBreadcrumbs :crumbs="route.meta.breadcrumbs"/>
      <AppBtn @click="createUser" label="Create User"/>
    </div>
    <table class="w-full">
      <thead class="text-left bg-slate-100">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mert Test</td>
          <td>mert@test.com</td>
          <td>28</td>
          <td>
            <AppBtn @click="createUser" outline label="Edit"/>
            <AppBtn @click="createUser" outline label="Delete"/>
          </td>
        </tr>
      </tbody>
    </table>
    <router-view/>
  </main>
</template>
