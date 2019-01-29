import basis from './basis/menu&router'
import goods from './goods/menu&router'
import routerDemo from './demo/menu&router'
import stock from './stock/menu&router'
import store from './store/menu&router'

export default {
  containRouter: true,
  root: {
    path: '/shop',
    cName: '商城',
    scene: 'business',
    redirect: '/shop/information',
    component: require('./index.vue').default,
    scene: 'business'
  },
  list: [
    ...basis,
    ...goods,
    ...store,
    ...routerDemo,
    ...stock
  ]
}
