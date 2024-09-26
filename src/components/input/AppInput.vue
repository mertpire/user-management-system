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
  <label>{{ props.label }}</label>
  <input
    class="rounded-md min-w-64 px-2.5 py-2"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :class="[inputClasses, props.disabled ? 'cursor-not-allowed' : '']"
    :value="props.modelValue"
    @input="emit('update:modelValue', ($event.target as any).value)"
  />
</template>