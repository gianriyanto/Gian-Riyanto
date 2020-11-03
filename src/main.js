import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './index'
import VueScrollTo from 'vue-scrollto'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AOS from 'aos'
import 'aos/dist/aos.css'

library.add(fab, fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuex)
Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app')
