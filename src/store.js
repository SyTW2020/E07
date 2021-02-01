import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    timer: false,
    valueTimer: null,
    user: null,
    game: null
  },
  mutations: {
    singIn(state, data) {
      state.token = data.token;
      state.user = data.user;
    },
    logOut(state) {
      state.token = null;
      state.user = null;
    },
    setTimer(state) {
      state.timer = !state.timer;
    },
    setValueTimer(state, value) {
      state.valueTimer = value;
    },
    setGame(state, value) {
      state.game = value;
    }
  },
  actions: {
    signInAction(context, data) {
      context.commit('singIn', data);
    },
    logOutAction(context) {
      context.commit('logOut');
    },
    setTimerAction(context) {
      context.commit('setTimer');
    },
    setValueTimerAction(context, value) {
      context.commit('setValueTimer', value);
    },
    setGameAction(context, value) {
      context.commit('setGame', value);
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
    }
  }
})