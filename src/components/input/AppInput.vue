<script setup lang="ts">
import InfoIcon from "@/components/icons/InfoIcon.vue";
import { computed } from 'vue';

interface Props {
  modelValue: string | number | null,
  id: string
  label: string,
  placeholder?: string,
  pattern?: string,
  disabled?: boolean,
  required?: boolean,
  type?: string
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
  <label :for="id" class="text-slate-800">
    <div class="flex items-center gap-x-1">{{ props.label }} <InfoIcon/></div>
    <input
      :class="[inputClasses, props.disabled ? 'cursor-not-allowed' : '']"
      :disabled="props.disabled"
      :type="type"
      :id="id"
      :required="required"
      :pattern="pattern"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="emit('update:modelValue', ($event.target as any).value)"
      class="rounded-md min-w-64 px-2.5 py-2 mt-2 w-full peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-rose-500" />
      <span class="mt-2 hidden text-xs text-rose-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
        Please enter a valid {{label.toLowerCase()}}
      </span>
  </label>
  
</template>