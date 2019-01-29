import index from './index.vue'
import model from './model/index.vue'
import manager from './manager/index.vue'
import recovery from './recovery/index.vue'
export default [
  {
    cName: '',
    icon: '',
    children: [
      {
        cName: '栏目',
        path: 'column',
        component: index,
        redirect: 'column/model',
        children: [
          {
            cName: '栏目模型',
            path: 'model',
            component: model
          },
          {
            cName: '栏目管理',
            path: 'manager',
            component: manager
          },
          {
            cName: '栏目回收站',
            path: 'recovery',
            component: recovery
          }
        ]
      }
    ]
  }
]
