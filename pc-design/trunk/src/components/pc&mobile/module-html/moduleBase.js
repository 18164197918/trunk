export default {
  info: {
    name     : 'module-html',
    cName    : '富文本',
    editable : false,
    lock     : {},
    static   : {
      html   : '<p style="text-align:center;">THIS IS A TEXT</p>',
      link   : '',
      d__html: '',
      d__link: '',
    },
    cssObj   : {
      self : {
        class   : '',
        hoverCss: {},
        css     : {
          width : '30%',
          height: '200px',
        },
      },
      inner: {
        class        : '.inner',
        hoverCss     : {},
        groupHoverCss: {},
      },
    },
    tplCssObj: {
      self : {
        class: '',
        css  : {
          width: '100%',
        },
      },
      inner: {
        class        : '.inner',
        hoverCss     : {},
        groupHoverCss: {},
      },
    },
  },
}