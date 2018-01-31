import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PartC from '@/components/PartC'
import PartD from '@/components/PartD'
import PartE from '@/components/PartE'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/abcc',
      name: 'PartC',
      component: PartC
    },
    {
      path: '/abcd',
      name: 'PartD',
      component: PartD
    },
    {
      path: '/abce',
      name: 'PartE',
      component: PartE
    }
  ]
})
