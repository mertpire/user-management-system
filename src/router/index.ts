import { createRouter, createWebHashHistory } from 'vue-router'
import UsersView from "../views/UsersView.vue";
import UserDetailsView from "../views/UserDetailsView.vue";
import UserDetailsModalView from "../views/UserDetailsModalView.vue";
import ErrorView from "../views/ErrorView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: {name: 'users'},
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
          meta: { breadcrumbs: [{label: 'Users',link: 'users'}] },
          component: UserDetailsModalView,
          children: []
        },
      ]
    },
    {
      path: '/users/:id',
      name: 'user-details',
      meta: { breadcrumbs: [{label: 'Users',link: 'users'}, {label: '[id]'}] },
      component: UserDetailsView,
      children: []
    },
    
    { path: '/:pathMatch(.*)*', name: 'not-found', component: ErrorView },
  ]
})

export default router
