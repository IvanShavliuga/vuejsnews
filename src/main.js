import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import {routes} from './routes';
Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',
	routes
});

export const eventBus = new Vue();

let vm=new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
