<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from "@/stores/user";
import AppInput from "@/components/input/AppInput.vue";
import AppBtn from '@/components/btn/AppBtn.vue';


const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const editMode = computed(()=> {
  return !isNaN(Number(route.params.id)) 
})
const routeId = computed<string>(()=> {
  return route.params.id.toString()
})

function submit() {
  if (editMode.value) {
    updateUser()
  }else {
    createUser()
  }
  
}
function updateUser() {
  userStore.updateUser(userStore.user)
}
async function createUser() {
  await userStore.createUser(userStore.user)
  router.replace({name: route.name, params: {id: userStore.user.id}})
}
function initUser() {
  userStore.user = {
    id: '0',
    name: '',
    email: '',
    age: 0
  }
}
if (editMode.value) {
  userStore.getUserById(routeId.value) 
}else {
  initUser()
}
</script>

<template>
  <form @submit.prevent="submit">
    <AppInput required class="mb-8" label="Name" v-model="userStore.user.name"/>
    <AppInput class="mb-8" label="Email" v-model="userStore.user.email"/>
    <AppInput class="mb-8" label="Age" v-model="userStore.user.age"/>
    <div class="text-right">
      <AppBtn type="submit" :label="editMode ? 'Update' : 'Create'"/>
    </div>
  </form>
</template>
