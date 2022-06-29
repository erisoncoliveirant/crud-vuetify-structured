import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// filters
import { shortDateFilter } from './filters/dateFilter'

Vue.config.productionTip = false
Vue.filter('shortDateFilter', shortDateFilter)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
