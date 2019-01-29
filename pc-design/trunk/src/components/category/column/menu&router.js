export default [
  {
    cName: '栏目',
    icon: 'iconfont-pingfang',
    children: [
      {
        path: 'manager',
        name: 'manager',
        cName: '栏目管理',
        component: () => import(/* webpackChunkName: "category" */ './manager/index.vue')
      },
      {
        path: 'model',
        name: 'model',
        cName: '栏目模型',
        component: () => import(/* webpackChunkName: "category" */ './model/index.vue')
      },
      {
        path: 'recovery',
        name: 'recovery',
        cName: '栏目回收站',
        component: () => import(/* webpackChunkName: "category" */ './recovery/index.vue')
      }
    ]
  }
]
