import Vue from 'vue'
import axios from 'axios'
import router from './index'
import config from '../config'

const instanceObj = {}

const BEARER = 'Bearer '

const VProto = Vue.prototype

const baseURL = config.baseURL

const methods = ['get', 'put', 'post', 'delete']

VProto.axios = axios

if (process.env.NODE_ENV === 'development') {
  VProto.http = VProto.httpGet = VProto.httpPut = VProto.httpPost = VProto.httpDelete =
    VProto.http2 = VProto.http2Get = VProto.http2Put = VProto.http2Post = VProto.http2Delete =
      VProto.http3 = VProto.http3Get = VProto.http3Put = VProto.http3Post = VProto.http3Delete =
        VProto.http4 = VProto.http4Get = VProto.http4Put = VProto.http4Post = VProto.http4Delete =
          VProto.http5 = VProto.http5Get = VProto.http5Put = VProto.http5Post = VProto.http5Delete =
            VProto.http6 = VProto.http6Get = VProto.http6Put = VProto.http6Post = VProto.http6Delete =
              VProto.http7 = VProto.http7Get = VProto.http7Put = VProto.http7Post = VProto.http7Delete =
                VProto.http8 = VProto.http8Get = VProto.http8Put = VProto.http8Post = VProto.http8Delete = null
}

function initInstances (prefix) {
  let instance
  // if(false){
  if (prefix === 'http6') {
    instance = axios.create({
      baseURL: baseURL[prefix]
      // setTip: false
    })
  } else {
    instance = axios.create({
      baseURL: baseURL[prefix],
      // setTip: false,
      headers: {
        Authorization: BEARER + window.localStorage.getItem('Authorization')
      }
    })
  }

  instanceObj[prefix] = instance;

  (function (instance) {
    instance.interceptors.response.use(res => {
      // if (res.headers.authorization && true) {
      if (res.headers.authorization && res.config.baseURL.indexOf('http://file.bj') === -1) {
        initAxiosHeaders({ auth: res.headers.authorization })
        // instance.defaults.headers['Authorization'] = BEARER + res.headers.authorization
      }

      let state = res.data.state

      let code = res.data.code

      let message = res.data.message || ''

      let setTip = res.config.setTip

      let method = res.config.method

      if (state === -1) {
        Vue.prototype.$message.error(message)
        if (code === 30001 || code === 60001 || code === 30002) {
          router.push('/account')
        } else if (code === 20002) {
          router.push('/userInit')
        } else if (code === 30003) {
          router.push('/account/register')
        }
        return Promise.reject(res)
      } else {
        if (setTip !== false) {
          if (method === 'put') {
            Vue.prototype.$message.success(setTip || '修改成功！')
          } else if (method === 'post') {
            Vue.prototype.$message.success(setTip || '创建成功！')
          } else if (method === 'delete') {
            Vue.prototype.$message.success(setTip || '删除成功！')
          }
        }

        return res.data
      }
    },
    function (error) {
      error.response && Vue.prototype.$message.error(error.response.data.message)
      return Promise.reject(error)
    })
  })(instance)

  methods.forEach(function (item) {
    VProto[prefix + item.slice(0, 1).toUpperCase() + item.slice(1)] = instance[item]
  })
  VProto[prefix] = instance
}

for (let i in baseURL) {
  initInstances(i)
}

/**
 * @param obj
 * auth
 */
function initAxiosHeaders (obj) {
  if (obj === undefined) {
    throw new Error('need an object param')
  }

  if (obj.auth !== undefined) {
    localStorage.setItem('Authorization', obj.auth)
    Object.keys(instanceObj).forEach(key => {
      if (key === 'http6') {
        return
      }
      instanceObj[key].defaults.headers['Authorization'] = BEARER + obj.auth
    })
  }
}

VProto.initAxiosHeaders = initAxiosHeaders
