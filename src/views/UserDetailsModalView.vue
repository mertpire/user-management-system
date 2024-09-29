<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AppModal from "../components/modal/AppModal.vue";
import UserDetailsForm from './UserDetailsForm.vue';

const router = useRouter()

const modal = ref<boolean>(true)

function hideModal() {
  router.go(-1)
}

</script>

<template>
  <main>
    <AppModal @update:model-value="hideModal" title="Create User" description="Description" v-model="modal">
      <UserDetailsForm/>
    </AppModal>
  </main>
</template>
