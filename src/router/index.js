import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginApp from '@/components/LoginApp'
import SignupApp from '@/components/SignupApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'LoginApp',
      component: LoginApp
    },
    {
      path: '/signup',
      name: 'SignupApp',
      component: SignupApp
    }
  ]
})
