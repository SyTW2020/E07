import Menu from "../../src/components/Menu";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Menu sin iniciar sesión", () => {
  let $store, wrapper;

  beforeEach(() => {
    $store = new Vuex.Store({
      state: {
        token: null
      },
      getters: {
        token(state) {
          return state.token;
        }
      }
    });

    wrapper = mount(Menu, {
      localVue,
      stubs: ['router-link', 'router-view'],
      mocks: {
        $store
      }
    });
  });

  it('Menu montado en wrapper', () => {
    expect(wrapper.vm.userLogOut).not.toBe(undefined);
  });

  it("Botón de iniciar sesión", async () => {
    expect(wrapper.html()).toContain("Inicia sesión");
  });

  it("Botón de resgistrarse", async () => {
    expect(wrapper.html()).toContain("Regístrate");
  });
});

describe("Menu sin iniciar sesión", () => {
  let $store, wrapper;

  beforeEach(() => {
    $store = new Vuex.Store({
      state: { token: "prueba" },
      getters: {
        token(state) {
          return state.token;
        }
      }
    });

    wrapper = mount(Menu, {
      localVue,
      stubs: ['router-link', 'router-view'],
      mocks: {
        $store
      }
    });
  });

  it('Menu montado en wrapper', () => {
    expect(wrapper.vm.userLogOut).not.toBe(undefined);
  });

  it("Botón de perfil", async () => {
    expect(wrapper.html()).toContain("Perfil");
  });

  it("Botón de cerrar sesión", async () => {
    expect(wrapper.html()).toContain("Cerrar sesión");
  });
});