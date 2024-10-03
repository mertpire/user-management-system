<script setup lang="ts">
import { useRouter } from 'vue-router';
import AppBreadcrumbs from "../components/breadcrumbs/AppBreadcrumbs.vue";
import AppBtn from "@/components/btn/AppBtn.vue";
import AppModal from "@/components/modal/AppModal.vue";
import { useUserStore } from "@/stores/user";
import { onBeforeMount, ref } from 'vue';

const userStore = useUserStore()

const router = useRouter()
const loading = ref<boolean>(false)
function editUser(id:number | string) {
  router.push({name: 'user-details-modal',params: {id}})
}
const confirmDeleteModal = ref<boolean>(false)
function confirmDelete(user:any) {
  userStore.user = user
  confirmDeleteModal.value = true
}
async function deleteUser() {
  loading.value = true
  await userStore.deleteUser(userStore.user.id)
  loading.value = false
  confirmDeleteModal.value = false
}
onBeforeMount(async ()=> {
  loading.value = true
  await userStore.getUsers()
  loading.value = false
})

</script>

<template>
  <main>
    <div class="flex justify-between">
      <AppBreadcrumbs/>
      <AppBtn @click="editUser('create')" label="Create User"/>
    </div>
    <div class="overflow-auto">
      <div class="mt-14">
        <table v-if="userStore.users.length > 0" class="w-full">
          <thead class="text-left bg-slate-100 text-slate-500">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in userStore.users" :key="user.id">
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.age}}</td>
              <td class="text-right">
                <AppBtn class="mr-2.5" @click="editUser(user.id)" outline label="Edit"/>
                <AppBtn @click="confirmDelete(user)" outline label="Delete"/>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="text-center text-slate-500">
          <div v-if="loading">Loading...</div>
          <div v-else>No users found</div>
        </div>
        <AppModal v-model="confirmDeleteModal" size="max-w-sm">
          <template #title>
            <div class="text-lg">
              Delete {{userStore.user.name}} ?
            </div>
          </template>
          <div class="text-sm opacity-70">This will permanently delete user from server.</div>
          <div class="text-right mt-10">
            <AppBtn class="mr-2" @click="confirmDeleteModal = false" outline label="Cancel"/>
            <AppBtn @click="deleteUser" :disabled="loading" :loading="loading" label="Delete"/>
          </div>
        </AppModal>
      </div>
    </div>
    <router-view/>
  </main>
</template>
