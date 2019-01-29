export default [
  {
    path: 'inboundOrder.list',
    name: 'inboundOrder.list',
    cName: '入库单',
    component: () => import(/* webpackChunkName: "shop" */ './index.vue')
  },
  {
    path: 'inboundOrder.detail',
    name: 'inboundOrder.detail',
    cName: '详情',
    isShow: false,
    mock: 'inboundOrder.list',
    component: () => import(/* webpackChunkName: "shop" */ './detail.vue')
  },
  {
    path: 'inboundOrder.purchase',
    name: 'inboundOrder.purchase',
    cName: '采购入库',
    isShow: false,
    mock: 'inboundOrder.list',
    component: () => import(/* webpackChunkName: "shop" */ './purchase.vue')
  },
  {
    path: 'inboundOrder.return',
    name: 'inboundOrder.return',
    cName: '退货入库',
    isShow: false,
    mock: 'inboundOrder.list',
    component: () => import(/* webpackChunkName: "shop" */ './return.vue')
  },
  {
    path: 'inboundOrder.other',
    name: 'inboundOrder.other',
    cName: '其他入库',
    isShow: false,
    mock: 'inboundOrder.list',
    component: () => import(/* webpackChunkName: "shop" */ './other.vue')
  }
]
