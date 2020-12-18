import SignIn from "../../src/components/SignIn.vue";
import { mount } from "@vue/test-utils";

let wrapper = null;

beforeAll( () => {
  wrapper = mount(SignIn, {
    stubs: ['router-link']
  });
})

describe("SignIn.vue", () => {   
  it("Comprobando que SignIn funciona", async() => {
    const nickname = wrapper.find("#inputNickname");
    await nickname.setValue("test");
    const password = wrapper.find("#inputPassword");
    await password.setValue("test123");

    expect(nickname.element.value).toBe("test");
    expect(password.element.value).toBe("test123");
  });

  it("Comprobando que SignIn funciona - fallo", async() => { 
    const nickname = wrapper.find("#inputNickname");
    await nickname.setValue("test");
    const password = wrapper.find("#inputPassword");
    await password.setValue("test123");
    
    expect(nickname.element.value).toBe("test");
    expect(password.element.value).not.toBe("test");
  });

  // it("Comprobando que la vista del usuario cambia cuando se loguea", async() => {
  //   // wrapper.find("#LogOut").trigger("click");
  //   // await flushPromises();
  //   // expect($router.replace).lastCalledWith({});
  // });

  // it("Comprobando que la vista del usuario cambia cuando cierra sesión ", async() => {
  //   expect(input.element.value).toBe("my@mail.com");
  // });
});