import SignIn from "../../src/components/SignIn.vue";
import { mount } from "@vue/test-utils";

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