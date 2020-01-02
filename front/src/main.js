import Vue from 'vue'

import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './router/permission' // 权限
import './registerServiceWorker'
import './plugins/element'
import './core/use'
import bootstrap from './core/bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App),
}).$mount('#app')
