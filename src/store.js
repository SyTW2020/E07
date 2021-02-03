import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
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
  actions: {
    signInAction(context, data) {
      context.commit('signIn', data);
    },
    logOutAction(context) {
      context.commit('logOut');
    },
    setTimerAction(context, value) {
      context.commit('setTimer', value);
    },
    setValueTimerAction(context, value) {
      context.commit('setValueTimer', value);
    },
    setGameAction(context, value) {
      context.commit('setGame', value);
    },
    setGameStatusAction(context, data) {
      context.commit('setGameStatus', data);
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