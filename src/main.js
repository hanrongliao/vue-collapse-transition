import Vue from 'vue'
import App from './App.vue'
import collapse from './collapse'

Vue.use(collapse)

new Vue({
  el: '#app',
  render: h => h(App)
})
