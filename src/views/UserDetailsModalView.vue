<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppModal from "../components/modal/AppModal.vue";
import UserDetailsForm from './UserDetailsForm.vue';


const router = useRouter()
const route = useRoute()
const modal = ref<boolean>(true)

const editMode = computed(()=> {
  return !isNaN(Number(route.params.id)) 
})
const title = computed(()=> {
  return (editMode.value ? 'Edit' : 'Create') + ' User'
})
const description = ref<string>('')
function hideModal() {
  router.push({name: 'users'})
}

</script>

<template>
  <main>
    <AppModal @update:model-value="hideModal" :title="title" :description="description" v-model="modal">
      <UserDetailsForm @update:description="description = 'Editing ' + $event"/>
    </AppModal>
  </main>
</template>
