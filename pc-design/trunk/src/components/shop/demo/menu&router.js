import sub from './router/sub/menu&router'
import sub2 from './router/sub2/menu&router'
import sub3 from './router/sub3/menu&router'
export default [
  {
    cName: 'demo',
    icon: 'iconfont',
    children: [
      {
        path: 'demo1',
        name: 'demo1',
        cName: 'demo1',
        component: () => import(/* webpackChunkName: "shop" */ './router/demo1.vue')
      },
      {
        path: 'demo2',
        name: 'demo2',
        cName: 'demo2',
        component: () => import(/* webpackChunkName: "shop" */ './router/demo2.vue')
      },
      ...sub,
      ...sub2,
      ...sub3
    ]
  }
]
