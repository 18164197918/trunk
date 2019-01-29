import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
import { throwIfMissing, error } from './index'

let toString = Object.prototype.toString
const CUSTOM_HEADERS = new Set()
const SCENE = new Map()

/**
 * 获取通讯头部
 *
 * @param {object} headers
 * @returns {object}
 */
function getHeaders (headers) {
  let authorization = window.localStorage.getItem('Authorization')

  if (!headers.hasOwnProperty('Authorization') && authorization) {
    headers['Authorization'] = `Bearer ${authorization}`
  }

  for (let item of CUSTOM_HEADERS) {
    if (!headers.hasOwnProperty(item) && window.localStorage.getItem(item)) {
      headers[item] = window.localStorage.getItem(item)
    }
  }

  return headers
}

/**
 * 解析资源参数
 *
 * @param {string} router 路由
 * @param {object} resource 资源参数
 * @return {string}
 */
function analyzeResource (router, resource) {
  let temp = []

  if (toString.call(resource) === '[object Map]') {
    temp = resource.values()
  } else if (toString.call(resource) === '[object Object]') {
    temp = Object.values(resource)
  }

  for (let item of temp) {
    router = `${router}/${item}`
  }

  return router
}
/**
 * GET请求
 *
 * @param {string} url 通讯地址
 * @param {object} [config] 配置文件
 * @param {string} [config.baseURL] 基础通讯地址
 * @param {object} [config.headers] 通讯头部信息
 * @param {object} [config.resource] 资源参数
 * @param {object} [config.query] 查询参数
 * @param {boolean} [config.tips=false] 是否自动显示操作提示，默认为 false
 * @param {string} [config.scene] 通讯场景，根据场景会自动切换baseURL，但是如果传了baseURL的话，会被覆盖
 * @returns {AxiosPromise<any>}
 */
function GET (url, config = {}) {
  let {
    baseURL,
    headers = {},
    resource,
    query: params,
    tips = false,
    scene } = config

  resource && (url = analyzeResource(url, resource))
  headers = getHeaders(headers)
  if (!baseURL && scene) {
    baseURL = getSceneValue(scene)
  }

  return axios.get(url, {
    baseURL,
    headers,
    params,
    tips
  })
}

/**
 * DELETE请求
 *
 * @param {string} url 通讯地址
 * @param {object} [config] 配置文件
 * @param {object} [config.baseURL] 基础通讯地址
 * @param {object} [config.headers] 通讯头部
 * @param {object} [config.resource] 资源参数
 * @param {object} [config.query] 查询参数
 * @param {object} [config.data] 传输数据
 * @param {boolean} [config.tips=true] 是否自动显示操作提示，默认为 true
 * @param {string} [config.scene] 通讯场景，根据场景会自动切换baseURL，但是如果传了baseURL的话，会被覆盖
 * @returns {AxiosPromise<any>}
 */
function DELETE (url, config = {}) {
  let {
    baseURL,
    headers = {},
    resource,
    query: params,
    data,
    tips = true,
    scene } = config

  resource && (url = analyzeResource(url, resource))
  headers = getHeaders(headers)
  if (!baseURL && scene) {
    baseURL = getSceneValue(scene)
  }

  return axios.delete(url, {
    data,
    baseURL,
    headers,
    params,
    tips
  })
}

/**
 * POST请求
 *
 * @param {string} url 通讯地址
 * @param {object} [config] 配置文件
 * @param {object} [config.baseURL] 基础通讯地址
 * @param {object} [config.headers] 通讯头部
 * @param {object} [config.resource] 资源参数
 * @param {object} [config.query] 查询参数
 * @param {object} [config.data] 传输数据
 * @param {boolean} [config.tips=true] 是否自动显示操作提示，默认为 true
 * @param {string} [config.scene] 通讯场景，根据场景会自动切换baseURL，但是如果传了baseURL的话，会被覆盖
 * @returns {AxiosPromise<any>}
 */
function POST (url, config = {}) {
  let {
    baseURL,
    headers = {},
    resource,
    query: params,
    data,
    tips = true,
    scene } = config

  resource && (url = analyzeResource(url, resource))
  headers = getHeaders(headers)
  if (!baseURL && scene) {
    baseURL = getSceneValue(scene)
  }

  return axios.post(url, data, {
    baseURL,
    headers,
    params,
    tips
  })
}

/**
 * PUT请求
 *
 * @param {string} url 通讯地址
 * @param {object} [config] 配置文件
 * @param {object} [config.baseURL] 基础通讯地址
 * @param {object} [config.headers] 通讯头部
 * @param {object} [config.resource] 资源参数
 * @param {object} [config.query] 查询参数
 * @param {object} [config.data] 传输数据
 * @param {boolean} [config.tips=true] 是否自动显示操作提示，默认为 true
 * @param {string} [config.scene] 通讯场景，根据场景会自动切换baseURL，但是如果传了baseURL的话，会被覆盖
 * @returns {AxiosPromise<any>}
 */
function PUT (url, config = {}) {
  let {
    baseURL,
    headers = {},
    resource,
    query: params,
    data,
    tips = true,
    scene } = config

  resource && (url = analyzeResource(url, resource))
  headers = getHeaders(headers)
  if (!baseURL && scene) {
    baseURL = getSceneValue(scene)
  }
  console.log(resource, url)
  return axios.put(url, data, {
    baseURL,
    headers,
    params,
    tips
  })
}

/**
 * 修改通讯的BaseURL
 *
 * @param {string} baseURL 目标URL
 * @param {string} [scene] 当前场景
 */
function changeBaseURL (baseURL = throwIfMissing('baseURL'), scene) {
  axios.defaults.baseURL = baseURL
  if (process.env.NODE_ENV === 'development') {
    let str = '%c 当前'
    scene && (str += `场景为【${scene}】，`)
    str = str + `通讯baseURL：${baseURL}`
    console.log(str, 'background-color:yellow')
  }
}

