<script setup lang="ts">
import { ref } from 'vue';
import AppModal from "../components/modal/AppModal.vue";
import AppInput from "../components/input/AppInput.vue";
import { useRouter } from 'vue-router';

const router = useRouter()

interface User {
  name: string
  email: string
  age: number | null
}
const modal = ref<boolean>(true)
const user = ref<User>({
  name: '',
  email: '',
  age: null
})
function test() {
  router.go(-1)
}
</script>

<template>
  <main>
    <AppModal @update:model-value="test" title="Create User" description="Description" v-model="modal">
      <div>
        <AppInput class="mb-8" label="Name" v-model="user.name"/>
        <AppInput class="mb-8" label="Email" v-model="user.email"/>
        <AppInput class="mb-8" label="Age" v-model="user.age"/>
      </div>
    </AppModal>
  </main>
</template>
