import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import GameStart from '@/components/GameStart'
import Blue1 from '@/components/Cards/Blue1'
import Brown1 from '@/components/Cards/Brown1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/gamestart',
      name: 'gamestart',
      component: GameStart
    },
    {
      path: '/blue1',
      name: 'blue1',
      component: Blue1
    },
    {
      path: '/brown1',
      name: 'brown1',
      component: Brown1
    },
  ]
})
