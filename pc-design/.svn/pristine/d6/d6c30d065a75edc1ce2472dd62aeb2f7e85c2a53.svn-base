import index from './index.vue'
import templatePC from './template-pc.vue'
import templateMobile from './template-mobile.vue'
import mobileRecycle from './mobile-recycle.vue'
import pcRecycle from './pc-recycle.vue'

export default [
  {
    cName: '',
    icon: '',
    children: [
      {
        cName: '模板装修',
        path: 'template',
        component: index,
        redirect: 'template/templatePC',
        children: [
          {
            cName: 'PC端装修',
            path: 'templatePC',
            component: templatePC
          },
          {
            cName: '移动端装修',
            path: 'templateMobile',
            component: templateMobile
          },
          {
            cName: 'PC端回收站',
            path: 'pcRecycle',
            component: pcRecycle
          },
          {
            cName: '移动端回收站',
            path: 'mobileRecycle',
            component: mobileRecycle
          }
        ]
      }
    ]
  }
]
