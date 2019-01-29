import index from './index.vue'

export default [
  {
    cName: '',
    icon: '',
    children: [
      {
        cName: '站点信息',
        path: 'siteInfo',
        component: index,
        children: []
      }
    ]
  }
]
