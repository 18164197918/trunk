export default {
  info: {
    static   : {
      text: '',
      icon: 'icl-smile',
    },
    cssObj   : {
      self : {
        css: {
          width : '50px',
          height: '50px',
        },
      },
      inner: {
        css     : {
          fontSize       : '22px',
          color          : 'rgba(255,255,255,1)',
          borderRadius   : '100px',
          backgroundColor: 'rgba(69,76,101,1)',
          transition     : 'all 0.2s 0s ease',
        },
        hoverCss: {},
      },
    },
    tplCssObj: {
      self : {
        class: '',
        css  : {
          width : '50px',
          height: '50px',
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

