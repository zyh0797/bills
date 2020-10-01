import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Chart from '../views/chart/Chart.vue'
import Mine from '../views/mine/Mine.vue'
import Record from '../views/record/Record.vue'
import Item from '../views/item/Item.vue'
import Detail from '../views/detail/Detail.vue'
import Edit from '../views/edit/Edit.vue'

Vue.use(Router)

export default new Router({
    routes: [
      {path: '/', redirect: '/home'},
      {path: '/home', component: Home, meta: {showFooter: true}},
      {path: '/chart', component: Chart, meta: {showFooter: true}},
      {path: '/mine', component: Mine, meta: {showFooter: true}},
      {path: '/record', component: Record },
      {path: '/item', component: Item},
      {path: '/detail', component: Detail},
      {path: '/edit', component: Edit}
    ]
})
