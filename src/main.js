// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//css初始化
import  './assets/css/reset.css'
import  './assets/css/iconfont.css'

//Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

//axios
import axios from 'axios'
Vue.prototype.$http =axios;

//vuex
import store from './store'


//js
import FastClick from 'fastclick'
FastClick.attach(document.body);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
