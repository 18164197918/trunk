import $ from 'jquery'

export const DECIMAL_NUM   = 3
export const INTERVAL_TIME = 17

export const classPrefix       = 'bj-'
export const ALBUM_PREFIX      = 'ALBUM_'
export const getFirstElByClass = (className) => document.querySelector('.' + classPrefix + className)

export const parseFloor = val => parseFloat(Number(val).toFixed(DECIMAL_NUM))

//废弃 ZZZ ~  238327
//ZZZZ ~ 14776335
function string10to62(number) {
  let chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'.split(''),
      radix = chars.length,
      mod,
      arr   = []
  number    = +number

  do {
    mod    = number % radix
    number = (number - mod) / radix
    arr.unshift(chars[mod])
  } while (number)
  return arr.join('')
}

export const generateClassName    = () => string10to62(String(Math.random()).substring(2, 9) % 14776335)
export const generateTplClassName = () => string10to62(String(Math.random()).substring(2, 2 + 10))
export const randomNumClassLength = 4

export const $fp = (x, y) => $(document.elementFromPoint(x, y))

/**
 * === assist start ===
 * n   north
 * e   east
 * s   south
 * w   west
 * se  south east
 *
 *  0 don't show
 *  1 show
 * -1 disabled
 *
 * a 0:默认  1:选中元素  2:选中组  3:过渡
 *
 * d drag
 *
 *
 * p pick on
 *
 * m 判断高级组件只是拖拽还是点击选中
 *
 * //list 列表专有属性
 *
 *
 * el
 * elStyle
 * pEl
 * pElStyle
 * ==== assist end ====
 */
const baseModuleAssist             = {assist: {a: 0, p: 0, d: 1, s: 1, dAssist: null, el: null, elStyle: null, pEl: null, pElStyle: null}}
export const containerModuleAssist = $.extend(true, {}, baseModuleAssist)
export const listModuleAssist      = $.extend(true, {}, baseModuleAssist, {assist: {e: 1, s: 1, m: 0, swiper: null,}})
export const groupModuleAssist     = $.extend(true, {}, baseModuleAssist, {assist: {n: 1, e: 1, w: 1, m: 0,}})
export const menuModuleAssist      = $.extend(true, {}, baseModuleAssist, {assist: {n: 1, e: 1, w: 1, m: 0, menu: null,}})
export const pageModuleAssist      = $.extend(true, {}, baseModuleAssist, {assist: {n: 1, e: 1, w: 1, m: 0,}})
export const normalModuleAssist    = $.extend(true, {}, baseModuleAssist, {assist: {n: 1, e: 1, w: 1, se: 1, editor: null,}})

export const MODULE_ASSIST_MAP = {
  'module-container': containerModuleAssist,
  'module-list'     : listModuleAssist,
  'module-group'    : groupModuleAssist,
  'module-menu'     : menuModuleAssist,
  'module-page'     : pageModuleAssist,
  'module-an'       : normalModuleAssist,
  'module-tp'       : normalModuleAssist,
  'module-xz'       : normalModuleAssist,
  'module-wb'       : normalModuleAssist,
  'module-map'      : normalModuleAssist,
  'module-video'    : normalModuleAssist,
  'module-html'     : normalModuleAssist,
}

export const SITE_INIT = {
  id           : -1,
  icon         : '',
  title        : '',
  keywords     : '',
  description  : '',
  cssObj       : null,
  headConfig   : [],
  footConfig   : [],
  //database     : [],
  safeLineWidth: '1000px',
}

export const PAGE_INIT = {
  id         : -1,
  title      : '',
  keywords   : '',
  description: '',
  cssObj     : null,
  config     : [],
}

/**
 * 对齐方式
 */
export const ALIGN_MODULE = [
  {name: '顶对齐', icon: 'iconfont-align-top', param: 'top'},
  {name: '垂直居中对齐', icon: 'iconfont-align-v-center', param: 'vCenter'},
  {name: '底对齐', icon: 'iconfont-align-bottom', param: 'bottom'},
  {name: '左对齐', icon: 'iconfont-align-left', param: 'left'},
  {name: '水平居中对齐', icon: 'iconfont-align-h-center', param: 'hCenter'},
  {name: '右对齐', icon: 'iconfont-align-right', param: 'right'},
  {name: '垂直居中分布', icon: 'iconfont-align-v-dis', param: 'vDis'},
  {name: '水平居中分布', icon: 'iconfont-align-h-dis', param: 'hDis'},
  {name: '等宽', icon: 'iconfont-align-left-right', param: 'width'},
  {name: '等高', icon: 'iconfont-align-top-bottom', param: 'height'},
]

export const Z_INDEX = [
  {val: 'forward', label: '上移一层', className: 'glyphicon-to-forward'},
  {val: 'back', label: '下移一层', className: 'glyphicon-to-back'},
  {val: 'top', label: '至于顶层', className: 'glyphicon-to-top'},
  {val: 'bottom', label: '置于底层', className: 'glyphicon-to-bottom'},
]

