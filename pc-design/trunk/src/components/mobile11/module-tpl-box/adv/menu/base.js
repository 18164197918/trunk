export default {
  info: {
    name: 'module-menu',
    cName: '菜单',
    moduleCss: undefined,
    sequence: 0,
    lock: {},
    static: {
      class: 'horizontal1',
      type: 'main',
      isShowSub: true,
      isShowHome: true
    },
    cssObj: {
      self: {
        class: '',
        css: {
          left: '0px',
          top: '0px'
        }
      },
      inner: {
        class: '.inner-menu',
        hoverCss: {},
        groupHoverCss: {}
      }
    },
    tplCssObj: {
      self: {
        class: '',
        css: {
          //          width : '305px',
          //          height: '45px',
        }
      },
      inner: {
        class: '.inner-menu',
        hoverCss: {},
        groupHoverCss: {}
      }
    }
  },
  children: [
    { info: { sysLock: true, cssObj: { self: { hoverCss: {} } } } },
    { info: { sysLock: true, cssObj: { self: { hoverCss: {} } } } },
    { info: { sysLock: true, cssObj: { self: { hoverCss: {} } } } }
  ]
}
