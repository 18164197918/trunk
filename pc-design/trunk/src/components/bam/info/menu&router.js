import index from './index.vue'
import customerUser from './customerUser.vue'
export default [
  {
    cName: '',
    icon: '',
    children: [
      {
        cName: '信息管理',
        path: 'info',
        component: index,
        redirect: 'info/customerUser',
        children: [
          {
            cName: '客户用户信息',
            path: 'customerUser',
            component: customerUser
          }
        ]
      }
    ]
  }
]
