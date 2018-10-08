import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/view/index/index.vue'
  // 主页面
  import Leaflets from '@/view/leaflets/leaflets.vue'
  import VpnScreen from '@/view/vpnScreen/vpnScreen.vue'
  import XbTest from '@/view/xbTest/xbTest.vue'
  import Classroom from '@/view/classroom/classroom.vue'
  import Know from '@/view/know/know.vue'
  // footer
  import Faq from '@/view/foot-link/faq.vue'
  import Rule from '@/view/foot-link/rule.vue'
  import Privacy from '@/view/foot-link/privacy.vue'
  import YoaiMedecine from '@/view/foot-link/yoaiMedecine.vue'
  import NewsCenter from '@/view/foot-link/newsCenter.vue'
  import JoinUs from '@/view/foot-link/joinUs.vue'
  import EthicsCommittee from '@/view/foot-link/ethicsCommittee.vue'
    //新闻中心
    import newsOne from '@/view/foot-link/newsCenter/news1.vue'
    import newsTwo from '@/view/foot-link/newsCenter/news2.vue'
    import newsThree from '@/view/foot-link/newsCenter/news3.vue'
    import newsFour from '@/view/foot-link/newsCenter/news4.vue'
    import newsFive from '@/view/foot-link/newsCenter/news5.vue'
    import newsSix from '@/view/foot-link/newsCenter/news6.vue'
    import newsSeven from '@/view/foot-link/newsCenter/news7.vue'
    import newsEight from '@/view/foot-link/newsCenter/news8.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: __dirname,
  // linkActiveClass: 'active', // 更改激活状态的Class值
  routes: [
    {
      path: '/',
      redirect: '/index/leaflets'
    },
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
          meta: {
            title: '登录',
            // ignoreAuth: true
          },
          component: resolve => require(['../view/login/login'], resolve)
        },
        //footer链接
        {
          path: 'faq',
          name: 'Faq',
          component: Faq,
        },
        {
          path: 'rule',
          name: 'Rule',
          component: Rule,
        },
        {
          path: 'privacy',
          name: 'Privacy',
          component: Privacy,
        },
        {
          path: 'yoaiMedecine',
          name: 'YoaiMedecine',
          component: YoaiMedecine,
        }, 
        {
          path: 'newsCenter',
          name: 'NewsCenter',
          component: NewsCenter,
        },
        {
          path: 'joinUs',
          name: 'JoinUs',
          component: JoinUs,
        },
        {
          path: 'ethicsCommittee',
          name: 'EthicsCommittee',
          component: EthicsCommittee,
        },
        //新闻中心页面链接(待做)



            
      ]
    },
  ]
})
