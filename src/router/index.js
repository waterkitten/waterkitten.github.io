import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/eventlist',
      name: "event-list",
      component: () => import("../components/vueshow/EventList.vue")

    },
    {
      path: "/eventcreate",
      name: "event-create",
      component: () => import("../components/vueshow/EventCreate.vue")
    },
    {
      path: '/',
      name: 'logic',
      component: () => import( /* webpackChunkName: "about" */ '../views/logic.vue')
    },
    {
      path: "/",
      name: 'card',
      component: () => import("../components/vueshow/cardshow.vue")

    },

    {
      path: '/findProject',
      name: 'Home',
      component: () => import( /* webpackChunkName: "about" */ '../views/Find.vue')
    },
    {
      path: '*',
      name: 'error',
      component: () => import( /* webpackChunkName: "about" */ '../views/FileNotFound.vue')
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
    },

  ]




})