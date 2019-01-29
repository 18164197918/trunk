export default [
  {
    path: 'sub1',
    name: 'sub1',
    cName: 'sub1',
    isShowBlock: true,
    redirect: 'sub/sub1',
    component: { template: `<router-view/>` },
    children: [
      {
        path: 'sub1',
        name: 'sub1.sub1',
        cName: 'sub1-1',
        component: () => import(/* webpackChunkName: "shop" */ './sub1.vue')
      },
      {
        path: 'sub2',
        name: 'sub1.sub2',
        cName: 'sub1-2',
        component: () => import(/* webpackChunkName: "shop" */ './sub2.vue')
      }
    ]
  }
]
