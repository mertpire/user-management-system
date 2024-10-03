<script setup lang="ts">
import { computed } from 'vue';
import HomeIcon from "../icons/HomeIcon.vue";
import { useRoute } from 'vue-router';

import { RouterLink } from "vue-router";

const route = useRoute() 

const breadcrumbs = computed<any>(()=>{
  // Get breadcrumb list from router
  return typeof route.meta.breadcrumbs === 'function' ? route.meta.breadcrumbs() : route.meta.breadcrumbs
})
function getCrumbLabel(label:string) {  
  // Create and edit routes using same page component. 
  // To decide create/edit label [id] (last key of route params) keyword used.
  if (label.toLowerCase().includes('[id]')) {
    const lastRouteParam = Object.values(route.params)[Object.keys(route.params).length - 1]
    console.log(lastRouteParam);
    
    return isNaN(Number(lastRouteParam)) ? 'Create' : 'Edit'
  }else {
    return label
  }
}

</script>
<template>
  <div class="flex items-center gap-x-2">
    <RouterLink :to="{name: 'users'}">
      <HomeIcon/>
    </RouterLink>
    <RouterLink
      v-for="(crumb,idx) in breadcrumbs"
      class="flex items-center gap-2"
      :key="crumb.link"
      :class="[idx === breadcrumbs.length - 1 ? 'text-slate-800' : 'text-slate-500']"
      :to="{name: crumb.link}">
      <div class="text-slate-300">/</div>
      <div class="text-sm">{{ getCrumbLabel(crumb.label) }}</div>
      
    </RouterLink>
  </div>
</template>


<style scoped>

</style>