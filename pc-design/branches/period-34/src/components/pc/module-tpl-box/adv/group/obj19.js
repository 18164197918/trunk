export default {
  info    : {
    cssObj   : {
      self : {
        class: '',
        css  : {
          width : '25%',
          height: '140px',
        },
      },
      inner: {
        css     : {
          overflow: 'hidden',
        },
        hoverCss: {},
      },
    },
  },
  children: [
    {
      info: {
        name    : 'module-tp',
        cName   : '图片',
        lock    : {
          d: true,
          r: true,
        },
        sequence: 0,
        static  : {
          src    : 'usr/6QN4pQxWbP/5bed49e6a563d.jpg',
          link   : '',
          d__src : '',
          d__link: '',
          script : '',
        },
        cssObj  : {
          self : {
            class        : '',
            css          : {
              width : '105%',
              height: '105%',
              left  : '0px',
              top   : '0px',
            },
            groupHoverCss: {},
          },
          inner: {
            class        : ['.inner', '.inner:before', '.inner img'],
            css          : {
              transition: 'all 0.2s 0s ease',
            },
            hoverCss     : {},
            groupHoverCss: {
              width    : '100%',
              height   : '100%',
              left     : '0px',
              top      : '0px',
              boxShadow: 'inset 0px 0px 7px 300px rgba(0,0,0,0.28),1px 11px 18px -10px rgba(52,52,52,1)',
            },
          },
        },
      },
    },
    {
      info: {
        name  : 'module-an',
        cName : '按钮',
        lock  : {
          d: true,
          r: true,
        },
        static: {
          text   : 'MORE >',
          icon   : '',
          link   : '',
          d__text: '',
          d__icon: '',
          d__link: '',
          order  : 0,
          script : '',
        },
        cssObj: {
          self : {
            class: '',
            css  : {
              width : '80%',
              height: '22px',
              left  : '10%',
              top   : 'calc(50% + 5px)',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              backgroundColor: 'rgba(255,52,77,0)',
              color          : 'rgba(255,255,255,1)',
              fontFamily     : '微软雅黑',
              fontSize       : '12px',
            },
            hoverCss     : {},
            groupHoverCss: {
              opacity: '1',
            },
          },
        },
      },
    },
    {
      info: {
        name  : 'module-an',
        cName : '按钮',
        lock  : {
          d: true,
          r: true,
        },
        static: {
          text   : 'READ ME',
          icon   : '',
          link   : '',
          d__text: '',
          d__icon: '',
          d__link: '',
          order  : 0,
          script : '',
        },
        cssObj: {
          self : {
            class: '',
            css  : {
              width : '80%',
              height: '22',
              top   : 'calc(50% - 20px)',
              left  : '10%',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              backgroundColor: 'rgba(255,52,77,0)',
              color          : 'rgba(255,255,255,1)',
              fontFamily     : '微软雅黑',
              fontSize       : '18px',
              fontWeight     : 'bold',
            },
            hoverCss     : {},
            groupHoverCss: {
              opacity: '1',
            },
          },
        },
      },
    },


  ],
}
