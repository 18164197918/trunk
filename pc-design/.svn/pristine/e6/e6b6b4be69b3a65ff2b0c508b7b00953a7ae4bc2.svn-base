import $ from 'jquery'
import { generateTplClassName, generateClassName } from '../common/constant'
import anModuleBase from '../module-tpl-box/base/an/base'
import wbModuleBase from '../module-tpl-box/base/wb/base'
import tpModuleBase from '../module-tpl-box/base/tp/base'
import xzModuleBase from '../module-tpl-box/base/xz/base'

export const packModule = function () {
  const cp = {}
  const rc = require.context('../', true, /module-(?!container)\w+\/tpl\.vue$/)
  rc.keys().forEach(fileName => {
    cp[fileName.match(/module-\w+/)[0]] = rc(fileName).default
  })
  return cp
}

export const packBaseModule = function () {
  const cp = {}
  const rc = require.context('../', true, /base-module-[\w-]+\/index\.vue$/)
  rc.keys().forEach(fileName => {
    cp[fileName.match(/base-module-[\w-]+/)[0]] = rc(fileName).default
  })
  return cp
}

export const packModuleImgSample = function (rc) {
  let cp = {}
  rc.keys().forEach(fileName => {
    cp[fileName.match(/obj(\d+).png|je?pg/)[1]] = rc(fileName)
  })
  return cp
}


let globalClassNameArr = [], repeatClassNameArr = []
let _toString          = Object.prototype.toString

