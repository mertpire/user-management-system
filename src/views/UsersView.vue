<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import AppBreadcrumbs from "../components/breadcrumbs/AppBreadcrumbs.vue";
import AppBtn from "../components/btn/AppBtn.vue";
import UserService from "../services/user";
import { ref } from 'vue';
const route = useRoute() 
const router = useRouter()

function editUser(id:number | string) {
  router.push({name: 'user-details-modal',params: {id}})
}
function deleteUser(id:number) {
  UserService.deleteUser(id)
  .then(()=> {
    getUsers()
  })
}
const loading = ref<boolean>(false)
const users = ref<any>([])
async function getUsers() {
  loading.value = true
  UserService.getUsers()
  .then(res => {
    users.value = res.data
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    loading.value = false
  })
  
}
getUsers()

</script>

<template>
  <main>
    <div class="flex justify-between">
      <AppBreadcrumbs :crumbs="route.meta.breadcrumbs as any"/>
      <AppBtn @click="editUser('create')" label="Create User"/>
    </div>
    <div class="overflow-auto">
      <div class="mt-14">
        <table v-if="users.length > 0" class="w-full">
          <thead class="text-left bg-slate-100 text-slate-500">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.age}}</td>
              <td class="text-right">
                <AppBtn class="mr-2.5" @click="editUser(user.id)" outline label="Edit"/>
                <AppBtn @click="deleteUser(user.id)" outline label="Delete"/>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="text-center opacity-50">
          <div v-if="loading">Loading...</div>
          <div v-else>No Users Found</div>
        </div>
      </div>
    </div>
    <router-view/>
  </main>
</template>
