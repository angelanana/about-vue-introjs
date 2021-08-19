import Vue from 'vue'
import App from './App.vue'
import VueIntro from 'vue-introjs';
import 'intro.js/introjs.css';
import router from './router'

Vue.config.productionTip = false
Vue.use(VueIntro)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
