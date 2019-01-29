import index from './index.vue'
import terminal from './terminal.vue'
import authorize from './authorize.vue'
import toAuthorize from './toAuthorize.vue'
import bdTerminalView from './terminalList/bd-terminal-view.vue'
import wxTerminalView from './terminalList/wx-terminal-view.vue'
import gzhTerminalView from './terminalList/gzh-terminal-view.vue'
import pcTerminalView from './terminalList/pc-terminal-view.vue'
import mobileTerminalView from './terminalList/mobile-terminal-view.vue'
import toAuthorizeWx from './toAuthorize/to-authorize-wx.vue'
import toAuthorizeBd from './toAuthorize/to-authorize-bd.vue'
import toAuthorizeGzh from './toAuthorize/to-authorize-gzh.vue'
import toAuthorizePc from './toAuthorize/to-authorize-pc.vue'
import toAuthorizeMobile from './toAuthorize/to-authorize-mobile.vue'
import bdAuthorize from './authorize/bd-authorize.vue'
import wxAuthorize from './authorize/wx-authorize.vue'
import gzhAuthorize from './authorize/gzh-authorize.vue'
// import pcAuthorize from './authorize/pc-authorize.vue'
import mobileAuthorize from './authorize/mobile-authorize.vue'

export default [
  {
    cName: '',
    icon: '',
    children: [
      {
        cName: '终端管理',
        path: 'terminal',
        redirect: 'terminal/chooseList',
        component: index,
        children: [
          {
            cName: '终端列表',
            path: 'chooseList',
            component: terminal,
            redirect: 'chooseList/wx',
            children: [
              {
                cName: '微信终端列表详情',
                scene: 'wxTp',
                path: 'wx',
                component: wxTerminalView
              },
              {
                cName: '百度终端列表详情',
                path: 'bd',
                component: bdTerminalView
              },
              {
                cName: '公众号终端列表详情',
                path: 'gzh',
                component: gzhTerminalView
              },
              {
                cName: 'pc端终端列表详情',
                path: 'pc',
                component: pcTerminalView
              },
              {
                cName: 'mobile终端列表详情',
                path: 'mobile',
                component: mobileTerminalView
              }
            ]
          },
          {
            cName: '授权信息列表',
            path: 'authorize',
            component: authorize,
            children: [
              {
                cName: '微信终端授权信息',
                path: 'wx',
                component: wxAuthorize
              },
              {
                cName: '百度终端授权信息',
                path: 'bd',
                component: bdAuthorize
              },
              {
                cName: '公众号终端授权信息',
                path: 'gzh',
                component: gzhAuthorize
              },
              // {
              //   cName: 'pc端终端授权信息',
              //   path: 'pc',
              //   component: pcAuthorize
              // },
              {
                cName: 'mobile终端授权信息',
                path: 'mobile',
                component: mobileAuthorize
              }
            ]
          },
          {
            cName: '授权',
            path: 'toAuthorize',
            component: toAuthorize,
            children: [
              {
                cName: '微信授权',
                path: 'wx',
                component: toAuthorizeWx
              },
              {
                cName: '百度授权',
                path: 'bd',
                component: toAuthorizeBd
              },
              {
                cName: '公众号授权',
                path: 'gzh',
                component: toAuthorizeGzh
              },
              {
                cName: 'pc端授权',
                path: 'pc',
                component: toAuthorizePc
              },
              {
                cName: 'mobile端授权',
                path: 'mobile',
                component: toAuthorizeMobile
              }
            ]
          }
        ]
      }
    ]
  }
]
