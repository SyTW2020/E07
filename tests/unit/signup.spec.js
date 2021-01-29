import SignUp from "../../src/components/SignUp.vue";
import { mount } from "@vue/test-utils";

describe('SignUp.vue', () => {
  let wrapper, nickname, email, pass1, pass2;

  beforeAll(() => {
    wrapper = mount(SignUp, {
      stubs: ['router-link']
    });
    nickname = wrapper.find("#inputNickname");
    email = wrapper.find("#inputEmail");
    pass1 = wrapper.find("#inputPassword1");
    pass2 = wrapper.find("#inputPassword2");
  });

  beforeEach(async () => {
    await nickname.setValue("test");
    await email.setValue("test@gmail.com");
    await pass1.setValue("test123");
    await pass2.setValue("test123");
  });

  it("Comprobando que los campos para Registrarse contiene la información correctamente", async () => {
    await wrapper.find('button').trigger("click")
    expect(`${nickname.element.value}, ${email.element.value}, ${pass1.element.value}, ${pass2.element.value}`)
      .toBe(`test, test@gmail.com, test123, test123`);
  });

  it("Comprobando que SignUp funciona", async () => {
    expect(nickname.element.value).toBe("test");
    expect(pass1.element.value).toBe("test123");
  });

  it("Comprobando que los v-model actualizan los valores de los datos", async () => {
    await nickname.setValue('testeator');
    expect(wrapper.vm.user.nickname).toBe('testeator');
  });
})