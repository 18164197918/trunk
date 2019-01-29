export default {
  info: {
    static   : {
      text: 'SALE',
    },
    cssObj   : {
      self : {
        css: {
          width : '50px',
          height: '80px',
        },
      },
      inner: {
        css     : {
          color      : 'rgba(53,60,88,1)',
          writingMode: 'tb-rl',
          fontWeight : 'bold',
          border     : '2px solid rgba(53,60,88,1)',
          transition : 'all 0.2s 0s ease',
        },
        hoverCss: {
          color          : 'rgba(255,255,255,1)',
          textShadow     : '1px 1px 1px rgba(0,0,0,1)',
          backgroundColor: 'rgba(53,60,88,1)',
          boxShadow      : '1px 7px 11px -5px rgba(0,0,0,0.5)',
          opacity        : '0.9',
        },
      },
    },
    tplCssObj: {
      self: {
        class: '',
        css  : {
          width : '50px',
          height: '80px',
        },
      },
    },
  },
}
