import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'logic',
    component: () => import( /* webpackChunkName: "about" */ '../views/logic.vue')
  },

  {
    path: '/findProject',
    name: 'Home',
    component: () => import( /* webpackChunkName: "about" */ '../views/Find.vue')
  },
  {
    path: '/communityActivity',
    name: 'About',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Commu.vue')
  },
  {
    path: '/publishProject',
    name: 'Public',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/publish.vue')
  },
  {
    path: '/personalCenter',
    name: 'Person',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Person.vue')
  },
  {
    path: '/manageCenter',
    name: 'manage',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Manage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router