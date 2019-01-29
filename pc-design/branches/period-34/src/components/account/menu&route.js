import index from './index.vue'
import login from './login.vue'
import register from './register.vue'

export default {
  containRouter: true,
  root: {
    path: '/account',
    cName: '账户',
    redirect: '/account/login',
    component: index
  },
  list: [
    {
      cName: '',
      icon: '',
      children: [
        {
          cName: 'login',
          path: 'login',
          component: login
        },
        {
          cName: 'register',
          path: 'register',
          component: register
        }
      ]
    }
  ]
}
