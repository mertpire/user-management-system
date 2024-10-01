<script setup lang="ts">
import { computed, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from "@/stores/user";
import AppInput from "@/components/input/AppInput.vue";
import AppForm from "@/components/form/AppForm.vue";


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
    age: null
  }
}
if (editMode.value) {
  userStore.getUserById(routeId.value) 
}else {
  initUser()
}
onBeforeUnmount(()=> {
  initUser()
})
</script>

<template>
  <AppForm @submit="submit" :btn-label="editMode ? 'Update' : 'Create'">
    <AppInput id="name" label="Name" v-model="userStore.user.name"/>
    <AppInput id="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" label="Email" v-model="userStore.user.email"/>
    <AppInput id="age" label="Age" v-model="userStore.user.age"/>
  </AppForm>
</template>
