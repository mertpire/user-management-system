<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppModal from "../components/modal/AppModal.vue";
import UserDetailsForm from './UserDetailsForm.vue';
import { useUserStore } from '@/stores/user';

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const modal = ref<boolean>(true)
const editMode = computed(()=> {
  return !isNaN(Number(route.params.id)) 
})
const title = computed(()=> {
  return (editMode.value ? 'Edit' : 'Create') + ' User'
})
const description = computed<string>(()=> {
  return userStore.user.name ? (editMode.value ? `Editing ${userStore.user.name}` : '') : ''
})
function hideModal() {
  router.go(-1)
}

</script>

<template>
  <main>
    <AppModal @update:model-value="hideModal" :title="title" :description="description" v-model="modal">
      <UserDetailsForm/>
    </AppModal>
  </main>
</template>