/*不要动顺序*/
export const BASE_MODULE_DATA_MAP = [
  {name: '单行文本', value: 'text', d_value: 'd__text',},
  {name: '多行文本', value: 'textarea', d_value: 'd__textarea',},
  {name: '图片地址', value: 'src', d_value: 'd__src',},
  {name: '简单文本', value: 'shtml', d_value: 'd__shtml',},
  {name: '富文本', value: 'html', d_value: 'd__html',},
  {name: '链接', value: 'link', d_value: 'd__link', d_hide: true,},
  {name: '图标', value: 'icon', d_value: 'd__icon', d_hide: true,},
]

export const SVG_ASPECT_RATIO = [{label: '拉伸', value: 'none'}, {label: '包含', value: 'xMidYMid meet'}, {label: '裁切', value: 'xMidYMid slice'}]
export const SVG_WITCH_ONE    = [{label: '颜色', value: 'path'}, {label: '图片', value: 'img'}]

export const toString = Object.prototype.toString

/**
 * 链接系统
 */
export const LINK_TYPE = [
  {type: 'NONE', name: '不执行任何操作', isPc: true, isMobile: true,},
  {type: 'SYS', name: '系统模块', children: [
    {type: 'COM_CID', name: '栏目',},
    {type: 'COM_PID', name: '内容',}
  ], isPc: true,},
  {type: 'SINGLE_PAGE', name: '页面跳转', isPc: true, isMobile: true,},
  {type: 'TEL', name: '拨打电话', isMobile: true,},
  {type: 'WEB', name: '网页链接', isPc: true, isMobile: true,},
]
export const LINK_TYPE_SPLIT = ':::'
export const LINK_NAME_SPLIT = '='


/**
 * 分组
 */
export const GROUP_MODULE = [
  {name: '组合', icon: 'iconfont-add-group', param: 'add'},
  {name: '取消组合', icon: 'iconfont-cancel-group', param: 'cancel'},
  {name: '组合与列表转换', icon: 'iconfont-switch', param: 'switch'},
]

/**
 * 横向铺满和纵向铺满
 */
export const FULL_POSITION_BOX = [
  {name: '水平铺满', icon: 'iconfont-w-spread', prop: 'width', onVal: '100%'},
  {name: '垂直铺满', icon: 'iconfont-h-spread', prop: 'height', onVal: '100%', listDisabled: true},
  {name: '上对齐', icon: 'iconfont-align-top2', prop: 'top', onVal: '0%'},
  {name: '垂直居中', icon: 'iconfont-align-v-center1', prop: 'top', onVal: 'calc(50%', listDisabled: true},
  {name: '底对齐', icon: 'iconfont-align-bottom2', prop: 'top', onVal: 'calc(100%', listDisabled: true},
  {name: '左对齐', icon: 'iconfont-align-left2', prop: 'left', onVal: '0%'},
  {name: '水平居中', icon: 'iconfont-align-h-center2', prop: 'left', onVal: 'calc(50%'},
  {name: '右对齐', icon: 'iconfont-align-right2', prop: 'left', onVal: 'calc(100%'},
]

export const UNIT_REG = /([-\d.]+)(px|%)?/

function _convertUnitBase(matched, unit, $parent) {
  let matched1 = matched[1], //value
      matched2 = matched[2], //unit
      val

  if (unit === 'px') {
    if (matched2 === '%') {
      val = parseFloor($parent * matched1 / 100)
    }
    else if (matched2 === 'px' || matched2 === undefined) {
      val = matched1
    }
  }
  else if (unit === '%') {
    if (matched2 === '%') {
      val = matched1
    }
    else if (matched2 === 'px' || matched2 === undefined) {
      val = parseFloor(matched1 / $parent * 100)
    }
  }
  return parseFloat(val)
}

/**
 * @param obj
 *
 * css            要转换的对象 {left, top, width, height}
 * elStyle        如果没有css或者没有对应属性 则使用
 * props          转换至所需要的单位[px|%] {left, top, width, height}
 * pElStyle       与elStyle配套使用
 *
 * @returns
 * left           纯数值
 * leftUnitAfter  转换后的单位
 * leftAfter      转换后带单位的值
 */
export const convertUnit = function (obj) {
  let matched,
      css            = obj.css || {},
      elStyle        = obj.elStyle,
      pElStyle       = obj.pElStyle,
      props          = obj.props,
      pElInnerWidth  = parseFloat(pElStyle.width) - parseFloat(pElStyle.borderLeftWidth) - parseFloat(pElStyle.borderRightWidth),
      pElInnerHeight = parseFloat(pElStyle.height) - parseFloat(pElStyle.borderTopWidth) - parseFloat(pElStyle.borderBottomWidth),
      temp           = {}


  for (let i in props) {
    matched                = css[i] && css[i].match(UNIT_REG) || elStyle[i].match(UNIT_REG)
    temp[i]                = _convertUnitBase(matched, props[i], parseFloat((i === 'left' || i === 'width') ? pElInnerWidth : pElInnerHeight))
    temp[i + 'UnitBefore'] = matched[2]
    temp[i + 'UnitAfter']  = props[i]
    temp[i + 'After']      = temp[i] + temp[i + 'UnitAfter']
  }

  return temp
}
