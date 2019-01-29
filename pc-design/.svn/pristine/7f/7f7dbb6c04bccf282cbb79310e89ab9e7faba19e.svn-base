export default [
  {
    cName: '店铺',
    icon: 'iconfont-pingfang',
    children: [
      {
        path: 'information',
        name: 'information',
        cName: '店铺信息',
        component: () => import(/* webpackChunkName: "shop" */ './information.vue')
      },
      {
        path: 'commonSettings',
        name: 'commonSettings',
        cName: '通用设置',
        component: () => import(/* webpackChunkName: "shop" */ './common-settings.vue')
      },
      {
        path: 'saleConfig',
        name: 'saleConfig',
        cName: '交易设置',
        component: () => import(/* webpackChunkName: "shop" */ './sale-config.vue')
      }
    ]
  }
]
