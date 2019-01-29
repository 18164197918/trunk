// import design from './index.vue'
// import edit from './edit.vue'
const design = () => import('./index.vue')
const edit = () => import('./edit.vue')

export default {
  containRouter: true,
  root: {
    path: '/mobile',
    name: 'mobile',
    redirect: '/mobile/edit/',
    component: design
  },
  list: [
    {
      cName: '',
      icon: '',
      children: [
        {
          cName: '编辑',
          path: 'edit/:siteId/:pageId',
          name: 'mobileEdit',
          component: edit
          // component: {template: '<div>123123</div>'},
        }
      ]
    }

  ]
}
