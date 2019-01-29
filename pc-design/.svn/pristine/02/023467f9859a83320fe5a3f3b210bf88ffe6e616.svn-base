export default [
  {
    path: 'sub2',
    name: 'sub2',
    cName: 'sub2',
    redirect: 'sub2/sub1',
    component: { template: `<router-view/>` },
    children: [
      {
        path: 'sub1',
        name: 'sub2.sub1',
        cName: 'sub2-1',
        component: () => import(/* webpackChunkName: "shop" */ './sub1.vue')
      },
      {
        path: 'sub2',
        name: 'sub2.sub2',
        cName: 'sub2-2',
        component: () => import(/* webpackChunkName: "shop" */ './sub2.vue')
      }
    ]
  }
]
