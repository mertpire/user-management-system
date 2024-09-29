<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import UserService from "../services/user";
import AppInput from "@/components/input/AppInput.vue";
import AppBtn from '@/components/btn/AppBtn.vue';


interface User {
  id: number
  name: string
  email: string
  age: number
}
const user = ref<User>({
  id: Date.now(),
  name: '',
  email: '',
  age: 0
})

const route = useRoute()
const router = useRouter()

const editMode = computed(()=> {
  return !isNaN(Number(route.params.id)) 
})
const routeId = computed<number>(()=> {
  return Number(route.params.id)
})

function submit(e:Event) {
  e.preventDefault()
  if (editMode.value) {
    updateUser()
  }else {
    createUser()
  }
  
}
function updateUser() {
  UserService.updateUser(user.value)
  .then(()=> {
    getUserById()
  })
}
function createUser() {
  UserService.createUser(user.value)
  .then(res => {
    router.replace({name: route.name, params: {id: res.data.id}})
    getUserById()
  })
}
function getUserById() {
  UserService.getUserById(routeId.value)
  .then(res => {
    user.value = res.data
  })
}

if (editMode.value) {
  getUserById() 
}
</script>

<template>
  <form @submit="submit">
    <AppInput class="mb-8" label="Name" v-model="user.name"/>
    <AppInput class="mb-8" label="Email" v-model="user.email"/>
    <AppInput class="mb-8" label="Age" v-model="user.age"/>
    <div class="text-right">
      <AppBtn type="submit" :label="editMode ? 'Update' : 'Create'"/>
    </div>
  </form>
</template>
