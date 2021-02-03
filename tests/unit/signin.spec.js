import SignIn from "../../src/components/SignIn";
import { mount, createLocalVue } from "@vue/test-utils";

describe("SignIn", () => {
  let wrapper, nickname, pass;

  beforeAll(() => {
    wrapper = mount(SignIn, {
      stubs: ['router-link', 'router-view']
    });

    nickname = wrapper.find("#inputNickname");
    pass = wrapper.find("#inputPassword");
  });

  beforeEach(async () => {
    await nickname.setValue("test"); 
    await pass.setValue("test123");
  });

  it('User montado en wrapper', () => {
    expect(wrapper.vm.user).not.toBe(undefined);
  });

  it("Comprobando que SignIn funciona", async () => {
    expect(nickname.element.value).toBe("test");
    expect(pass.element.value).toBe("test123");
  });

  it("Comprobando que SignIn funciona - fallo", async () => {
    expect(nickname.element.value).toBe("test");
    expect(pass.element.value).not.toBe("test");
  });

  it("Comprobando que los v-model actualizan los valores de los datos", async () => {
    await nickname.setValue('testeator');
    expect(wrapper.vm.user.nickname).toBe('testeator');
  });
});