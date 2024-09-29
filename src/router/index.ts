import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from "../views/UsersView.vue";
import UserDetailsView from "../views/UserDetailsView.vue";
import UserDetailsModalView from "../views/UserDetailsModalView.vue";
import ErrorView from "../views/ErrorView.vue";
declare module 'vue-router' {
  interface Crumb {
    label: string,
    link?: string
  }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {name: 'users'},
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
          path: ':id',
          name: 'user-details-modal',
          beforeEnter: (to, from, next) => {
            if (!from.name) {
              next({name: 'user-details', params: to.params})
            }else {
              next()
            }            
          },
          meta: { breadcrumbs: [{label: 'Users',link: 'users'},{label: 'Create'}] },
          component: UserDetailsModalView,
          children: []
        },
      ]
    },
    {
      path: '/users/:id',
      name: 'user-details',
      meta: { breadcrumbs: [{label: 'Users',link: 'users'},{label: 'Create'}] },
      component: UserDetailsView,
      children: []
    },
    
    { path: '/:pathMatch(.*)*', name: 'not-found', component: ErrorView },
  ]
})

export default router
