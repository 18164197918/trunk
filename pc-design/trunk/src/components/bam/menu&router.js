import manage from './index.vue'
// import center from './center/menu&router'
import terminal from './terminal/menu&router'
import product from './product/menu&router'
import admin from './admin/menu&router'
import info from './info/menu&router'
import member from './member/menu&router'
import decorate from './template-decorate/menu&router'
import payTenant from './pay-tenant/menu&router'

export default {
  containRouter: true,
  root: {
    path: '/bam',
    cName: '后台管理',
    redirect: '/bam/info',
    component: manage
  },
  list: [
    ...info,
    ...product,
    ...decorate,
    ...terminal,
    ...admin,
    ...member,
    ...payTenant
  ]
}
