import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/rankings",
      name: "rankings",
      component: () => import("./components/Ranking.vue")
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("./components/SignIn.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("./components/SignUp.vue")
    },
    {
      path: "/myuser",
      name: "myuser",
      component: () => import("./components/User.vue")
    },
    {
      path: "/game",
      name: "game",
      component: () => import("./views/Game.vue")
    },
    {
      path: "/aboutus",
      name: "aboutus",
      component: () => import("./components/AboutUs.vue")
    }
  ]
});
