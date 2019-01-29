//import E from '../../../../assets/wangEditor/wangEditor.js'
import E from 'wangeditor'


export default function (obj) {
  let editor = new E(obj.toolbarDom, obj.editDom)
  editor.customConfig.zIndex = 0
  editor.customConfig.menus = [
    'head',  // 标题
    'bold',  // 粗体
    //'fontSize',  // 字号
    'fontName',  // 字体
    'italic',  // 斜体
    'underline',  // 下划线
    'strikeThrough',  // 删除线
    'foreColor',  // 文字颜色
    'backColor',  // 背景颜色
    //'link',  // 插入链接
    //'list',  // 列表
    'justify',  // 对齐方式
    //'quote',  // 引用
    //'emoticon',  // 表情
    //'image',  // 插入图片
    //'table',  // 表格
    //'video',  // 插入视频
    //'code',  // 插入代码
    'undo',  // 撤销
    'redo'  // 重复
  ]

  editor.customConfig.colors = [
  	'rgba(0, 0, 0, 0)',
    'rgba(238, 241, 246, 1)',
    'rgba(255, 203, 208, 1)',
    'rgba(189, 230, 255, 1)',
    'rgba(151, 236, 185, 1)',
    'rgba(255, 195, 109, 1)',
    'rgba(149, 244, 226, 1)',
    'rgba(204, 208, 255, 1)',
    'rgba(236, 202, 241, 1)',
    'rgba(255, 190, 208, 1)',
    'rgba(255, 255, 255, 1)',
    'rgba(168, 184, 208, 1)',
    'rgba(232, 116, 116, 1)',
    'rgba(89, 199, 249, 1)',
    'rgba(86, 183, 134, 1)',
    'rgba(234, 153, 36, 1)',
    'rgba(46, 203, 190, 1)',
    'rgba(141, 145, 255, 1)',
    'rgba(194, 119, 208, 1)',
    'rgba(255, 121, 162, 1)',
    'rgba(0, 0, 0, 1)',
    'rgba(122, 144, 178, 1)',
    'rgba(196, 67, 60, 1)',
    'rgba(33, 150, 237, 1)',
    'rgba(72, 145, 108, 1)',
    'rgba(214, 123, 3, 1)',
    'rgba(35, 161, 147, 1)',
    'rgba(105, 108, 180, 1)',
    'rgba(161, 88, 179, 1)',
    'rgba(191, 76, 118, 1)',
  ]

  editor.create()
  editor.txt.html(obj.str)

  return editor
}