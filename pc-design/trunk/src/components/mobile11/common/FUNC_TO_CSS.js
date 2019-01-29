import config from '../../../config'
import { classPrefix } from './constant'
import dataTools from '../common/data-tools'

let i; let l; let className; let classNames; let css; let hoverCss; let groupHoverCss; let propVal; let name; let str

let urlPrefix = 'url(' + config.fileManagerPrefix

let $reg = /\${3}/

let camelReg = /([A-Z])/g

let lgReg = /linear-gradient|radial-gradient/

function transferCssHead (obj) {
  let className = obj.className

  let originalClass = obj.originalClass

  let isHover = obj.isHover || false

  let isGroupHover = obj.isGroupHover || false

  let mode = obj.mode

  let fatherClassName = obj.fatherClassName

  classNames = ''

  if (typeof className === 'object') {
    className.forEach(item => {
      if (isGroupHover) {
        if (mode === 'children-group') {
          classNames +=
            fatherClassName + '.hover ' + originalClass + ' ' + item +
            (dataTools.isShowHoverOnEdit ? (', ' + fatherClassName + ':hover ' + originalClass + ' ' + item + ', ') : ', ')
          // +  ',\n' + f + ':hover ' + originalClass + ' ' + className
          // + ',\n' + originalClass + '.groupHover ' + className  //临时使用，以弥补 组hover 没有选中状态
        } else if (mode === 'children-list') {
          classNames +=
            fatherClassName + ' .inner-group.hover ' + originalClass + ' ' + item +
            ',\n' + fatherClassName + ' .inner-group:hover ' + originalClass + ' ' + item
          // + ',\n' + originalClass + '.groupHover ' + className  //临时使用，以弥补 组hover 没有选中状态
        }
      } else if (isHover) {
        classNames += originalClass + '.hover ' + item +
          (dataTools.isShowHoverOnEdit ? (', ' + originalClass + ':hover ' + item + ', ') : ', ')
      } else {
        classNames += originalClass + ' ' + item + ', '
      }
    })
    classNames = classNames.replace(/,\s$/, '')
  } else {
    if (isGroupHover) {
      if (mode === 'children-group') {
        classNames =
          fatherClassName + '.hover ' + originalClass + ' ' + className +
          (dataTools.isShowHoverOnEdit ? (',\n' + fatherClassName + ':hover ' + originalClass + ' ' + className) : '')
        // +  ',\n' + f + ':hover ' + originalClass + ' ' + className
        // + ',\n' + originalClass + '.groupHover ' + className  //临时使用，以弥补 组hover 没有选中状态
      } else if (mode === 'children-list') {
        classNames =
          fatherClassName + ' .inner-group.hover ' + originalClass + ' ' + className +
          ',\n' + fatherClassName + ' .inner-group:hover ' + originalClass + ' ' + className
        // + ',\n' + originalClass + '.groupHover ' + className  //临时使用，以弥补 组hover 没有选中状态
      }
    } else if (isHover) {
      classNames =
        originalClass + '.hover ' + className +
        (dataTools.isShowHoverOnEdit ? (',\n' + originalClass + ':hover ' + className) : '')
    } else {
      classNames = originalClass + ' ' + className
    }
  }

  return classNames
}

function transferCssBody (css) {
  let j; let str = '{\n'

  for (j in css) {
    if (j === 'backgroundImage') {
      if (lgReg.test(css[j])) {
        propVal = css[j]
      } else {
        propVal = urlPrefix + css[j] + ')'
      }
    } else {
      propVal = css[j]
    }

    str += j.replace(camelReg, '-$1').toLowerCase() + ':' + propVal + ';\n'
  }
  str += '}\n'

  return str
}

/* parse json to css */
export const FUNC_TO_CSS = function (obj, originalClass, fatherObj) {
  str = ''

  // originalClass = '.' + classPrefix + originalClass

  for (i in obj) {
    className = obj[i].class
    css = obj[i].css
    hoverCss = obj[i].hoverCss
    groupHoverCss = obj[i].groupHoverCss
    classNames = ''

    if ($reg.test(i)) {
      /**
       * {
       *   '$$$li': {
       *     class: '.li:nth-child($index)',
       *     css: [
       *       {color: 'rgba(0,0,0,1)'},
       *       {color: 'rgba(0,0,0,1)'}
       *     ]
       *   }
       * }
       */
      name = obj[i].name
      for (l = 0; l < css.length; l++) {
        str += originalClass + ' ' + className.replace('$index', l + 1) + '{' + name + ':' + css[l] + ';}\n'
      }
    } else {
      str += transferCssHead({ className, originalClass }) + transferCssBody(css)

      if (hoverCss) {
        str += transferCssHead({ className, originalClass, isHover: true }) + transferCssBody(hoverCss)
      }

      if (groupHoverCss && fatherObj) {
        str += transferCssHead({
          className,
          originalClass,
          isGroupHover: true,
          fatherClassName: '.' + classPrefix + fatherObj.className,
          mode: fatherObj.mode
        }) + transferCssBody(groupHoverCss)
      }
    }
  }
  return str
}
