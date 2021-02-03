import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter({
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
    }
  ]
});

describe("Routes", () => {
  it("Se espera que exista una ruta a home", async () => {
    expect(router.options.routes[0].name).toBe('home');
    expect(router.options.routes[0].path).toBe('/');
  });

  it("Se espera que exista una ruta a rankings", async () => {
    expect(router.options.routes[1].name).toBe('rankings');
    expect(router.options.routes[1].path).toBe('/rankings');
  });

  it("Se espera que exista una ruta a iniciar sesión", async () => {
    expect(router.options.routes[2].name).toBe('signin');
    expect(router.options.routes[2].path).toBe('/signin');
  });

  it("Se espera que exista una ruta a registrarte.", async () => {
    expect(router.options.routes[3].name).toBe('signup');
    expect(router.options.routes[3].path).toBe('/signup');
  });

  it("Se espera que exista una ruta a perfil", async () => {
    expect(router.options.routes[4].name).toBe('myuser');
    expect(router.options.routes[4].path).toBe('/myuser');
  });
});