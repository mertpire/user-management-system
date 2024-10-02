<script setup lang="ts">
import AppBtn from '../btn/AppBtn.vue';

interface Props {
  btnLabel?: string
  btnLoading?: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['submit'])

</script>

<template>
  <form novalidate @submit.prevent="emit('submit')" class="flex flex-col gap-6">
    <slot/>
    <div class="text-right mt-4">
      <AppBtn type="submit" :disabled="btnLoading" :loading="btnLoading" :label="props.btnLabel"/>
    </div>
  </form>
</template>