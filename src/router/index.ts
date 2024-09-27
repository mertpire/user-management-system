import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from "../views/UsersView.vue";
import UserCreateView from "../views/UserCreateView.vue";
import ErrorView from "../views/ErrorView.vue";
declare module 'vue-router' {
  interface Crumb {
    label: string,
    link?: string
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/users',
      component: HomeView,
      children: []
    },
    {
      path: '/users',
      name: 'users',
      meta: { breadcrumbs: [{label: 'Users'}] },
      component: UsersView,
      children: [
        {
          path: 'create',
          name: 'users-create',
          meta: { breadcrumbs: [{label: 'Users',link: 'users'},{label: 'Create'}] },
          component: UserCreateView,
          children: []
        },
      ]
    },
    
    { path: '/:pathMatch(.*)*', name: 'not-found', component: ErrorView },
  ]
})

export default router
