import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggedin: false        
      
    },
    mutations: {
        singIn(state) {
            state.loggedin = true;
        },
        logOut(state) {
            state.loggedin = false;
        }
    },
    actions: {
        signInAction(context) {
            context.commit('singIn');
        },
        logOutAction(context) {
            context.commit('logOut');
        }
    },
    getters: {
        loggedin(state) {
            return state.loggedin;
        },
    }
})     