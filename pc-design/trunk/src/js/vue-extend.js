import Vue from 'vue'

/**
 * 获取级联选择器数据对象
 *
 * @param {array} val 返回值
 * @param {object} opt 级联选择器数据集合
 * @param {string} [name] 数据字段名称
 * @param {string} [children] 子级字段名称
 */
function getCascaderObj (val, opt, name = 'value', children = 'children') {
  return val.map((value) => {
    for (let item of opt) {
      if (item[name] === value) {
        opt = item[children]
        return item
      }
    }
    return null
  })
}
Vue.prototype.getCascaderObj = getCascaderObj

/**
 * 移除级联选择器空子级数据
 *
 * @param {object} data
 * @param {string} [name] 子级属性名称
 */
function delCascaderEmptyChilds (data, name = 'childs') {
  for (let item of data) {
    if (!Object.hasOwnProperty.call(item, name)) continue
    if (item[name].length === 0) {
      delete item[name]
    } else {
      delCascaderEmptyChilds(item[name], name)
    }
  }
}
Vue.prototype.delCascaderEmptyChilds = delCascaderEmptyChilds

/**
 * 判断对象是否为空
 *
 * @param {Object} obj - 需要判断的对象
 * @param {Boolean} [isDeep=false] - 是否需要深度查看
 */
function isEmptyObject (obj, isDeep = false) {
  if (isDeep) {
    return !(Object.keys(obj).length > 0)
  } else {
    for (const key in obj) {
      return false
    }
    return true
  }
}
Vue.prototype.isEmptyObject = isEmptyObject

export {
  isEmptyObject,
  getCascaderObj,
  delCascaderEmptyChilds
}
