export default [
  {
    path     : 'contManager',
    name     : 'contManager',
    cName    : '内容管理',
    redirect : 'contManager/list',
    component: {template: `<router-view/>`},
    children : [
      {
        path     : 'list',
        name     : '内容列表',
        cName    : '内容列表',
        component: () => import(/* webpackChunkName: "category" */ './list.vue'),
      },
      {
        path     : 'create/:id',
        name     : '创建内容',
        cName    : '创建内容',
        component: () => import(/* webpackChunkName: "category" */ './create.vue'),
      },
    ],
  },
]
