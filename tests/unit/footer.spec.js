import Footer from "../../src/components/Footer";
import { mount } from "@vue/test-utils";

describe('AboutUs', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(Footer, {
      stubs: ['router-link', 'router-view']
    });
  });
  
  it('Footer montado en wrapper', () => {
    expect(wrapper.find(".bodyFooter").selector).toBe(".bodyFooter");
  });

  it('Link funcionando', async () => {
    expect(wrapper.find('.links a').attributes().href).toBe("https://github.com/SyTW2020/E07");
  });

  it('Router-link funcionando', async () => {
    expect(wrapper.find('#BAboutUs').attributes().to).toBe("/aboutus");
  });
});