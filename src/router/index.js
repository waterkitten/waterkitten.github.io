import Vue from "vue";
import Router from "vue-router";
import store from "../store/store";
import NProgress from "nprogress";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [{
      path: "/eventlist",
      name: "event-list",
      component: () => import("../components/vueshow/EventList.vue"),
      props: true
    },
    {
      path: "/eventcreate",
      name: "event-create",
      component: () => import("../components/vueshow/EventCreate.vue")
    },
    {
      path: "/",
      name: "logic",
      component: () =>
        import( /* webpackChunkName: "about" */ "../views/logic.vue")
    },
    {
      path: "/card",
      name: "card",
      component: () => import("../components/vueshow/EventShow.vue")
    },

    {
      path: "/findProject",
      name: "Home",
      component: () =>
        import( /* webpackChunkName: "about" */ "../views/Find.vue")
    },
    {
      path: "*",
      name: "error",
      component: () =>
        import( /* webpackChunkName: "about" */ "../views/FileNotFound.vue")
    },
    {
      path: "/communityActivity",
      name: "About",

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ "../views/Commu.vue")
    },
    {
      path: "/publishProject",
      name: "Public",

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ "../views/publish.vue")
    },
    {
      path: "/personalCenter",
      name: "Person",

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ "../views/Person.vue")
    },
    {
      path: "/manageCenter",
      name: "manage",

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ "../views/Manage.vue")
    },
    {
      path: "/event/:id",
      name: "event-show",
      component: () => import("../components/vueshow/EventShow.vue"),
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store.dispatch("event/fetchEvent", routeTo.params.id).then(event => {
          routeTo.params.event = event;
          next();
        });
      }
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
});
router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;