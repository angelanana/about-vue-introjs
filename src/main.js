import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueIntro from 'vue-introjs';
import 'intro.js/introjs.css';


Vue.use(VueIntro)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
