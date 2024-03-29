import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
// import { store } from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://www.omdbapi.com/?apikey=aeb68ae5&page=1&type=movie&Content-Type=application/json'
new Vue({
  render: h => h(App),
  // store,
  router
}).$mount('#app')