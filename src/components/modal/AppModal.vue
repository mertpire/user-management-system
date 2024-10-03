<script setup lang="ts">
import AppBtn from "../btn/AppBtn.vue";
import CloseIcon from "../icons/CloseIcon.vue";
import PencilIcon from "../icons/PencilIcon.vue";
interface Props {
  modelValue: boolean // Model of the component; can be used v-model directive
  title?: string
  description?: string,
  size?: string
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

function closeModal() {
  emit('update:modelValue', false)
}
</script>

<template>
  <div v-if="props.modelValue" class="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/[.12]">
    <div class="modal-container bg-white rounded-lg w-full m-4 py-4 px-5" :class="[size || 'max-w-xl']">
      <div class="modal-header flex items-center mb-8 justify-between">
        <div v-if="props.title || props.description" class="flex items-center">
          <div class="border rounded-full p-3 mr-2">
            <PencilIcon/>
          </div>
          <div>
            <div class="text-base">{{ props.title }}</div>
            <div v-if="props.description" class="text-sm text-gray-500">{{ props.description }}</div>
          </div>
        </div>
        <slot v-else name="title"/>
        <AppBtn flat dense class="self-start" @click="closeModal">
          <CloseIcon/>
        </AppBtn>
      </div>
      <div class="modal-body">
        <slot/>
      </div>
    </div>
  </div>
</template>
