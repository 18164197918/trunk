import Vue from 'vue'
import API from './API'

const data = {
  // customer 客户信息
  // customerUser 客户用户关系
  // user 用户信息
  customer: null,
  customerUser: null,
  user: null
}

data.getUserInfo = function () {
  return Vue.prototype.httpGet(API.customer).then(res => {
    let d = res.data
    data.customer = d.customer
    data.customerUser = d.customerUser
    data.user = d.user
    return d
  })
}

export default data
