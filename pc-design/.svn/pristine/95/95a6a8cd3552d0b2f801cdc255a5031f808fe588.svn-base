export default [
  {
    path: 'inboundOrderList',
    name: 'inboundOrder.list',
    cName: '入库单',
    component: () => import(/* webpackChunkName: "shop" */ './index.vue')
  },
  {
    path: 'inboundOrderDetail/:mode',
    name: 'inboundOrder.detail',
    cName: '入库单详情',
    isShow: false,
    mock: 'inboundOrder.list',
    component: () => import(/* webpackChunkName: "shop" */ './detail.vue')
  },
  {
    path: 'inboundOrderForm/:mode',
    name: 'inboundOrderForm',
    cName: '入库单',
    isShow: false,
    mock: 'inboundOrder.list',
    component: () => import(/* webpackChunkName: "shop" */ './form.vue')
  }
]
