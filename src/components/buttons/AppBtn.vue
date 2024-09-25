<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  label: string,
  outline: boolean,
  disabled: boolean
}
const props = defineProps<Props>()
const btnClasses = computed<string>(() => {
  if (props.disabled) {
    return props.outline ? 'border-slate-300 border disabled:text-slate-300' : 'disabled:bg-slate-50 disabled:text-slate-200'
  }else {
    if (props.outline) return 'bg-white hover:bg-slate-50 active:bg-slate-100 border-slate-300 border'
    else return 'text-white bg-slate-800 hover:bg-slate-900 active:bg-slate-950'
  }
})
</script>

<template>
  <button :class="[btnClasses, props.disabled ? 'cursor-not-allowed' : '']" :disabled="props.disabled" class="rounded-md px-2.5 py-2">Button</button>
</template>