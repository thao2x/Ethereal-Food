import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add icons to the library */


/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas,faUserSecret)
// Import Bootstrap and BootstrapVue CSS files (order is important)
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Optionally install the BootstrapVue icon components plugin
// vuex
Vue.use(Vuex)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})

// window.vm = new Vue({
//   el: '#app',
//   router,
//   store: store,
//   components: {
//     App
//   },
//   template: '<App/>',
//   render: h => h(App)
// })
