import Dashboard from "../../src/components/Dashboard";
import { mount, createLocalVue } from "@vue/test-utils";
import sinon from "sinon";
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Dashboard', () => {
	let wrapper, $store;
	
  beforeAll(() => {
    // $store = new Vuex.Store({ 
		// 	state: {
		// 		game: null
		// 	},
		// 	// mutations: {
		// 	// 	setGame(state, value) {
		// 	// 		state.game = value;
		// 	// 	}
		// 	// },
    //   actions: {
    //     setGameAction(context, value) {
		// 			state.game = value;
    //       // context.commit('setGame', value);
    //     }
    //   }
    // })

    // wrapper = mount(Dashboard, {
    //   localVue,
    //   stubs: ['router-link', 'router-view'],
    //   mocks: {
    //     $store
    //   }
		// })
		wrapper = mount(Dashboard);
  });
  
  it('Dashboard montado en wrapper', () => {
		// const wrapper = mount(Dashboard);
    expect(wrapper.vm.games).not.toBe(undefined);
	});

  // it('El usuario hizo click en TicTacToe', async () => {
	// 	const spy = sinon.spy();
	// 	const wrapper = mount(Dashboard, {
	// 		propsData: {
	// 			ToGame: spy
	// 		}
	// 	});
	// 	// let image = await wrapper.find('img#TicTacToe');
	// 	// expect(wrapper.find("img").attributes().src).toBe("/game")

	// 	await wrapper.find('img#Simon').trigger('click');
	// 	expect(spy.calledWithMatch('Simon')).toBe(true)

	// 	// await wrapper.find('img#MirsBall').trigger('click');
	// 	// expect(spy.calledWithMatch('MirsBall')).toBe(true)

	// 	// await wrapper.find('img#Simon').trigger('click');
	// 	// expect(spy.calledWithMatch('MirsBall')).toBe(false)
	// 	// expect(spy.calledWithMatch('TicTacToe')).toBe(true);

	// 	// expect(true).toBe(true);
	// 	// assertTrue(spy);
	// 	// console.log(spy.calledWithMatch('TicTacToe'))
	// 	// expect(spy.calledWithMatch('TicTacToe')).toBe(true);
	// 	// const button = wrapper.find('#TicTacToe');
	// 	// // const spy = jest.spyOn(wrapper.vm, 'toGameTest');
	// 	// button.trigger('click');
	// 	// const spy = wrapper.vm.goToGame;
	// 	// // await wrapper.vm.$nextTick();
	// 	// // expect(spy).toHaveBeenCalled();
	// 	// expect(spy).toHaveBeenCalled();
	// 	// jest.restoreAllMocks();
	// 	// await wrapper.find('#TicTacToe').trigger('click');
	// 	// const mockFn = jest.fn().mockName('gotoGame("TicTacToe")');
	// 	// expect(mockFn).toHaveBeenCalled();

});