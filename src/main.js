import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import './style/style.css'
import '@/plugins/vcharts'

import bus from '@/eventbus'
Vue.config.productionTip = false
Vue.prototype.bus=bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
