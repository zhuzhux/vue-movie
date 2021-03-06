// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
// import Home from './components/HelloFromVux'
import Home from './components/home/home'
import My from './components/my/my'
import Test from './components/testt/test'

import {
  AlertPlugin,
  ToastPlugin
} from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
},
{
  path: '/home',
  name: 'Hello',
  component: Home
}, 
{
  path: '/my',
  name: 'My',
  component: My
}, 
{
  path: '/test',
  name: 'test',
  component: Test
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')


