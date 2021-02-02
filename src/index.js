import Vue from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from "./router.js";
import store from './store';

new Vue({
  router,
  store,
  PrimeVue,
  render: h => h(App)
}).$mount('#app');