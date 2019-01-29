export default [
  {
    cName: '表单',
    icon: 'el-icon-document',
    children: [
      {
        path: 'selfForm',
        name: 'selfForm',
        redirect: 'selfForm/list',
        cName: '自定义表单',
        component: { template: `<router-view/>` },
        children: [
          {
            path: 'list',
            name: 'list',
            cName: '列表',
            component: () =>
              import(/* webpackChunkName: "category" */ './form/index.vue')
          },
          {
            path: 'edit/:id',
            name: 'edit',
            cName: '编辑表单',
            component: () =>
              import(/* webpackChunkName: "category" */ './form/edit.vue')
          }
        ]
      },
      {
        path: 'message',
        name: 'message',
        cName: '留言列表',
        component: () =>
          import(/* webpackChunkName: "category" */ './message/index.vue')
      }
    ]
  }
]
