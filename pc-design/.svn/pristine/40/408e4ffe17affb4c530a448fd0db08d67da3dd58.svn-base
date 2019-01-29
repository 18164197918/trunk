import $ from 'jquery'
import Vue from 'vue'
import API from '../API'
import { addConfigAssist, clearConfigAssist } from './data-methods'
import { PAGE_INIT } from './constant'

const PAGE = {
  config: [],
}


/* 获取数据 */
function get(prop) {
  if (prop) {
    return PAGE[prop]
  }
  else {
    return PAGE
  }
}

function init(obj) {
  let config = PAGE.config

  obj = $.extend(true, {}, PAGE_INIT, obj || {})

  addConfigAssist(obj.config)

  for (let i in obj) {
    if (i === 'config') {
      config.splice(0, config.length)
      config.splice(0, 0, ...obj.config)
    }
    else {
      PAGE[i] = obj[i]
    }
  }
}

function getServerData(id) {
  if(PAGE.id !== id){//console.log(id)
    return Vue.prototype.httpGet(API.getPageInfoByIndex(id)).then(res => {
      init(res.data)
      return res.data
    })
  }else{
    return Promise.resolve(PAGE)
  }
}

function saveServerData(id) {
  let clonedPageData = $.extend(true, {}, get())
  clearConfigAssist(clonedPageData.config)
  return Vue.prototype.httpPut(API.getPageInfoByIndex(id), clonedPageData)
}

export default {
  get,
  init,
  getServerData,
  saveServerData,
}
