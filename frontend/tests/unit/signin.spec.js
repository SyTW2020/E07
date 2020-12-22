import SignIn from "../../src/components/SignIn.vue";
import { mount } from "@vue/test-utils";
//const fetch = require('node-fetch');
//const fetch = require('jest-fetch-mock')

// const fetchMock = require('fetch-mock');
// import asyncFetch from '../../src/async-fetch';
import router from "../../src/store";


describe("SignIn.vue", () => {
  let wrapper, nickname, pass;

  beforeAll(() => {
    wrapper = mount(SignIn, {
      stubs: ['router-link']
    });
    nickname = wrapper.find("#inputNickname");
    pass = wrapper.find("#inputPassword");
  });

  beforeEach(async () => {
    await nickname.setValue("test");
    await pass.setValue("test123");
    // fetch.resetMocks();
  });

  it("Comprobando que SignIn funciona", async () => {
    expect(nickname.element.value).toBe("test");
    expect(pass.element.value).toBe("test123");
  });

  it("Comprobando que SignIn funciona - fallo", async () => {
    expect(nickname.element.value).toBe("test");
    expect(pass.element.value).not.toBe("test");
  });

  // it("Comprobando que al loguearse un usuario, se recibe un codigo de estado"() => {
  //   fetch(`http://10.6.128.94/users/${nickname.element.value
  // } & prueba2`)
  //     .then(res => {
  //       console.log("Devuelve", res.status);

  //       // expect(res.status).toBe(400);
  //     })
  // });

  // it("Comprobando que al loguearse un usuario, se recibe un codigo de estado - fallo", async () => {
  // fetch(`http://10.6.128.94/users/${nickname.element.value}&${pass.element.value}`)
  //   .then(res => {
  //     console.log("Debería fallar", res.status)
  //     expect(res.status).toBe(400);
  //   })
  // console.log(true);
  // });

  it("Comprobando que los v-model actualizan los valores de los datos", async () => {
    await nickname.setValue('testeator');
    expect(wrapper.vm.user.nickname).toBe('testeator');
  });

  // it("Comprobando que la vista del usuario cambia cuando se loguea", async () => {
  //   wrapper.find("#LogOut").trigger("click");
  //   await flushPromises();
  //   expect($router.replace).lastCalledWith({});
  // });

  // it("Comprobando que la vista del usuario cambia cuando cierra sesión ", async () => {
  //   expect(input.element.value).toBe("my@mail.com");
  // });


  // https://codereviewvideos.com/course/react-redux-and-redux-saga-with-symfony-3/video/testing-javascript-s-fetch-with-jest-happy-path
  // https://github.com/wheresrhys/fetch-mock 
  // it("Can fetch", async () => {
  //   fetchMock.get('http://10.6.128.94/users', {
  //     anything: "we like"
  //   })
  //   const response = await asyncFetch('http://10.6.128.94/users')
  //   const result = await response.json()
  //   expect(result.anything).toEqual("we like")
  // })

});