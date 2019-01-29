import inboundOrder from './inbound-order/menu&router'
import outboundOrder from './outbound-order/menu&router'
export default [
  {
    cName: '库存',
    icon: 'iconfont',
    children: [
      {
        path: 'Invoicing',
        name: 'Invoicing',
        cName: '进销存',
        isShowBlock: true,
        redirect: 'Invoicing/storeStock',
        component: { template: `<router-view/>` },
        children: [
          {
            path: 'storeStock',
            name: 'storeStock',
            cName: '门店库存',
            component: () => import(/* webpackChunkName: "shop" */ './store-stock/index.vue')
          },
          {
            path: 'inOutBoundDetail',
            name: 'inOutBoundDetail',
            cName: '出入库明细',
            component: () => import(/* webpackChunkName: "shop" */ './in-out-bound/index.vue')
          },
          ...inboundOrder,
          ...outboundOrder
        ]
      },
      {
        path: 'Supplier',
        name: 'Supplier',
        cName: '供应商',
        isShowBlock: true,
        redirect: 'Supplier/management',
        component: { template: `<router-view/>` },
        children: [
          {
            path: 'management',
            name: 'management',
            cName: '供应商管理',
            component: () => import(/* webpackChunkName: "shop" */ './supplier/list.vue')
          },
          {
            path: 'add',
            name: 'supplier.add',
            cName: 'supplierAdd',
            isShow: false,
            mock: 'management',
            component: () => import(/* webpackChunkName: "shop" */ './supplier/form.vue')
          },
          {
            path: 'edit/:id',
            name: 'supplier.edit',
            cName: 'supplierEdit',
            isShow: false,
            mock: 'management',
            component: () => import(/* webpackChunkName: "shop" */ './supplier/form.vue')
          }
        ]
      }
    ]
  }
]
