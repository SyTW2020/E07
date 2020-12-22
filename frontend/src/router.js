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
            path: "/signin",
            name: "signin",
            component: () => import("./views/SignIn.vue"),
        },
        {
            path: "/signup",
            name: "signup",
            component: () => import("./views/SignUp.vue")
        },
        {
            path: "/myuser",        // CAMBIAR NOMBRES
            name: "myuser",
            component: () => import("./views/User.vue")
        }
    ]
});
