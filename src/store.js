import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedin: false,
    token: null,
    timer: false,
    user: null
  },
  mutations: {
    singIn(state, data) {
      state.loggedin = true;
      state.token = data.token;
      state.user = data.nickname;
    },
    logOut(state) {
      state.loggedin = false;
      state.token = null;     
      state.user = null;
    },
    setTimer(state) {
      state.timer = !state.timer;
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
      context.commit('setTimer')
    }
  },
  getters: {
    loggedin(state) {
      return state.loggedin;
    },
    token(state) {
      return state.token;
    },
    timer(state) {
      return state.timer;
    },
    user(state) {
      return state.user;
    }
  }
})