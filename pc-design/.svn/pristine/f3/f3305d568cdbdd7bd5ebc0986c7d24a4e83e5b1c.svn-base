export default [
  {
    cName: '商品',
    icon: 'iconfont-shangpin',
    children: [
      {
        path: 'singleGoods',
        name: 'singleGoods',
        cName: '单品库',
        // scene: 'business',
        isShowBlock: true,
        redirect: 'singleGoods/list',
        component: { template: `<router-view/>` },
        children: [
          {
            path: 'list',
            name: 'singleGoods/list',
            cName: '单品库列表',
            component: () => import(/* webpackChunkName: "shop" */ './single-goods/list.vue')
          },
          {
            path: 'add',
            name: 'singleGoods.add',
            cName: 'goodsAdd',
            isShow: false,
            mock: 'list',
            component: () => import(/* webpackChunkName: "shop" */ './single-goods/form.vue')
          },
          {
            path: 'edit/:id',
            name: 'singleGoods.edit',
            cName: 'edit',
            isShow: false,
            mock: 'list',
            component: () => import(/* webpackChunkName: "shop" */ './single-goods/form.vue')
          },
          {
            path: 'classificationList',
            name: 'singleGoods.classificationList',
            cName: '单品库分类',
            component: () => import(/* webpackChunkName: "shop" */ './single-goods/classification-list.vue')
          }
        ]
      },
      {
        path: 'goods',
        name: 'goods',
        cName: '商品库',
        isShowBlock: true,
        redirect: 'goods/group',
        component: { template: `<router-view/>` },
        children: [
          {
            path: 'group',
            name: 'group',
            cName: '商品分组',
            component: () => import(/* webpackChunkName: "shop" */ './group/list.vue')
          },
          {
            path: 'groupAdd',
            name: 'group.add',
            cName: 'groupAdd',
            isShow: false,
            mock: 'group',
            component: () => import(/* webpackChunkName: "shop" */ './group/form.vue')
          },
          {
            path: 'groupEdit/:id',
            name: 'group.edit',
            cName: 'groupEdit',
            isShow: false,
            mock: 'group',
            component: () => import(/* webpackChunkName: "shop" */ './group/form.vue')
          }
        ]
      }

    ]
  }
]
