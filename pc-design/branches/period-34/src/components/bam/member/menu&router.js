import index from './member.vue'
export default [
  {
    cName: '',
    icon: '',
    children: [
      {
        cName: '会员管理',
        path: 'member',
        component: index,
        children: [

        ]
      }
    ]
  }
]
