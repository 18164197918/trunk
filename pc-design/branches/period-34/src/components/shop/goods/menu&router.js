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
        redirect: 'singleGoods/goodsAdd',
        component: { template: `<router-view/>` },
        children: [
          {
            path: 'goodsList',
            name: 'singleGoods/goodsList',
            cName: '商品列表',
            component: () => import(/* webpackChunkName: "shop" */ './single-goods/goods-list.vue')
          },
          {
            path: 'goodsAdd',
            name: 'singleGoods.goodsAdd',
            cName: 'goodsAdd',
            isShow: false,
            mock: 'goodsList',
            component: () => import(/* webpackChunkName: "shop" */ './single-goods/goods-add.vue')
          },
          {
            path: 'classificationList',
            name: 'singleGoods.classificationList',
            cName: '单品库分类',
            component: () => import(/* webpackChunkName: "shop" */ './single-goods/classification-list.vue')
          }
        ]
      }
    ]
  }
]
