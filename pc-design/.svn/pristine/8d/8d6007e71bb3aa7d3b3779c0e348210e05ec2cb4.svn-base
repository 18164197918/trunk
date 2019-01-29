export default [
  {
    path: 'sub3',
    name: 'sub3',
    cName: 'sub3',
    isShowBlock: true,
    redirect: 'sub3/sub1',
    component: { template: `<router-view/>` },
    children: [
      {
        path: 'sub1',
        name: 'sub3.sub1',
        cName: 'sub3-1',
        component: () => import(/* webpackChunkName: "shop" */ './sub1.vue')
      },
      {
        path: 'sub2',
        name: 'sub3.sub2',
        cName: 'sub3-2',
        isShow: false,
        mock: 'sub1',
        component: () => import(/* webpackChunkName: "shop" */ './sub2.vue')
      }
    ]
  }
]
