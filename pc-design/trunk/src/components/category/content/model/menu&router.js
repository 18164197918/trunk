export default [
  {
    path: 'contModel',
    name: 'contModel',
    cName: '内容模型',
    redirect: 'contModel/list',
    component: { template: `<router-view/>` },
    children: [
      {
        path: 'list',
        name: '模型列表',
        cName: '模型列表',
        component: () => import(/* webpackChunkName: "category" */ './list.vue')
      },
      {
        path: 'creat/:id',
        name: '创建模型',
        cName: '创建模型',
        component: () => import(/* webpackChunkName: "category" */ './creat.vue')
      }
    ]
  }
]
