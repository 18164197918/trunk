require           = require('esm')(module)
const extend      = require('extend')
const copy        = require('copy')
const fs          = require('fs')
const path        = require('path')
const currentFile = process.cwd()                    //当前目录
const topFile     = path.resolve(__dirname, '..')   //上一级目录

const moduleLevel1   = ['adv', 'base']
const checkModelName = ['module-an', 'module-wb', 'module-tp', 'module-xz']

moduleLevel1.forEach((item) => {
  let files = fs.readdirSync(path.join(currentFile, item))

  files.forEach((item2) => {
    let stat = fs.lstatSync(path.join(currentFile, item, item2))
    if (stat.isDirectory() === false) {
      throw new Error(path.join(currentFile, item, item2) + '必须为文件夹')
    }
    let allFileName = fs.readdirSync(path.join(currentFile, item, item2))    //获取所有文件目录
    let pathArr     = []
    allFileName.forEach(item3 => {
      if (item3.indexOf('png') > -1 || item3.indexOf('list.js') > -1) {
        return
      }
      pathArr.push(path.join(currentFile, item, item2, item3))
    })
    let _defaultArr = []
    let moduleBase  = require(pathArr[0]).default

    pathArr.forEach((item4, index4) => {
      if (index4 > 0) {
        _defaultArr.push(
          {
            obj : require(item4).default,                                 //对象
            path: item4                                                   //路径
          },
        )
      }
    })
    _defaultArr.forEach(_default => {
      _default.obj.children && checkChildren(_default.obj.children, moduleBase, _default.path)    //校验文件

        //创建文件夹并写入文件
      let newFilePath    = _default.path.replace('module-tpl-box', 'module-tpl')
      let newFilePathArr = newFilePath.split('\\')
      if (!fs.existsSync(topFile + '\\' + newFilePathArr[6])) {           //module-tpl目录不存在
        fs.mkdir(topFile + '/module-tpl', function (err) {                //创建module-tpl目录
          if (err) {
            console.log('创建失败')
          }
          else {
            console.log('创建成功')
          }
        })
      }
      else {
        if (!fs.existsSync(topFile + '\\' + newFilePathArr[6] + '\\' + newFilePathArr[7])) {           //module-tpl下一级目录不存在
          fs.mkdir(topFile + '\\' + newFilePathArr[6] + '\\' + newFilePathArr[7], function (err) {     //创建module-tpl下一级目录
            if (err) {
              console.log('创建失败')
            }
            else {
              console.log('创建成功')
            }
          })
        }
        else {
          if (!fs.existsSync(topFile + '\\' + newFilePathArr[6] + '\\' + newFilePathArr[7] + '\\' + newFilePathArr[8])) {           //module-tpl下二级目录不存在
            fs.mkdir(topFile + '\\' + newFilePathArr[6] + '\\' + newFilePathArr[7] + '\\' + newFilePathArr[8], function (err) {     //创建module-tpl下二级目录
              if (err) {
                console.log('创建失败')
              }
              else {
                fs.writeFileSync(_default.path.replace('module-tpl-box', 'module-tpl'), 'export default ' + JSON.stringify(extend(true, _default.obj, moduleBase), null, 2).replace(/\"([^(\")"]+)\":/g, '$1:'))
                console.log('创建成功')
              }
            })
          }
          else {
            fs.writeFileSync(_default.path.replace('module-tpl-box', 'module-tpl'), 'export default ' + JSON.stringify(extend(true, _default.obj, moduleBase), null, 2).replace(/\"([^(\")"]+)\":/g, '$1:'))
          }
        }
      }
      //将*.png放入新的文件夹内
      allFileName.forEach(item3 => {
        if (item3.indexOf('png') > -1) {
          copy(path.join(currentFile, item, item2, item3), path.join(topFile, 'module-tpl'), function (err, file) {
            // exposes the vinyl `file` created when the file is copied
          })
        }
      })
    })
  })
})

function generateClassName() {
  return string10to62(String(Math.random()).substring(2, 9) % 14776335)
}


