import Dashboard from "../../src/components/Dashboard";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Dashboard', () => {
	let wrapper;
	
  beforeAll(() => {
		wrapper = mount(Dashboard);
  });
  
  it('Dashboard montado en wrapper', () => {
    expect(wrapper.vm.games).not.toBe(undefined);
  }); 
});