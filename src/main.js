import Vue from 'vue'
import App from './App.vue'
import store from './sotre'
import router from './router'
import myBanner from './components/Banner'
Vue.component('myBanner',myBanner)

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App),
  store,
  router
})
