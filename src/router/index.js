import Vue from 'vue'
import Router from 'vue-router'
import AdminHome from '@/components/AdminHome'
import PaishouManage from '@/components/PaishouManage'
import BidManage from '@/components/BidManage'
import BiaoshuManage from '@/components/BiaoshuManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AdminHome',
      component: AdminHome,
      children: [{
        path: 'paishoumanage',
        component: PaishouManage
      }, {
        path: 'biaoshumanage',
        component: BiaoshuManage
      }, {
        path: 'bidmanage',
        component: BidManage
      }]
    }
  ]
})
