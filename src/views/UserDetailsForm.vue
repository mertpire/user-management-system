<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from "@/stores/user";
import AppInput from "@/components/input/AppInput.vue";
import AppForm from "@/components/form/AppForm.vue";


const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const emit = defineEmits(['update:description'])
const editMode = computed(()=> {
  return !isNaN(Number(route.params.id)) 
})

const loading = ref<boolean>(false)
function submit() {
  validateForm()
  if (errors.value.length > 0) {
    return
  }
  if (editMode.value) {
    updateUser()
  }else {
    createUser()
  }
  
}
const errors = ref<string[]>([])
function validateForm() {
  errors.value = []
  if (!userStore.user.name) {
    errors.value.push("Name is required.")
  }
  if(!userStore.user.email){
    errors.value.push("Email is required.")
  }else if(!validateEmail(userStore.user.email)){
    errors.value.push("A valid email is required.")
  }
  if (!userStore.user.age) {
    errors.value.push("Age is required.")
  }else if(!(userStore.user.age > 0 && userStore.user.age < 99)){
    errors.value.push("A valid age is required.")
  }
}
const emailRegExp = ref<RegExp>(/^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
function validateEmail(email:string) {
  return emailRegExp.value.test(email)
}
async function updateUser() {
  loading.value = true
  await userStore.updateUser(userStore.user)
  loading.value = false
  router.push({name: 'users'})
}
async function createUser() {
  loading.value = true
  await userStore.createUser(userStore.user)
  loading.value = false
  router.push({name: 'users'})
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
  if (userStore.users.length > 0) {
    userStore.user = {...userStore.users.find(user => user.id === route.params.id) as any}
    emit('update:description', userStore.user.name)
  }else {
    userStore.getUserById(route.params.id.toString())
  }
} else {
  initUser()
}
</script>

<template>
  <AppForm @submit="submit" :btn-loading="loading" :btn-label="editMode ? 'Update' : 'Create'">
    <div class="text-rose-500" v-if="errors.length > 0">
      <div v-for="error in errors" :key="error">
        {{ error }}      
      </div>
    </div>
    <AppInput id="name" label="Name" v-model="userStore.user.name"/>
    <AppInput placeholder="email@domain.com" id="email" type="email" label="Email" v-model="userStore.user.email"/>
    <AppInput id="age" info="Age must between 0 and 99." type="number" label="Age" v-model="userStore.user.age"/>
  </AppForm>
</template>
