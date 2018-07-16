import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');


new Vue({
  render: h => h(App)
}).$mount('#app')
