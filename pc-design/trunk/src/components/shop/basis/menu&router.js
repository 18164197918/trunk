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
        path: 'selfMentionPoint',
        name: 'selfMentionPoint',
        cName: '自提点设置',
        redirect: 'selfMentionPoint/list',
        component: { template: `<router-view/>` },
        children: [
          {
            path: 'list',
            name: 'selfMentionPoint.list',
            cName: '',
            component: () => import(/* webpackChunkName: "shop" */ './self-mention/list.vue')
          },
          {
            path: 'add',
            name: 'selfMentionPoint.add',
            cName: '新增自提点',
            component: () => import(/* webpackChunkName: "shop" */ './self-mention/form.vue')
          },
          {
            path: 'edit/:id',
            name: 'selfMentionPoint.edit',
            cName: '编辑自提点',
            component: () => import(/* webpackChunkName: "shop" */ './self-mention/form.vue')
          },
          {
            path: 'set',
            name: 'selfMentionPoint.set',
            cName: '设置',
            component: () => import(/* webpackChunkName: "shop" */ './self-mention/form.vue')
          }
        ]
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
