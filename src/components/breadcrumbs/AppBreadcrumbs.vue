<script setup lang="ts">
import HomeIcon from "../icons/HomeIcon.vue";

import { RouterLink } from "vue-router";
interface Crumb {
  label: string,
  link?: string
}
interface Props {
  separator?: string,
  crumbs: Crumb[]
}
const props = defineProps<Props>()

</script>
<template>
  <div class="flex items-center gap-x-2">
    <RouterLink :to="{name: 'home'}">
      <HomeIcon/>
    </RouterLink>
    <RouterLink
      v-for="(crumb,idx) in props.crumbs"
      class="flex items-center gap-2"
      :key="crumb.link"
      :class="[idx === props.crumbs.length - 1 ? 'text-slate-800' : 'text-slate-500']"
      :to="{name: crumb.link}">
      <div class="text-slate-300">/</div>
      <div class="text-sm">{{ crumb.label }}</div>
      
    </RouterLink>
  </div>
</template>


<style scoped>

</style>