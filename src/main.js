import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./util/getData";
import Toast from "./tool/toast/index";
Vue.config.productionTip = false
Vue.use(function(Vue){
  Vue.prototype.$api = api;
})

  Vue.prototype.$toast = Toast;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
