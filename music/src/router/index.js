import Vue from 'vue'
import Router from 'vue-router'
import myPublic from '@/components/public'
import Home from '@/components/home'
import List from '@/components/list'
import Serch from '@/components/serch'
import Play from '@/components/play'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/public',
      component: myPublic,
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/list',
          component: List
        },
        {
          path: "/serch",
          component: Serch
        }
      ]
    },
    {
      path:"/play",
      component: Play
    },
    {
      path: "*",
      redirect: "/home"
    }

  ]
})
