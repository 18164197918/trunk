import index from './index.vue'
import model from './model/index.vue'
import manager from './manager/index.vue'
import recovery from './recovery/index.vue'
import label from './label/index.vue'
export default [
  {
    cName: '',
    icon: '',
    children: [
      {
        cName: '内容',
        path: 'content',
        component: index,
        redirect: 'content/model',
        children: [
          {
            cName: '内容模型',
            path: 'model',
            component: model
          },
          {
            cName: '内容管理',
            path: 'manager',
            component: manager
          },
          {
            cName: '内容回收站',
            path: 'recovery',
            component: recovery
          },
          {
            cName: '标签管理',
            path: 'label',
            component: label
          }
        ]
      }
    ]
  }
]
