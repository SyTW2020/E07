import Timer from "../../src/components/Timer";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Timer', () => {
  let wrapper, $store;

  beforeAll(() => {
    $store = new Vuex.Store({
      state: {
        timer: false
      },
      getters: {
        token(state) {
          return state.timer;
        }
      }
    });

    wrapper = mount(Timer, {
      mocks: {
        $store
      }
    });
  });
  
  it('Time montado en wrapper', () => {
    expect(wrapper.vm.time).not.toBe(undefined);
  });
  
  it('Contador funcionando - 1seg', () => {
    expect(wrapper.vm.time).toBe('00:00:00.000');
    wrapper.vm.start();
    setInterval(wrapper.vm.stop(), 1000);
    expect(wrapper.vm.time).not.toBe('00:00:01.000');
  });

  it('Contador funcionando - 5seg', () => {
    wrapper.vm.start();
    setInterval(wrapper.vm.stop(), 5000);
    expect(wrapper.vm.time).not.toBe('00:00:05.000');
  });
});