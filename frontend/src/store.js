import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggedin: false,
        token: null
    },
    mutations: {
        singIn(state, data) {
            state.loggedin = true;
            state.token = data.token;
        },
        logOut(state) {
            state.loggedin = false;
            state.token = null;     // Cogerlo desde la respuesta de la API
        }
    },
    actions: {
        signInAction(context, data) {
            context.commit('singIn', data);
        },
        logOutAction(context) {
            context.commit('logOut');
        },
    },
    getters: {
        loggedin(state) {
            return state.loggedin;
        },
        token(state) {
            return state.token;
        }
    }
})