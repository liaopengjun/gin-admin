import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/view/Main'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/main',
      name: '/Main',
      component: Main
    }
  ]
})
