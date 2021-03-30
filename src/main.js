import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import './assets/css/tailwind.css';

Vue.config.productionTip = false;

Vue.filter('date', (value) => {
  if (!window.Intl) return value;
  // convert to date
  if (!(value instanceof Date)) {
    const orig = value;
    // eslint-disable-next-line no-param-reassign
    value = new Date(value);
    if (value === 'Invalid Date') return orig;
  }
  return new Intl.DateTimeFormat().format(value);
});

Vue.filter('kebabCase', (value) => {
  if (!value) return '';
  return value.replace(/\s+/g, '-').toLowerCase();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
