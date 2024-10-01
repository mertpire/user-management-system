<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  label?: string
  outline?: boolean
  disabled?: boolean
  flat?: boolean
  loading?: boolean
}
const props = defineProps<Props>()
const btnClasses = computed<string>(() => {
  if (props.disabled) {
    if (props.outline) return 'border-slate-300 border disabled:text-slate-300'
    else if(props.flat) return 'disabled:text-gray-100'
    else return 'disabled:bg-slate-50 disabled:text-slate-200'
  }
  else {
    if (props.outline) return 'bg-white hover:bg-slate-50 active:bg-slate-100 border-slate-300 border'
    else if(props.flat) return 'text-gray-300'
    else return 'text-white bg-slate-800 hover:bg-slate-900 active:bg-slate-950'
  }
})
</script>

<template>
  <button
    :class="[btnClasses, props.disabled ? 'cursor-not-allowed' : '']"
    :disabled="props.disabled"
    class="rounded-md px-2.5 py-2 ">
    <div class="flex gap-2">
      <div v-if="loading" class="animate-spin inline-block size-4 border-[2px] border-current border-t-transparent text-white-600 rounded-full dark:text-white-500" role="status" aria-label="loading">
      </div>
      {{loading ? 'Processing...' : props.label}}
    </div>
    <slot/>
    </button>
</template>