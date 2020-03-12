import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en'
import Routers from './router'
import store from './store'

Vue.use(VueRouter)
// Vue.use(ElementUI, {locale})

Vue.config.productionTip = false
const router = new VueRouter(Routers)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
