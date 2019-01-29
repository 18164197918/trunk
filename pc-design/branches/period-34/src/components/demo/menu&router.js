import demo from './index.vue'
import color from './color.vue'
import style from './style.vue'
import image from './image.vue'
import form from './form.vue'
import table from './table.vue'
import sortable from './sortable.vue'
import ueditor from './ueditor.vue'

export default {
  containRouter: true,
  root: {
    path: '/demo',
    cName: 'DEMO',
    redirect: '/demo/style',
    component: demo
  },
  list: [
    {
      cName: '',
      icon: '',
      children: [
        {
          cName: '样式',
          path: 'style',
          component: style
        },
        {
          cName: '颜色',
          path: 'color',
          component: color
        },
        {
          cName: '图片',
          path: 'image',
          component: image
        },
        {
          cName: '表单',
          path: 'form',
          component: form
        },
        {
          cName: '表格',
          path: 'table',
          component: table
        },
        {
          cName: '编辑器',
          path: 'ueditor',
          component: ueditor
        },
        {
          cName: '排序',
          path: 'sortable',
          component: sortable
        },
        {
          cName: '类名',
          path: 'class',
          component: require('./class.vue').default
        },
        {
          cName: '地图',
          path: 'map',
          component: require('./map.vue').default
        },
        {
          cName: '小型组件',
          path: 'small',
          component: require('./small.vue').default
        },
        {
          cName: '地理位置穿梭框',
          path: 'geoTransfer',
          component: require('./geo-transfer.vue').default
        }
      ]
    }
  ]
}
