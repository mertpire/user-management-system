<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  label?: string // The text that will be shown on the button
  outline?: boolean // Use 'outline' design
  disabled?: boolean // Put component in disabled mode
  flat?: boolean // Use 'flat' design
  dense?: boolean // Dense mode; occupies less space
  loading?: boolean // Put component in loading mode
}
const props = defineProps<Props>()
const btnClasses = computed<string[]>(() => {
  const classes:string[] = []
  if (props.disabled) {
    classes.push('cursor-not-allowed')
    if (props.outline) classes.push('border-slate-300 border disabled:text-slate-300')
    else if(props.flat) classes.push('disabled:text-gray-100')
    else classes.push('disabled:bg-slate-50 disabled:text-slate-200')
  }
  else {
    if (props.outline) classes.push('bg-white hover:bg-slate-50 active:bg-slate-100 border-slate-300 border')
    else if(props.flat) classes.push('text-gray-300')
    else classes.push('text-white bg-slate-800 hover:bg-slate-900 active:bg-slate-950')
  }
  
  return classes
})
const btnDefaultClasses= computed<string[]>(() => {
  const classes = ['rounded-md']
  if (props.dense) {
    classes.push('px-1 py-1')
  } else {
    classes.push('px-2.5 py-2')
  }
  return classes
})
</script>

<template>
  <button
    :class="[ ...btnDefaultClasses, ...btnClasses]"
    :disabled="props.disabled">
    <div class="flex gap-2">
      <div v-if="loading" class="animate-spin inline-block size-4 border-[2px] border-current border-t-transparent text-white-600 rounded-full dark:text-white-500" role="status" aria-label="loading">
      </div>
      {{loading ? 'Processing...' : props.label}}
    </div>
    <slot/>
    </button>
</template>