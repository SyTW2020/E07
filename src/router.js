import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
      // component: () => import("./components/SignIn.vue"),
    },
    {
      path: "/rankings",
      name: "rankings",
      component: () => import("./components/Ranking.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("./components/SignIn.vue"),
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
      path: "/myuseredit",
      name: "myuseredit",
      component: () => import("./components/UserEdit.vue")
    },
    {
      path: "/tictactoe",
      name: "TicTacToe",
      component: () => import("./components/games/TicTacToe.vue")
    },
    {
      path: "/mirsball",
      name: "MirsBall",
      component: () => import("./components/games/MirsBall.vue")
    },
    {
      path: "/simon",
      name: "Simon",
      component: () => import("./components/games/Simon.vue")
    }
  ]
});
