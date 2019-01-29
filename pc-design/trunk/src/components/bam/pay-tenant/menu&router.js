import index from './index.vue'
import choosePay from './choose-pay.vue'
import bdPay from './bd-pay.vue'
import wxPay from './wx-pay.vue'

export default [
  {
    cName: '',
    icon: '',
    children: [
      {
        cName: '支付商户平台',
        path: 'pay',
        component: index,
        redirect: 'pay/choosePay',
        children: [{
          cName: '支付选择',
          path: 'choosePay',
          component: choosePay
        }, {
          cName: '百度平台',
          path: 'bdPay',
          component: bdPay
        }, {
          cName: '微信平台',
          path: 'wxPay',
          component: wxPay
        }

        ]
      }
    ]
  }
]
