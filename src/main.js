// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Input, Select, Radio, Option}  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'

Vue.use(Input)
Vue.use(Select)
Vue.use(Radio)
Vue.use(Option)
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

