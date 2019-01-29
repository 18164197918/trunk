export default {
  info    : {
    name     : 'module-container',
    cName    : '容器',
    static   : {
      gridList    : [12],
      hasSafeLine : true,
    },
    lock     : {},
    cssObj   : {
      self     : {
        class: '',
        css  : {
          minHeight: '300px',
        },
      },
      container: {
        class: '.container',
        css  : {},
      },
    },
    tplCssObj: {
      self: {
        class: '',
        css  : {
          width       : '1000px',
          minHeight   : '320px',
          border      : '1px dashed rgba(204,204,204,1)',
          flexShrink  : 0,
          transform   : 'scale(.32)',
          marginTop   : '-100px !important',
          marginBottom: '-100px !important',
        },
      },
    },
  },
  children: [],
  tab     : [],
}
