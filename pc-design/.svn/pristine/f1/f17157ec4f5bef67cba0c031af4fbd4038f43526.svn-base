//import design from './index.vue'
//import edit from './edit.vue'
const design = () => import('./index.vue')
const edit   = () => import('./edit.vue')

export default {
  containRouter: true,
  root         : {
    path     : '/pc',
    name     : 'pc',
    redirect : '/pc/edit/',
    component: design,
  },
  list         : [
    {
      cName   : '',
      icon    : '',
      children: [
        {
          cName    : '编辑',
          path     : 'edit/:siteId/:pageId',
          name     : 'pcEdit',
          component: edit,
        },
      ],
    },

  ],
}
