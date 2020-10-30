import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './index'
import VueScrollTo from 'vue-scrollto'

Vue.use(Vuex)
Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
