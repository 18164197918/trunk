import contManager from './manager/menu&router'
import contModel from './model/menu&router'
export default [
  {
    cName: '内容',
    icon: 'iconfont-pingfang',
    children: [
      ...contManager,
      ...contModel,
      {
        path: 'contLabel',
        name: 'contLabel',
        cName: '标签管理',
        component: () => import(/* webpackChunkName: "category" */ './label/index.vue')
      },
      {
        path: 'contRecovery',
        name: 'contRecovery',
        cName: '内容回收站',
        component: () => import(/* webpackChunkName: "category" */ './recovery/index.vue')
      },
    ]
  }
]

