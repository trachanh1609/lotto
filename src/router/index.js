import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Blue1 from '@/components/Blue1'
import GameStart from '@/components/GameStart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blue1',
      name: 'blue1',
      component: Blue1
    },
    {
      path: '/gamestart',
      name: 'gamestart',
      component: GameStart
    }
  ]
})
