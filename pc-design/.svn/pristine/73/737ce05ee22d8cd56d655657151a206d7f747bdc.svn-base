import column from './column/menu&router'
import content from './content/menu&router'
import form from './form/menu&router'

export default {
  containRouter: true,
  root: {
    path: '/category',
    cName: '企业版',
    redirect: '/category/manager',
    component: require('./index.vue').default,
    scene: 'business'
  },
  list: [
    ...column,
    ...content,
    ...form
  ]
}