function checkChildren(obj, moduleBase, path) { //递归函数
  obj.forEach(item => {
    //检测类名
    !item.info.className && (item.info.className = generateClassName())    //没有类名则生成类名
    item.info.className.length > 4 && ((item.info.className = generateClassName()))     //className应该小于或者等于4,超过则重新生成类名

    if (item && item.children) {   //如果有children则继续遍历

      //检测dataList的数据是否与类名绑定
      let checkClassModelList = ['module-list'], dataListItem = []

      checkClassModelList.forEach(list => {//遍历children内部的分组

        if (item.info.name === list && item.info.static) {    //是列表并且绑定了数据
          //检测children的static的类名绑定
          item.children.forEach(list2 => {//遍历每个绑定数据列表的每一项children
            let staticModuleAttr = [], staticModuleDAttr = []


            //检测children的static与moduleBase是否相同
            for (let i in list2.info.static) {                                                          //遍历每个绑定数据列表的每一项children内部static对象信息
              staticModuleAttr.push(i)                                                                  //将属性存入数组
              i.indexOf('__') > -1 && staticModuleDAttr.push(i)                                          //将d__存入数组

              //除了icon不是必填,其他都是必填
              if (i.indexOf('__') > -1 && i.split('__')[1] !== 'icon') {
                if (!!list2.info.static[i]) {
                  //假如static填写了d__**,则检验是否与类名绑定
                  if (i.indexOf('__') > -1 && list2.info.static[i].indexOf('__') > -1 && list2.info.static[i].indexOf(list2.info.className) === -1) {
                    console.log(path + '的children的static的' + i + '未与类名' + list2.info.className + '绑定')
                    list2.info.static[i] = i.split('__')[1] + '__' + list2.info.className
                  }
                }
                else {
                  //没有填写，则提示填写
                  console.log(path + '的static未填写d__**')
                  list2.info.static[i] = i.split('__')[1] + '__' + list2.info.className
                }
              }
            }

            //currentModuleName:列表内部基本元素的类型
            //检测children的static与moduleBase是否相同
            let dAttr = []
            if (list2.info.name === 'module-an' && staticModuleAttr.indexOf('textarea') > -1) {
              dAttr = ['d__icon', 'd__link', 'd__textarea']
            }
            else if (list2.info.name === 'module-an' && staticModuleAttr.indexOf('text') > -1) {
              dAttr = ['d__icon', 'd__link', 'd__text']
            }
            else if (list2.info.name === 'module-wb') {
              dAttr = ['d__icon', 'd__shtml']
            }
            else if (list2.info.name === 'module-tp') {
              dAttr = ['d__link', 'd__src']
            }
            else if (list2.info.name === 'module-xz') {
              dAttr = ['d__link', 'd__src']
            }
            if (dAttr.sort().toString() !== staticModuleDAttr.sort().toString()) { //判断d__ 个数及名字是否符合规范
              console.log(path + '的static的d__**未和moduleBase中的d_**对应！')
              staticModuleDAttr.forEach(item => {        //删掉
                delete list2.info.static[item]
              })
              dAttr.forEach(item => {
                list2.info.static[item] = item.split('__')[1] + '__' + list2.info.className
              })
            }
            //获取修改之后static里面的d__* 属性
            for (let i in list2.info.static) {
              i.indexOf('__') > -1 && dataListItem.push(i.split('__')[1] + '__' + list2.info.className) //将children的static的d_**放入数组   //将d__ 右边的类名存入数组
            }
          })
          //检测dataList的类名绑定
          item.info.static.dataList.forEach((item2, index2) => {  //遍历列表dataList的每一项 看是否符合
            if (dataListItem.sort().toString() !== Object.keys(item2).sort().toString()) { //判断列表dataList 是否一致
              console.log(path + '的dataList格式不正确')
              let addAttrArr = []
              for (let i = 0; i < Object.keys(item2).sort().length; i++) {
                let btn = false
                for (let j = 0; j < dataListItem.sort().length; j++) {
                  if (dataListItem.sort()[j] === Object.keys(item2).sort()[i]) {
                    btn = true
                  }
                }
                if (!btn) {
                  addAttrArr.push(dataListItem.sort()[i])
                }
              }
              for (let k = 0; k < addAttrArr.length; k++) {
                item.info.static.dataList[index2][addAttrArr[k]] = ''
              }
            }
          })

        }
      })
      checkChildren(item.children, moduleBase, path)
    }
    else {    // 没有children ，则是基础组件
      //检测文本、按钮、图片、形状的static和moduleBase的static属性名是否相同
      checkModelName.forEach((list, index) => {
        if (item.info.name === list) {//是按钮
          if (list === 'module-an' && item.info.static.textarea) {  //按钮的多行文本检测  文本域
            let textareaAttr = ['textarea', 'link', 'icon', 'd__textarea', 'd__link', 'd__icon', 'script', 'rows']
            if (textareaAttr.sort().toString() !== Object.keys(item.info.static).sort().toString()) {
              console.log(path + '的static的textarea格式不正确')
              !item.info.static.link && (item.info.static.link = '')                                              //添加link
              !item.info.static.icon && (item.info.static.icon = '')                                              //添加icon
              !item.info.static.textarea && (item.info.static.textarea = '')                                      //添加textarea
              !item.info.static.d__link && (item.info.static.d__link = 'link__' + item.info.className)            //添加d__link
              !item.info.static.d__icon && (item.info.static.d__icon = 'icon__' + item.info.className)            //添加d__icon
              !item.info.static.d__textarea && (item.info.static.d__textarea = 'textarea__' + item.info.className)//添加d__icon
              !item.info.static.script && (item.info.static.script = '')                                          //添加script
              !item.info.static.rows && (item.info.static.rows = 2)                                               //添加row
              delete  item.info.static.order                                                                      //删掉order属性
              delete  item.info.static.text                                                                       //删掉text属性
              delete  item.info.static.d__text                                                                    //删掉d__text属性
            }
          }
          else if (list === 'module-an' && item.info.static.text) {   //按钮的单行行文本检测
            let textAttr = ['text', 'link', 'icon', 'd__text', 'd__link', 'd__icon', 'script']
            if (textAttr.sort().toString() !== Object.keys(item.info.static).sort().toString()) {
              console.log(path + '的static的text格式不正确')
              !item.info.static.link && (item.info.static.link = '')
              !item.info.static.icon && (item.info.static.icon = '')
              !item.info.static.text && (item.info.static.text = '')
              !item.info.static.d__link && (item.info.static.d__link = 'link__' + item.info.className)
              !item.info.static.d__icon && (item.info.static.d__icon = 'icon__' + item.info.className)
              !item.info.static.d__text && (item.info.static.d__text = 'text__' + item.info.className)
              !item.info.static.script && (item.info.static.script = '')
              delete  item.info.static.order
              delete  item.info.static.textarea
              delete  item.info.static.d__textarea
              delete  item.info.static.rows
            }
          }
          else if (list === 'module-wb') {   //文本检测
            let wbAttr = ['shtml', 'link', 'd__shtml', 'd__link', 'script']
            if (wbAttr.sort().toString() !== Object.keys(item.info.static).sort().toString()) {
              console.log(path + '的static的wb格式不正确')
              !item.info.static.link && (item.info.static.link = '')
              !item.info.static.shtml && (item.info.static.shtml = '<p style="text-align:center;">THIS IS A TEXT</p>')
              !item.info.static.d__link && (item.info.static.d__link = 'link__' + item.info.className)
              !item.info.static.d__shtml && (item.info.static.d__shtml = 'shtml__' + item.info.className)
              !item.info.static.script && (item.info.static.script = '')
            }
          }
          else if (list === 'module-tp') {   //图片检测
            let wbAttr = ['src', 'link', 'd__src', 'd__link', 'script']
            if (wbAttr.sort().toString() !== Object.keys(item.info.static).sort().toString()) {
              console.log(path + '的static的tp格式不正确')
              !item.info.static.link && (item.info.static.link = '')
              !item.info.static.src && (item.info.static.src = '')
              !item.info.static.d__link && (item.info.static.d__link = 'link__' + item.info.className)
              !item.info.static.d__src && (item.info.static.d__src = 'shtml__' + item.info.className)
              !item.info.static.script && (item.info.static.script = '')
            }
          }
          else if (list === 'module-xz') {   //形状检测
            let xzAttr = ['svg', 'ratio', 'witch', 'src', 'link', 'd__src', 'd__link']
            if (xzAttr.sort().toString() !== Object.keys(item.info.static).sort().toString()) {
              console.log(path + '的static的xz格式不正确')
              !item.info.static.svg && (item.info.static.svg = '')
              !item.info.static.ratio && (item.info.static.ratio = 0)
              !item.info.static.witch && (item.info.static.witch = 0)
              !item.info.static.link && (item.info.static.link = '')
              !item.info.static.src && (item.info.static.src = '')
              !item.info.static.d__link && (item.info.static.d__link = 'link__' + item.info.className)
              !item.info.static.d__src && (item.info.static.d__src = 'shtml__' + item.info.className)
            }
          }
        }
      })
      //检测children是否有tplCssObj
      if (item.info.name !== 'module-an') {      //排除按钮
        if (item.info.tplCssObj) {
          console.log(path + '的children 里面不应该有tplCssObj')
          delete  item.info.tplCssObj
        }
      }
    }
  })
}



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
