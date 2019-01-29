import manage from './index.vue'
import columnTpl from './column/index.vue'
import contentTpl from './content/index.vue'
import columnrecovery from './column/recovery/index.vue'
import columnmodel from './column/model/index.vue'
import contentrecovery from './content/recovery/index.vue'
import contentlabel from './content/label/index.vue'
import columnmanager from './column/manager/index.vue'
import creat from './content/model/creat.vue'
import list from './content/model/list.vue'
import contentmodel from './content/model/index.vue'
import creatList from './content/manager/creat.vue'
import contList from './content/manager/list.vue'
import contIndex from './content/manager/index.vue'

export default {
  containRouter: true,
  root: {
    path: '/category',
    cName: '内容管理',
    redirect: '/category/column',
    component: manage

  },
  list: [
    {
      children: [
        {
          cName: '内容',
          path: 'content',
          redirect: 'content/manager',
          component: contentTpl,
          children: [
            {
              cName: '内容模型',
              path: 'model',
              redirect: 'model/index',
              component: contentmodel,
              children: [
                {
                  cName: 'index',
                  path: 'index',
                  component: list
                },
                {
                  cName: '内容模型-新建模型',
                  name: 'creat',
                  path: 'creat/:id',
                  component: creat
                }

              ]
            },
            {
              cName: '内容管理',
              path: 'manager',
              redirect: 'manager/index',
              component: contIndex,
              children: [
                {
                  cName: '内容模型-新建模型列表',
                  name: 'managerIndex',
                  path: 'index',
                  component: contList
                },
                {
                  cName: '内容管理-新建内容',
                  name: 'managerCreat',
                  path: 'creat/:id',
                  component: creatList
                }
              ]
            },
            {
              cName: '内容回收站',
              path: 'recovery',
              component: contentrecovery
            },
            {
              cName: '内容标签管理',
              path: 'label',
              component: contentlabel
            }
          ]

        },
        {
          cName: '栏目',
          path: 'column',
          redirect: 'column/manager',
          component: columnTpl,
          children: [
            {
              cName: '栏目模型',
              name: 'columnModel',
              path: 'model',
              component: columnmodel
            },
            {
              cName: '栏目管理',
              name: 'columnManager',
              path: 'manager',
              component: columnmanager
            },
            {
              cName: '栏目回收站',
              name: 'columnRecovery',
              path: 'recovery',
              component: columnrecovery
            }
          ]

        }
      ]
    }
  ]
}
