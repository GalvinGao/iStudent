import Vue from 'vue/dist/vue.js'
import App from '@/App.vue'
import Antd from 'vue-antd-ui'
import VueRouter from 'vue-router'
//const anime = require('animejs')
import 'vue-antd-ui/dist/antd.css'

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(VueRouter)

const MainPage = () => import('@/components/MainPage.vue')
const ToolsIndex = () => import(/* webpackChunkName: "Tools" */ '@/components/Tools/Index.vue')
const ToolsMainPage = () => import(/* webpackChunkName: "Tools" */ '@/components/Tools/MainPage.vue')
const ToolsHandler = () => import(/* webpackChunkName: "Tools" */ '@/components/Tools/Handler.vue')
const TodayIndex = () => import(/* webpackChunkName: "Today" */ '@/components/Today/Index.vue')
const TodayHomework = () => import(/* webpackChunkName: "Today" */ '@/components/Today/Homework.vue')

const routes = [{
    path: '/',
    component: MainPage
  },
  {
    path: '/tools',
    component: ToolsIndex,
    children: [{
      path: '',
      components: {
        tools: ToolsMainPage
      }
    }, {
      path: ':category/:item',
      components: {
        tools: ToolsHandler
      }
    }]
  },
  {
    path: '/today',
    component: TodayIndex
  },
  {
    path: '/today/homework',
    component: TodayHomework
  }
]

const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
