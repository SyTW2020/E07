import { createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: null,
    timer: false,
    valueTimer: null,
    user: null,
    game: null,
    gameStatus: null 
  },
  mutations: {
    signIn(state, data) {
      state.token = data.token;
      state.user = data.user;
		},
    logOut(state) {
      state.token = null;
      state.user = null;
    },
    setTimer(state, value) {
      state.timer = value;
    },
    setValueTimer(state, value) {
      state.valueTimer = value;
    },
    setGame(state, value) {
      state.game = value;
    },
    setGameStatus(state, data) {
      state.gameStatus = data;
    }		
  },
  getters: {
    token(state) {
      return state.token;
    },
    timer(state) {
      return state.timer;
    },
    valueTimer(state) {
      return state.valueTimer;
    },
    user(state) {
      return state.user;
    },
    game(state) {
      return state.game;
    },
    gameStatus(state) {
      return state.gameStatus;
    }
  }
});

describe('Mutations', () => {
	it('Comprobando mutación signIn', () => {
		store.commit('signIn', {
      token: 'estoesunaprueba',
      user: 'User'
    });
		expect(store.state.token).not.toBe(null);
		expect(store.state.user).toBe('User');
  });
  
	it('Comprobando mutación logOut', () => {
		store.commit('logOut');
		expect(store.state.token).toBe(null);
		expect(store.state.user).toBe(null);
  });
  
	it('Comprobando mutación setTimer', () => {
		store.commit('setTimer', true);
		expect(store.state.timer).toBe(true);
  });
  
	it('Comprobando mutación setValueTimer', () => {
		store.commit('setValueTimer', '00:00:00:000');
		expect(store.state.valueTimer).toBe('00:00:00:000');
  });
  
	it('Comprobando mutación setGame', () => {
		store.commit('setGame', 'TicTacToe');
		expect(store.state.game).toBe('TicTacToe');
	});
  
  it('Comprobando mutación setGameStatus', () => {
		store.commit('setGameStatus', {
      msg: true,
      msgText: 'PERDISTE'
    });
    expect(store.state.gameStatus.msg).toBe(true);
    expect(store.state.gameStatus.msgText).toBe('PERDISTE');
	});
});

describe('Getters', () => {
	it('Comprobando getter token', () => {
		expect(store.getters.token).toBe(null);
	});
	
	it('Comprobando getter timer', () => {
		expect(store.getters.timer).toBe(true);
	});
	
	it('Comprobando getter valueTimer', () => {
    expect(store.getters.valueTimer).toBe('00:00:00:000');
	});
	
	it('Comprobando getter user', () => {
		expect(store.getters.user).toBe(null);
	});

	it('Comprobando getter game', () => {
		expect(store.getters.game).not.toBe(null);;
	});

	it('Comprobando getter gameStatus', () => {
		expect(store.getters.gameStatus).not.toBe(null);
	});
});