export const packModuleObj = function (rc, moduleBase) {

  //moduleBase : 所有基础组件类型信息
  //globalClassNameArr：基础类型内部包含的所有类名

  let checkModelName = ['module-an', 'module-wb', 'module-tp', 'module-xz'],
      checkModelBase = [anModuleBase, wbModuleBase, tpModuleBase, xzModuleBase]

  if (process.env.NODE_ENV === 'development') {
    //判断所有的模板是否重复
    for (let i = 0; i < globalClassNameArr.length; i++) {
      for (let j = i + 1; j < globalClassNameArr.length; j++) {
        if (globalClassNameArr[i] === globalClassNameArr[j]) {
          repeatClassNameArr.push(globalClassNameArr[i])
          console.log('模板中的className:' + globalClassNameArr[i] + '有重复')
        }
      }
    }
    repeatClassNameArr.length > 0 && console.log('模板中的className:' + repeatClassNameArr + '有重复')
  }

  return rc.keys().sort((a, b) => (parseInt(a.match(/\d+/)[0]) > parseInt(b.match(/\d+/)[0])) ? 1 : -1).map(name => {

      //所有组建的info信息：rc(name).default
      //随机生成的类名：generateClassName()

      let _default = rc(name).default



      if (_toString.call(_default) === '[object Array]') {
        _default.forEach(item=>{
          item.children && forChildren(item.children)
        })
        return _default.map(item => {
          item.children && item.children.forEach(item => item.info.className = generateClassName()) //所有基础组件
          return $.extend(true, {}, moduleBase, item, {info: {className: generateTplClassName(), moduleCss: name.match(/\d+\b/)[0]}})
        })

      }
      else if (_toString.call(_default) === '[object Object]') {
        _default.children && _default.children.forEach(item => item.info.className = generateClassName()) //所有基础组件
        _default.children && forChildren(_default.children)
        return $.extend(true, {}, moduleBase, _default, {info: {className: generateTplClassName(), moduleCss: name.match(/\d+\b/)[0]}})
      }
      else {
        throw new Error('数据格式错误！')
      }

      //递归所有的children
      function forChildren(obj) {    //递归函数
        //所有组件的info的children信息

        obj.forEach(item => {
          //检测类名
          !item.info.className && console.log(moduleBase.info.name + name + '没有className')
          item.info.className.length > 4 && console.log(moduleBase.info.name + name + '的className应该小于或者等于4')
          item.info.className && globalClassNameArr.push(item.info.className)

          if (item && item.children) {   //如果有children则继续遍历

            //检测dataList的数据是否与类名绑定
            let checkClassModelList = ['module-list'], dataListItem = []

            checkClassModelList.forEach(list => {//遍历children内部的分组

              if (item.info.name === list && item.info.static) {//是列表并且绑定了数据
                //检测children的static的类名绑定
                item.children.forEach(list2 => {//遍历每个绑定数据列表的每一项children
                  let currentModuleName, baseModuleAttr = [], staticModuleAttr = []

                  //checkModelBase ：所有绑定了数据的列表的childrem的信息

                  //检测children的static与moduleBase是否相同
                  checkModelBase.forEach(item3 => {     // 将moduleBase对象的d_**放入数组       //遍历所有绑定了数据的列表的childrem的的每一项信息
                    if (list2.info.name === item3.info.name) {
                      currentModuleName = item3.info.name  //列表内 组合的基础组件name
                      //Object.keys(item3.info.static) :所有绑定数据的列表的children 的 info 下面的 static 信息
                      Object.keys(item3.info.static).forEach(list3 => {  //取出 d_** 存入数组 baseModuleAttr
                        list3.indexOf('__') > -1 && baseModuleAttr.push(list3)
                      })
                    }
                  })
                  for (let i in list2.info.static) {//遍历每个绑定数据列表的每一项children内部static对象信息
                    i.indexOf('__') > -1 && staticModuleAttr.push(i) //将d__存入数组
                    i.indexOf('__') > -1 && dataListItem.push(i.split('__')[1] + '__' + list2.info.className) //将children的static的d_**放入数组   //将d__ 右边的类名存入数组


                    //除了icon不是必填,其他都是必填
                    if (i.indexOf('__') > -1 && i.split('__')[1] !== 'icon') {
                      if (!!list2.info.static[i]) {
                        //假如static填写了d__**,则检验是否与类名绑定
                        i.indexOf('__') > -1 && list2.info.static[i].indexOf('__') > -1 && list2.info.static[i].indexOf(list2.info.className) === -1 && console.log(moduleBase.info.name + name + '的children的static的' + i + '未与类名' + list2.info.className + '绑定')
                      }
                      else {
                        //没有填写，则提示填写
                        console.log(moduleBase.info.name + name + '的static未填写d__**')
                      }
                    }
                  }

                  //currentModuleName:列表内部基本元素的类型
                  //检测children的static与moduleBase是否相同
                  if (currentModuleName !== 'module-an') {  //如果不是按钮
                    if (baseModuleAttr.sort().toString() !== staticModuleAttr.sort().toString()) {//判断d__ 个数及名字是否符合规范
                      console.log(moduleBase.info.name + name + '的static的d__**未和moduleBase中的d_**对应！')
                    }
                  }
                  else {   //如果是按钮
                    if (staticModuleAttr.indexOf('d__link') > -1 && staticModuleAttr.indexOf('d__icon') > -1) {
                      let num = 0
                      staticModuleAttr.indexOf('d__text') > -1 && num++            //单行文本输入框
                      staticModuleAttr.indexOf('d__textarea') > -1 && num++         //多行文本域
                      num !== 1 && console.log(moduleBase.info.name + name + '的children的static与moduleBase不相同')
                    }
                    else {
                      console.log(moduleBase.info.name + name + '的children的static与moduleBase不相同')
                    }
                  }
                })

                //检测dataList的类名绑定
                item.info.static.dataList.forEach(item2 => {  //遍历列表dataList的每一项 看是否符合
                  if (dataListItem.sort().toString() !== Object.keys(item2).sort().toString()) { //判断列表dataList 是否一致
                    console.log(moduleBase.info.name + name + '的dataList格式不正确')
                  }
                })
              }
            })
            forChildren(item.children)
          }
          else {  // 没有children ，则是基础组件
            //检测文本、按钮、图片、形状的static和moduleBase的static属性名是否相同
            checkModelName.forEach((list, index) => {
              if (item.info.name === list) {//是按钮
                if (list === 'module-an' && item.info.static.textarea) {//按钮的多行文本单独检测  文本域
                  let textareaAttr = ['textarea', 'link', 'icon', 'd__textarea', 'd__link', 'd__icon', 'order', 'script', 'rows']
                  textareaAttr.sort().toString() !== Object.keys(item.info.static).sort().toString() && console.log(moduleBase.info.name + name + list + '的static的textarea格式不正确')
                }
                else {
                  Object.keys(checkModelBase[index].info.static).sort().toString() !== Object.keys(item.info.static).sort().toString() && console.log(moduleBase.info.name + name + list + '的static格式不正确')
                }
              }
            })
            //检测children是否有tplCssObj
            obj.forEach(item => {
              if (item.info.tplCssObj) {
                console.log(moduleBase.info.name + name + '的children 里面不应该有tplCssObj')
              }
            })
          }
        })
      }

    },
  )
}
