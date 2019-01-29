import Vue from 'vue'
import guards from './guards'
import Router from 'vue-router'
import pc from '../components/pc/menu&router'
import mobile from '../components/mobile/menu&router'
import bam from '../components/bam/menu&router'
import demo from '../components/demo/menu&router'
import account from '../components/account/menu&route'
import userInit from '../components/userInit/menu&route'
import category from '../components/category/menu&router'
import siteInfo from '../components/site-pay-setting/menu&router'
import shop from '../components/shop/menu&router'

/**
 * 导入并添加路由模块
 **/
let routes = [
  pc,
  mobile,
  bam,
  demo,
  account,
  userInit,
  category,
  siteInfo,
  shop
]

function analyzeMeta (list, meta = {}) {
  let children = list.children
  if (!children || children.length === 0) {
    return
  }

  children.forEach((item) => {
    let cName

    if (item.cName) {
      if (item.cName && meta.cName) {
        cName = `${item.cName} - ${meta.cName}`
      } else {
        cName = item.cName
      }
    } else {
      cName = meta.cName
    }

    item.meta = {
      cName,
      scene: item.scene || meta.scene
    }
    analyzeMeta(item, item.meta)
  })
}

routes = routes.map(list => {
  if (list.containRouter) {
    let obj = { ...list.root, children: [] }
    list.list.forEach(list => {
      list.children.forEach(list => {
        list.meta = {
          cName: list.cName || '',
          scene: list.scene || obj.scene
        }
        analyzeMeta(list, list.meta)

        if (process.env.NODE_ENV !== 'production') {
          obj.children.forEach(childList => {
            if (childList.alias !== undefined && childList.alias === list.alias) {
              console.error(`已有重名alias "${list.path}"，建议使用其它alias属性`)
            }
            if (list.alias === undefined && childList.path === list.path) {
              console.error(`已有重名路由"${list.path}"，建议使用alias属性`)
            }
          })
        }
        obj.children.push(list)
      })
    })
    return obj
  } else {
    return list
  }
})

routes.push({
  path: '/',
  redirect: '/account/login'
})
Vue.use(Router)

const ROUTER = new Router({
  // mode: 'history',
  routes
})

guards(ROUTER)

export default ROUTER
