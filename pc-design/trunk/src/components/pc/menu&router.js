export default {
  containRouter: true,
  root         : {
    path     : '/pc',
    name     : 'pc',
    redirect : '/pc/edit/',
    component: () => import('./index.vue'),
  },
  list         : [
    {
      cName   : '',
      icon    : '',
      children: [
        {
          cName    : '编辑',
          path     : 'edit/:siteId/:pageId',
          name     : 'pcEdit',
          component: () => import('./edit.vue'),
        },
      ],
    },

  ],
}
