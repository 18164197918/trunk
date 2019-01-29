export default [
  {
    path: 'outboundOrder.list',
    name: 'outboundOrder.list',
    cName: '出库单',
    component: () => import(/* webpackChunkName: "shop" */ './index.vue')
  },
  {
    path: 'outboundOrder.detail',
    name: 'outboundOrder.detail',
    cName: '详情',
    isShow: false,
    mock: 'outboundOrder.list',
    component: () => import(/* webpackChunkName: "shop" */ './detail.vue')
  },
  {
    path: 'outboundOrder.add',
    name: 'outboundOrder.add',
    cName: '新建库存',
    isShow: false,
    mock: 'outboundOrder.list',
    component: () => import(/* webpackChunkName: "shop" */ './add.vue')
  }
]
