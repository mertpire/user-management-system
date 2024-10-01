<script setup lang="ts">
import AppBtn from '../btn/AppBtn.vue';

interface Props {
  btnLabel?: string
}
const props = defineProps<Props>()
const emit = defineEmits(['submit'])

</script>

<template>
  <form novalidate @submit.prevent="emit('submit')" class="flex flex-col gap-8">
    <slot/>
    <div class="text-right">
      <AppBtn type="submit" :label="props.btnLabel"/>
    </div>
  </form>
</template>