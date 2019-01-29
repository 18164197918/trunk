import $ from 'jquery'
import dataEdit from '../common/data-edit'
import moduleListBase from './baseTpl/moduleListBase'
import moduleGroupBase from './baseTpl/moduleGroupBase'
import {
  toString,
  MODULE_ASSIST_MAP,
  BASE_MODULE_DATA_MAP,
  groupModuleAssist,
  parseFloor,
  generateClassName,
} from './constant'

/**
 *
 * @param moduleData  {info:{...}, children: []}
 * @param mergeObj
 * @param classNameMap
 * @returns {*}
 */
function createModuleSingle(moduleData, mergeObj, classNameMap) {
  let _static   = undefined,
      className = generateClassName()

  classNameMap                            = classNameMap || {}
  classNameMap[moduleData.info.className] = className

  let d = $.extend(true, {}, moduleData, {info: {className,}}, {info: MODULE_ASSIST_MAP[moduleData.info.name]})

  //同步static属性中的 className
  if (_static = d.info.static) {
    BASE_MODULE_DATA_MAP.forEach(item => {
      if (item.d_value && item.d_value in _static && _static[item.d_value] && _static[item.d_value].match(/__[\w]+/)) {
        _static[item.d_value] = item.value + '__' + className
      }
    })
  }
  delete d.info.tplCssObj

  d.children && (d.children = d.children.map(item => createModule(item, {}, classNameMap)))

  //同步 module-list dataList的 className
  if (d.info.name === 'module-list') {
    let prop
    d.info.static.dataList.forEach(item => {
      for (prop in item) {
        let match = prop.match(/([\w]+__)([\w]+)/)
        if (match) {
          item[match[1] + classNameMap[match[2]]] = item[prop]
          delete item[prop]
        }
        else {
          throw new Error('列表创建时数据类型错误')
        }
      }
    })
  }
  $.extend(true, d, mergeObj || {})
  return d
}

export const createModule = function (moduleData, mergeObj, classNameMap) {
  if (toString.call(moduleData) === '[object Array]') {
    return moduleData.map(item => {
      return createModuleSingle(item, mergeObj, classNameMap)
    })
  }
  else {
    return createModuleSingle(moduleData, mergeObj, classNameMap)
  }
}

export const addModuleAssist   = function (module) {
  $.extend(true, module.info, MODULE_ASSIST_MAP[module.info.name])
  module.children && module.children.forEach(item => {
    addModuleAssist(item)
  })
}
export const clearModuleAssist = function (module) {
  delete module.info.assist
  module.children && module.children.forEach(item => {
    clearModuleAssist(item)
  })
}


export const addConfigAssist   = function (config) {
  if (config.length) {
    config.forEach(item => addModuleAssist(item))
  }
  else if (config.length === undefined) {
    addModuleAssist(config)
  }
}
export const clearConfigAssist = function (config) {
  config.forEach(item => clearModuleAssist(item))
}

export const resizeRelativePositionVertical = function (info, parentHeight) {
  let _static = info.static,
      //elStyle = info.assist.elStyle,
      pHeight = parentHeight || info.assist.elStyle.height,
      $el     = $(info.assist.el),
      padding = parseFloat(info.cssObj.innerGap.css.padding)

  if (_static.direction === 'single-row') {
    info.cssObj.innerGroup.css.height = parseFloor(parseFloat(pHeight) - padding * 2) + 'px'
  }
  else {
    let len                           = $el.children('.swiper-box').children('.wrapper').children().length
    info.cssObj.innerGroup.css.height = parseFloor(parseFloat(pHeight) / Math.ceil(len / _static.columnCount) - padding * 2) + 'px'
  }
}

export const groupToList = function () {
  let first  = dataEdit.first(),
      obj    = removeModule(first),
      info   = obj.info,
      temp   = {},
      height = info.assist.elStyle.height

  info = $.extend(true, {}, info, moduleListBase.info)

  info.cssObj.innerGroup.css.height = height
  delete info.cssObj.self.css.height

  obj.children.forEach(item => {
    let _static = item.info.static,
        _name   = '__' + item.info.className

    BASE_MODULE_DATA_MAP.forEach(item2 => {
      if (item2.d_value && item2.d_value in _static) {
        temp[item2.value + _name] = _static[item2.value]
        _static[item2.d_value]    = item2.value + _name
      }
    })
  })

  info.static.dataList.push(temp, $.extend(true, {}, temp))

  dataEdit.removeAll()

  addModule({
    data  : {info, children: obj.children},
    parent: first.parents[0],
  })

  setTimeout(() => dataEdit.push(info.assist.dAssist()))
}
export const listToGroup = function () {
  let css, info,
      first    = dataEdit.first(),
      obj      = removeModule(first),
      children = obj.children,
      cssObj   = obj.info.cssObj,
      sequence = obj.info.sequence,
      width    = cssObj.self.css.width,
      left     = cssObj.self.css.left,
      top      = cssObj.self.css.top,
      height   = cssObj.innerGroup.css.height

  info = $.extend(true, {}, moduleGroupBase.info, groupModuleAssist)
  delete info.tplCssObj

  css           = info.cssObj.self.css
  info.sequence = sequence
  css.width     = width
  css.height    = height
  css.left      = left
  css.top       = top

  children.forEach(item => {
    let _static = item.info.static
    BASE_MODULE_DATA_MAP.forEach(item2 => {
      if (item2.d_value && item2.d_value in _static) {
        _static[item2.d_value] = ''
      }
    })
  })

  addModule({
    data  : {info, children},
    parent: first.parents[0],
  })
  dataEdit.removeAll()
  setTimeout(() => dataEdit.push(info.assist.dAssist()))
}

export const moveLittleSelfCss = function (css) {
  let temp, left, top

  temp = css.left.match(/([-\d.]+)(px|%)/)
  left = parseFloat(temp[1]) + 5 + temp[2]

  temp = css.top.match(/([-\d.]+)(px|%)/)
  top  = parseFloat(temp[1]) + 5 + temp[2]

  return {left, top}
}

export const addModule = function (obj) {
  let parent = obj.parent,
      data   = obj.data,
      index  = obj.index

  if (obj.mode === 'module-container') {
    if (toString.call(data) === '[object Array]') {
      data.forEach((item, i) => {
        parent.splice(index + i, 0, item)
      })
    }
    else {
      parent.splice(index, 0, data)
    }

  }
  else {
    if (index !== undefined) {
      parent.children.splice(index, 0, data)
    }
    else {
      parent.children.push(data)
    }
  }
}

export const findObjIndex = function (obj, arr, strictMode) {
  for (let i = 0, len = arr.length; i < len; ++i) {
    if (arr[i].info === obj) {
      return i
    }
  }
  if (strictMode) {
    throw new Error('未发现索引')
  }
  else {
    return -1
  }
}

export const findEditObjIndex = function (obj) {
  return findObjIndex(obj.info, obj.parents[0].children, true)
}

export const removeModule = function (obj) {
  let parent = obj.parents[0]

  if (obj.mode === 'module-container') {
    return parent.splice(findObjIndex(obj.info, parent, true), 1)[0]
  }
  else {
    let children = parent.children
    return children.splice(findObjIndex(obj.info, children, true), 1)[0]
  }
}
