import Vue from 'vue'
import Main from './main.vue'
let GeoTransferConstructor = Vue.extend(Main)
let instance

const GeoTransfer = function (options) {
  if (Vue.prototype.$isServer) return
  let id = 'geo-transfer' + new Date().getTime().toString(32)

  options.onClose = function () {
    GeoTransfer.close()
  }
  instance = new GeoTransferConstructor({
    data: options
  })
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  return instance.vm
}

GeoTransfer.close = function () {
  console.log(instance.$el.parentNode.removeChild(instance.$el))
}

GeoTransfer.open = function () {
  return GeoTransfer()
}

export default GeoTransfer
