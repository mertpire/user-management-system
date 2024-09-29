<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import AppInput from "@/components/input/AppInput.vue";
import AppBtn from '@/components/btn/AppBtn.vue';


interface User {
  name: string
  email: string
  age: number | null
}
const user = ref<User>({
  name: '',
  email: '',
  age: null
})

const route = useRoute()
const editMode = computed(()=> {
  return !isNaN(Number(route.params.id)) 
})

const emit = defineEmits(['submit'])
function submit(e:Event) {
  e.preventDefault()
  let event = 'create' 
  if (editMode.value) {
    event = 'update'
  }
  emit('submit', event)
}
</script>

<template>
  <form @submit="submit">
    <AppInput class="mb-8" label="Name" v-model="user.name"/>
    <AppInput class="mb-8" label="Email" v-model="user.email"/>
    <AppInput class="mb-8" label="Age" v-model="user.age"/>
    <div class="text-right">
      <AppBtn type="submit" label="Create"/>
    </div>
  </form>
</template>
