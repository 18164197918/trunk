import Vue from 'vue'
import Main from './main.vue'
let GeoTransferConstructor = Vue.extend(Main)
let instance

export default {
  open (options) {
    if (Vue.prototype.$isServer) return
    let id = 'geo-transfer' + new Date().getTime().toString(32)
    let P = {}

    options = { P, ...options }

    instance = new GeoTransferConstructor({
      data: { P }
    })
    instance.id = id
    instance.$mount()
    document.body.appendChild(instance.$el)
    return new Promise((resolve, reject) => {
      P.resolve = resolve
      P.reject = reject
    })
  }
}
