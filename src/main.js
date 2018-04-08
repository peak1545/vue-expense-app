import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// BEGIN VUE AWESOME
import 'vue-awesome/icons/book';
import 'vue-awesome/icons/users';
import 'vue-awesome/icons/dollar-sign';
import 'vue-awesome/icons/question';
import 'vue-awesome/icons/code';

import Icon from 'vue-awesome/components/Icon';

Vue.component('icon', Icon);
// END VUE AWESOME

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import auth from '@/auth/AuthService';
Vue.use(auth);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
