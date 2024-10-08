<script setup lang="ts">
import InfoIcon from "@/components/icons/InfoIcon.vue";
import { computed } from 'vue';

interface Props {
  modelValue: string | number | null, // Model of the component; can be used v-model directive
  id: string // Id of input field
  label: string, // A text label that will “float” up above the input field, once the field gets focus
  placeholder?: string, // Placeholder of input field
  disabled?: boolean, // Put component in disable mode
  required?: boolean, // Put component in require mode
  type?: string // Type of input field
  info?: string // Hint about input field
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
    <div class="flex items-center gap-x-1">
      {{ props.label }} 
    <div v-if="info" class="relative flex items-center group">
      <InfoIcon/>
      <div class="absolute left-0 flex items-center hidden ml-5 group-hover:flex">
        <span class="relative z-10 p-2 text-xs leading-none text-slate-500 whitespace-nowrap bg-slate-100 shadow-lg">
            {{info}}
        </span>
      </div>
    </div>

    </div>
    <input
      :class="[inputClasses, props.disabled ? 'cursor-not-allowed' : '']"
      :disabled="props.disabled"
      :type="type"
      :id="id"
      :required="required"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="emit('update:modelValue', ($event.target as any).value)"
      class="rounded-md min-w-64 px-2.5 py-2 mt-2 w-full" />
  </label>
  
</template>