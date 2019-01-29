export default [
  {
    cName: '门店',
    icon: 'iconfont-pingfang',
    children: [
      {
        path: 'store',
        name: 'store',
        cName: '门店列表',
        redirect: 'store/list',
        component: { template: `<router-view/>` },
        children: [
          {
            path: 'list',
            name: 'store.list',
            cName: 'store-list',
            component: () => import(/* webpackChunkName: "shop" */ './list/list.vue')
          },
          {
            path: 'add',
            name: 'store.add',
            cName: 'store-add',
            component: () => import(/* webpackChunkName: "shop" */ './list/form.vue')
          },
          {
            path: 'edit/:id',
            name: 'store.edit',
            cName: 'store-edit',
            component: () => import(/* webpackChunkName: "shop" */ './list/form.vue')
          },
          {
            path: 'set/:id',
            name: 'store.set',
            cName: 'store-set',
            component: () => import(/* webpackChunkName: "shop" */ './list/set.vue')
          },
          {
            path: 'notice/:id',
            name: 'store.notice',
            cName: 'notice-set',
            component: () => import(/* webpackChunkName: "shop" */ './list/notice.vue')
          },
          {
            path: 'delivery/:id',
            name: 'store.delivery',
            cName: 'store.delivery',
            redirect: 'delivery/:id/distribution',
            component: { template: `<router-view/>` },
            children: [
              {
                path: 'distribution',
                name: 'store.delivery.distribution',
                cName: 'store.delivery.distribution',
                component: () => import(/* webpackChunkName: "shop" */ './list/delivery/distribution.vue')
              },
              {
                path: 'pickup',
                name: 'store.delivery.pickup',
                cName: 'store.delivery.pickup',
                component: () => import(/* webpackChunkName: "shop" */ './list/delivery/pickup.vue')
              },
              {
                path: 'address',
                name: 'store.delivery.address',
                cName: 'store.delivery.address',
                component: () => import(/* webpackChunkName: "shop" */ './list/delivery/address.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'storeTags',
        name: 'storeTags',
        cName: '门店标签',
        component: () => import(/* webpackChunkName: "shop" */ './tags.vue')
      }
    ]
  }
]
