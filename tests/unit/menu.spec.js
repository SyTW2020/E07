import Menu from "../../src/components/Menu.vue";
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("Menu", () => {
  let store
  let menu 
  beforeEach(() => {
    menu = {
      MENU: jest.fn()
    }
    store = new Vuex.Store({
      menu
    })
  })

  it("Se espera que el boton de GamingIt lleve al usuario a la pantalla de inicio.", async () => {
    const wrapper = shallowMount(Menu, {
      store,
      localVue,
      stubs: ['router-link']
    }) 
    wrapper.find('#BGamingit').trigger('click')
    expect(window.location.pathname).toBe('/')
  });
  // https://medium.com/@sarngru/vue-router-unit-testing-navigation-6cc0b0f86811
  // it("Se espera que el boton de ranking lleve al usuario a la pantalla de rankings.", async () => {
  //   const wrapper = shallowMount(Menu, {
  //     store,
  //     localVue,
  //     $route,
  //     stubs: ['router-link']
  //   }) 
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
});