import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/view/index/index.vue'
  import Leaflets from '@/view/leaflets/leaflets.vue'
  import VpnScreen from '@/view/vpnScreen/vpnScreen.vue'
  import XbTest from '@/view/xbTest/xbTest.vue'
  import Classroom from '@/view/classroom/classroom.vue'
  import Know from '@/view/know/know.vue'
  import Login from '@/view/login/login.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: __dirname,
  // linkActiveClass: 'active', // 更改激活状态的Class值
  routes: [
    { path: "/", name: "Index", component: Index},
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'leaflets',
          name: 'Leaflets',
          component: Leaflets,
        },
        {
          path: 'vpnScreen',
          name: 'VpnScreen',
          component: VpnScreen,
        },
        {
          path: 'xbTest',
          name: 'XbTest',
          component: XbTest,
        },
        {
          path: 'know',
          name: 'Know',
          component: Know,
        },
        {
          path: 'classroom',
          name: 'Classroom',
          component: Classroom,
        },
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },
      ]
    },
  ]
})
