// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import './assets/css/common.scss'

Vue.config.productionTip = false

import MainApp from './components/MainApp';
import HelloWorld from './components/HelloWorld';
Vue.component('main-app', MainApp);
Vue.component('hello-world', HelloWorld);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router
})