/**
 * 初始化通讯
 *
 * @param {Object} options
 * @param {string} options.baseURL 默认baseURL
 * @param {(string[] | object[])} [options.headers] 自定义通讯头部项，传入后记录，会在每次通讯的时候会附加上
 *                                                  - string 直接记录
 *                                                  - object 记录属性名称，并且把属性值存入localStorage
 * @param {Map<string,string>} [options.scene] 场景名称与URL的键值对
 */
function init ({ baseURL, headers = [], scene = new Map() }) {
  // 设置默认baseURL
  changeBaseURL(baseURL)
  // 设置场景
  setScene(scene)

  // 设置自定义通讯头部项
  headers.map((x) => {
    if (typeof x === 'string') {
      CUSTOM_HEADERS.add(x)
    } else if (toString.call(x) === '[object Object]') {
      for (let prop in x) {
        if (x.hasOwnProperty(prop)) {
          CUSTOM_HEADERS.add(prop)
          window.localStorage.setItem(prop, x[prop])
        }
      }
    }
  })

  axios.interceptors.response.use(
    function (res) {
      let { data, data: { state }, config } = res

      if (state === -1) {
        Message.error(data.message)
        return Promise.reject(data)
      } else if (state === 0) {
        if (config.tips) {
          switch (config.method) {
            case 'delete':
              Message.success('删除成功')
              break
            case 'post':
              Message.success('提交成功')
              break
            case 'put':
              Message.success('修改成功')
              break
            case 'get':
              Message.success('获取成功')
              break
          }
        }

        return /^\./.test(res.config.url) ? res : res.data
      }
    },
    function (error) {
      Message.error(error.response.data.message)
      return Promise.reject(error)
    }
  )

  Vue.prototype['$httpGet'] = GET
  Vue.prototype['$httpDelete'] = DELETE
  Vue.prototype['$httpPost'] = POST
  Vue.prototype['$httpPut'] = PUT
}

function modifyHeaders (options, method) {
  let type = toString.call(options)
  if (method === 'add') {
    if (type === '[object String]') {
      CUSTOM_HEADERS[method](options)
    } else if (type === '[object Object]') {
      for (let prop in options) {
        if (options.hasOwnProperty(prop)) {
          CUSTOM_HEADERS[method](prop)
          window.localStorage.setItem(prop, options[prop])
        }
      }
    } else if (type === '[object Array]') {
      options.map((x) => {
        if (typeof x === 'string') {
          CUSTOM_HEADERS[method](x)
        } else if (toString.call(x) === '[object Object]') {
          for (let prop in x) {
            if (x.hasOwnProperty(prop)) {
              CUSTOM_HEADERS[method](prop)
              window.localStorage.setItem(prop, x[prop])
            }
          }
        }
      })
    }
  } else if (method === 'delete') {
    if (type === '[object String]') {
      CUSTOM_HEADERS[method](options)
      window.localStorage.removeItem(options)
    } else if (type === '[object Array]') {
      options.map((x) => {
        CUSTOM_HEADERS[method](x)
        window.localStorage.removeItem(options)
      })
    }
  }
}

/**
 * 设置自定义通讯头部项
 *
 * @param {(string[] | object[])} options 自定义通讯头部项，传入后记录，会在每次通讯的时候会附加上
 *                                                  - string 直接记录
 *                                                  - string[] 全部记录
 *                                                  - object 记录属性名称，并且把属性值存入localStorage
 *                                                  - object[] 全部记录记录属性名称，并且把属性值存入localStorage
 */
function setHeaders (options) {
  modifyHeaders(options, 'add')
}

/**
 * 删除自定义通讯头部项
 *
 * @param {(string | string[])} options 自定义通讯头部项
 *                                    - string 直接删除
 *                                    - string[] 全部删除
 */
function unsetHeaders (options) {
  modifyHeaders(options, 'delete')
}

/**
 * 设置返回拦截器
 *
 * @param {Object} options
 * @param {function} options.success 成功行为
 * @param {function} [options.error] 失败行为
 */
function setResInterceptors ({
  success = function (res) {
    return res
  },
  error = function (err) {
    Promise.reject(err)
  }
}) {
  axios.interceptors.response.use(success, error)
}

/**
 * 设置场景
 *
 * @param {Map<string,string>} options
 */
function setScene (options = throwIfMissing('SceneOptions')) {
  for (const [k, v] of options) {
    SCENE.set(k, v)
  }
}

/**
 * 移除场景
 *
 * @param {Set<string>} options
 */
function unsetScene (options = throwIfMissing('SceneOptions')) {
  for (const v of options) {
    SCENE.delete(v)
  }
}

/**
 * 切换场景
 *
 * @param {string} sceneName 场景名称
 */
function changeScene (sceneName) {
  changeBaseURL(getSceneValue(sceneName), sceneName)
}

/**
 * 获取场景值
 *
 * @param {string} sceneName 场景名称
 */
function getSceneValue (sceneName) {
  let scene = SCENE.has(sceneName)
  if (!scene) {
    error(`场景【${sceneName}】不存在！`)
  } else {
    return SCENE.get(sceneName)
  }
}

axios.interceptors.request.use(config => {
  typeof config.baseURL === 'undefined' && (config.baseURL = axios.defaults.baseURL)
  return config
})

export default {
  init,
  setHeaders,
  unsetHeaders,
  setResInterceptors,
  setScene,
  unsetScene,
  changeScene
}

export {
  init,
  setHeaders,
  unsetHeaders,
  setResInterceptors,
  setScene,
  unsetScene,
  changeScene
}
