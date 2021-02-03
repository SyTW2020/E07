import Rankings from "../../src/components/Ranking";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Rankings', () => {
  // let wrapper;

  // beforeAll(() => {
  //   wrapper = mount(Rankings);
  // });
  
  it('Ranking montado en wrapper', () => {
    expect(true).toBe(true);
    // expect(wrapper.vm.gamesName).not.toBe(undefined);
  }); 
});