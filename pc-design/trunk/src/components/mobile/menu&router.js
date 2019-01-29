export default {
  containRouter: true,
  root         : {
    path     : '/mobile',
    name     : 'mobile',
    redirect : '/mobile/edit/',
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
          name     : 'mobileEdit',
          component: () => import('./edit.vue'),
        },
      ],
    },

  ],
}
