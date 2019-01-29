import index from './index.vue'
import user from './user.vue'
import admin from './admin.vue'
export default {
  containRouter: true,
  root: {
    path: '/userInit',
    cName: '账户',
    redirect: '/userInit/user',
    component: index
  },
  list: [
    {
      cName: '',
      icon: '',
      children: [
        {
          cName: 'user',
          path: 'user',
          component: user
        },
        {
          cName: 'admin',
          path: 'admin',
          component: admin
        }
      ]
    }
  ]
}
