import $ from 'jquery'
import Vue from 'vue'
import API from '../API'
import { addConfigAssist, clearConfigAssist } from './data-methods'
import { SITE_INIT } from './constant'

const SITE = {
  isShowHeadConfig: false,
  isShowFootConfig: false,
  headConfig      : [],
  footConfig      : [],
  cssObj          : {},
  database        : [
    {
      id   : 1,
      title: '一组测试数据',
      map  : {
        name     : {
          name: '姓名',
          type: {
            min : 0,
            max : 30,
            name: 'text',
          },
        },
        nick     : {
          name: '昵称',
          type: {
            min : 0,
            max : 30,
            name: 'text',
          },
        },
        photo    : {
          name: '照片',
          type: {
            min : 0,
            max : 30,
            name: 'src',
          },
        },
        intro    : {
          name: '简介',
          type: {
            min : 0,
            max : 100,
            name: 'textarea',
          },
        },
        wb       : {
          name: '链接',
          type: {
            name: 'link',
          },
        },

      },
      data : [
        {
          nick     : '张三',
          name     : '三儿',
          intro    : '张三张三的个人简介',
          wb       : 'http://www.baidu.com',
          photo    : 'usr/g5O46p2bRB/5bc45046360d8.jpg',
        },
        {
          nick     : '李四',
          name     : '小四',
          intro    : '小四的个人简介',
          wb       : 'http://www.taobao.com',
          photo    : 'usr/g5O46p2bRB/5bc45046360d8.jpg',
        },
      ],
    },
  ],
}


/* 获取数据 */
function get(prop) {
  if (prop) {
    return SITE[prop]
  }
  else {
    return SITE
  }
}

function init(obj) {
  let headConfig = SITE.headConfig,
      footConfig = SITE.footConfig

  obj = $.extend(true, {}, SITE_INIT, obj || {})

  addConfigAssist(obj.headConfig)
  addConfigAssist(obj.footConfig)

  for (let i in obj) {
    if (i === 'headConfig') {
      headConfig.splice(0, headConfig.length)
      headConfig.splice(0, 0, ...obj.headConfig)
    }
    else if (i === 'footConfig') {
      footConfig.splice(0, footConfig.length)
      footConfig.splice(0, 0, ...obj.footConfig)
    }
    else {
      SITE[i] = obj[i]
    }
  }
}

function getServerData(id) {
  return Vue.prototype.httpGet(API.getSiteInfoByIndex(id)).then(res => {
    init(res.data)
    return res.data
  })
}

function saveServerData(id) {
  let clonedSiteData = $.extend(true, {}, get())

  clearConfigAssist(clonedSiteData.headConfig)
  clearConfigAssist(clonedSiteData.footConfig)

  return Vue.prototype.httpPut(API.getSiteInfoByIndex(id), clonedSiteData)
}

export default {
  get,
  init,
  getServerData,
  saveServerData,
}
