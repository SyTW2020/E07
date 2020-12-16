import SignIn from "../../src/components/SignIn.vue";
import { mount } from "@vue/test-utils";

describe("SignIn.vue", () => {
  it("Comprobando que SignIn funciona", async() => {
   const wrapper = mount(SignIn, {
     stubs: ['router-link']
   })
   const input = wrapper.find("#inputEmail")
   await input.setValue("my@mail.com")
   expect(input.element.value).toBe("my@mail.com")
  })
})