<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue: string | number | null,
  label: string,
  placeholder?: string,
  disabled?: boolean,
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
const inputClasses = computed<string>(() => {
  if (props.disabled) {
    return 'border-slate-300 border disabled:text-slate-300'
  }else return 'border-slate-300 border text-slate-800 placeholder-gray-300'
})
</script>

<template>
  <div>
    <div class="mb-1 text-slate-800">
      <label>{{ props.label }}</label>
    </div>
    <input
      :class="[inputClasses, props.disabled ? 'cursor-not-allowed' : '']"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="emit('update:modelValue', ($event.target as any).value)"
      class="rounded-md min-w-64 px-2.5 py-2 w-full" />
  </div>
  
</template>