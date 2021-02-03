import AboutUs from "../../src/components/AboutUs";
import { mount } from "@vue/test-utils";

describe('AboutUs', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(AboutUs);
  });
  
  it('AboutUs montado en wrapper', () => {
    expect(wrapper.find(".bodyAbout").selector).toBe(".bodyAbout");
  });

  it('Links funcionando', async () => {
    expect(wrapper.find('#Paula').attributes().href).toBe("https://github.com/PaulaExposito");
    expect(wrapper.find('#Miriam').attributes().href).toBe("https://github.com/mnzgarcia");
    expect(wrapper.find('#Adan').attributes().href).toBe("https://github.com/AdanRL");
    expect(wrapper.find('#Elena').attributes().href).toBe("https://github.com/elenamsd");
  });
});