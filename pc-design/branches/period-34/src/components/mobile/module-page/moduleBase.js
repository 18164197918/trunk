export default {
  info: {
    name: 'module-page',
    cName: '分页',
    moduleCss: undefined,
    sequence: 0,
    lock: {},
    static: {
      isShowTurn: true,
      isShowNum: true,
      prevText: '上一页',
      nextText: '下一页'
    },
    cssObj: {
      self: {
        class: '',
        css: {
          left: '0px',
          top: '0px',
          width: '100%',
          height: '32px'
        }
      },
      inner: {
        class: '.inner-page',
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
