import index from './index.vue'
import adminAdd from './admin-add.vue'
import adminList from './admin-list.vue'

export default [
  {
    cName: '',
    icon: '',
    children: [
      {
        cName: '管理员',
        path: 'admin',
        component: index,
        redirect: 'admin/adminList',
        children: [
          {
            cName: '新建管理员',
            path: 'adminAdd/:id',
            component: adminAdd
          },
          {
            cName: '管理员列表',
            path: 'adminList',
            component: adminList
          }
        ]
      }
    ]
  }
]
