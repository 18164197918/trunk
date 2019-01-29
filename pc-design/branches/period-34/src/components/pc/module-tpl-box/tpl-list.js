import moduleAnList from './base/an/list'
import moduleTpList from './base/tp/list'
import moduleWbList from './base/wb/list'
import moduleXzList from './base/xz/list'
import moduleVideoList from './base/video/list'
import moduleMapList from './base/map/list'
import moduleContainerList from './base/container/list'

import moduleMenuList from './adv/menu/list'
import moduleCompAdvList from './adv/gsys/list'
import moduleCpzsList from './adv/cpzs/list'
import moduleTwzsList from './adv/twzs/list'
import moduleLxwmList from './adv/lxwm/list'
import moduleFwzxList from './adv/fwzx/list'
import moduleAljsList from './adv/aljs/list'
import moduleYqljList from './adv/yqlj/list'
import moduleQyzpList from './adv/qyzp/list'
import moduleListList from './adv/list/list'
import moduleGroupList from './adv/group/list'

import { packModuleImgSample } from '../common/package-module'

//console.log(moduleContainerList)

let imgVideoList     = packModuleImgSample(require.context('./base/video', false, /obj\d+.png|je?pg$/))
let imgMapList       = packModuleImgSample(require.context('./base/map', false, /obj\d+.png|je?pg$/))
let imgContainerList = packModuleImgSample(require.context('./base/container', false, /obj\d+.png|je?pg$/))


let imgMenuList     = packModuleImgSample(require.context('./adv/menu', false, /obj\d+.png|je?pg$/))
let imgCompAdvList  = packModuleImgSample(require.context('./adv/gsys', false, /obj\d+.png|je?pg$/))
let imgCpzsList = packModuleImgSample(require.context('./adv/cpzs', false, /obj\d+.png|je?pg$/))
let imgTwzsList     = packModuleImgSample(require.context('./adv/twzs', false, /obj\d+.png|je?pg$/))
let imgLxwmList     = packModuleImgSample(require.context('./adv/lxwm', false, /obj\d+.png|je?pg$/))
let imgFwzxList     = packModuleImgSample(require.context('./adv/fwzx', false, /obj\d+.png|je?pg$/))
let imgAljsList     = packModuleImgSample(require.context('./adv/aljs', false, /obj\d+.png|je?pg$/))
let imgYqljList     = packModuleImgSample(require.context('./adv/yqlj', false, /obj\d+.png|je?pg$/))
let imgQyzpList     = packModuleImgSample(require.context('./adv/qyzp', false, /obj\d+.png|je?pg$/))
let imgListList     = packModuleImgSample(require.context('./adv/list', false, /obj\d+.png|je?pg$/))
let imgGroupList    = packModuleImgSample(require.context('./adv/group', false, /obj\d+.png|je?pg$/))

export default [
  {
    ico   : '',
    ch    : '基础',
    isShow: true,
    list  : [
      {ch: '按钮', isShow: true, list: moduleAnList},
      {ch: '图片', isShow: true, list: moduleTpList},
      {ch: '文本', isShow: true, list: moduleWbList},
      {ch: '形状', isShow: true, list: moduleXzList},
      {ch: '视频', isShow: true, list: moduleVideoList, imgList: imgVideoList},
      {ch: '地图', isShow: true, list: moduleMapList, imgList: imgMapList},
      {ch: '容器', isShow: true, list: moduleContainerList, imgList: imgContainerList},
    ],
  },
  {
    ico   : '',
    ch    : '高级',
    isShow: true,
    list  : [
      {ch: '菜单', isShow: true, list: moduleMenuList, imgList: imgMenuList},
      {ch: '组合', isShow: true, list: moduleGroupList, imgList: imgGroupList},
      {ch: '内容列表', isShow: true, list: moduleListList, imgList: imgListList},
      {ch: '公司优势', isShow: true, list: moduleCompAdvList, imgList: imgCompAdvList},
      {ch: '产品展示', isShow: true, list: moduleCpzsList, imgList: imgCpzsList},
      {ch: '图文展示', isShow: true, list: moduleTwzsList, imgList: imgTwzsList},
      {ch: '联系我们', isShow: true, list: moduleLxwmList, imgList: imgLxwmList},
      {ch: '服务咨询', isShow: true, list: moduleFwzxList, imgList: imgFwzxList},
      {ch: '案例介绍', isShow: true, list: moduleAljsList, imgList: imgAljsList},
      {ch: '友情链接', isShow: true, list: moduleYqljList, imgList: imgYqljList},
      {ch: '企业招聘', isShow: true, list: moduleQyzpList, imgList: imgQyzpList},
    ],
  },
]
