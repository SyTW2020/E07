import Menu from "../../src/components/Menu.vue";
import { shallowMount, createLocalVue } from '@vue/test-utils'
import flushPromises from 'flush-promises';
// import VueRouter from 'vue-router'
// import Vuex from 'vuex';
// const localVue = createLocalVue()
// localVue.use(VueRouter)
// const router = new VueRouter()

// const $route = {
//   path: '/rankings'
// }


describe("Menu", () => {
  let wrapper, replaceMock;

  beforeAll(() => {
    // $route = {
    //   path: '/rankings'
    // }
    replaceMock = jest.fn();
    wrapper = shallowMount(Menu, {
      mocks: {
        $route: {
          params: {
            id: 1
          }
        },
        $router: {
          replace: replaceMock, 
        }
      },
      stubs: ['router-link', 'router-view'],
    });
    // console.log(wrapper.$route)
  });

  it("Comprobando que SignIn funciona", async () => {
    // let ranking = await wrapper.find("#BRanking").push('/rankings');
    // await flushPromises();
    // let input = wrapper.find("#burger-btn");
    // console.log(ranking)
    // console.log(input)
    wrapper.find("#BRanking").trigger("click");
    console.log(Menu)
    // console.log(wrapper.$route)
    // let algo = wrapper.push('/rankings')
    console.log(wrapper)
    console.log(replaceMock)
    expect(replaceMock).toHaveBeenCalledWith("/");
  });
})

// import Menu from "../../src/components/Menu.vue";
// import { shallowMount, createLocalVue } from "@vue/test-utils";
// import Vuex from 'vuex';
// import flushPromises from 'flush-promises';
// import { toHaveRouteName } from 'vue-test-utils-helpers';

// const localVue = createLocalVue();
// localVue.use(Vuex);

// describe("Menu", () => {
//   let $store, $route, wrapper;

//   beforeEach(() => {
//     $store = new Vuex.Store({
//       state: { token: null },
//       getters: {
//         token(state) {
//           return state.token;
//         }
//       }
//     })

//     $route = [
//       {
//         path: "/",
//         name: "home",
//         component: () => import("./views/Home.vue")
//       },
//       {
//         path: "/rankings",
//         name: "rankings",
//         component: () => import("./components/Ranking.vue")
//       },
//       {
//         path: "/signin",
//         name: "signin",
//         component: () => import("./components/SignIn.vue")
//       },
//       {
//         path: "/signup",
//         name: "signup",
//         component: () => import("./components/SignUp.vue")
//       }
//     ]

//     wrapper = shallowMount(Menu, {
//       localVue,
//       stubs: ['router-link', 'router-view'],
//       mocks: {
//         $store,
//         $route
//       }
//     })
//   })

//   it("Se espera que exista una ruta a home", async () => {
//     wrapper.find("#BRanking").trigger("click");
//     //await flushPromises();
//     // expect(wrapper.find("#BGamingit")).toBe(true)
//     // console.log(wrapper.find("#BRanking"))
//     expect(wrapper.vm.$route[0].path).toBe('/')
//   });
// });



/************************************************************************ */
/************************************************************************ */
/************************************************************************ */

  //   const boton = wrapper.find('#BRanking')
  //   wrapper.find('#BRanking').trigger('click')
  //   console.log()
  //   expect(wrapper.vm.$route.path).toBe('/rankings')
  //   console.log(Menu.router)
  //   expect(boton.getAttribute("router-link")).toBe('/rankings');
  // });
  // it("Se espera que el boton de Inicia sesión lleve al usuario a la pantalla de login.", async () => {

  //   expect(true).toBe(true);
  // });
  // it("Se espera que el boton de Regístrate lleve al usuario a la pantalla de registro.", async () => {

  //   expect(true).toBe(true);
  // });
  // it("Se espera que el boton de cerrar sesión lleve al usuario a la pantalla principal.", async () => {

  //   expect(true).toBe(true);
  // });
  // it("Se espera que el boton de perfil lleve al usuario a la pantalla de su perfil.", async () => {

  //   expect(true).toBe(true);
  // });

  // it("Se espera que exista una ruta a home", async () => {
  //   const wrapper = shallowMount(Router, {

  //   })
  //   wrapper.find('#BGamingit').trigger('click')
  //   expect(window.location.pathname).toBe('/')
  // });