export default {
  info    : {
    static   : {
      type: 'main',
    },
    cssObj   : {
      self: {
        class: '',
        css  : {
          width: '100%',
        },
      },

      inner: {
        class   : '.inner-menu',
        css     : {},
        hoverCss: {},
      },
    },
    tplCssObj: {
      self : {
        class: '',
        css  : {
          width: '305px',
        },
      },
      inner: {
        class        : '.inner-menu',
        css          : {},
        hoverCss     : {},
        groupHoverCss: {},
      },
    },
  },
  children: [
    {
      info: {
        sysLock  : true,
        name     : 'module-an',
        cName    : '按钮',
        lock     : {},
        static   : {
          text   : '一级菜单',
          link   : '',
          icon   : '',
          d__text: '',
          d__link: '',
          d__icon: '',
          order  : 0,
          script : '',
        },
        cssObj   : {
          self : {
            class: '',
            css  : {
              width : '100%',
              height: '18px',
              left  : '0px',
              right : '0px',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              backgroundColor: 'rgba(255,255,255,1)',
              color          : 'rgba(180,90,211,1)',
              transition     : 'all 0.1s 0s ease',
              borderTop      : '0px solid rgba(100,100,100,1)',
              borderRight    : '1px solid rgba(216,189,226,1)',
              borderBottom   : '0px solid rgba(100,100,100,1)',
              borderLeft     : '0px solid rgba(100,100,100,1)',
              padding        : '4px',
              fontWeight     : 'bold',
            },
            hoverCss     : {
              color: 'rgba(93,51,108,1)',
            },
            groupHoverCss: {},
          },
        },
        className: 'uGiV',
      },
    },
    {
      info: {
        sysLock  : true,
        name     : 'module-an',
        cName    : '按钮',
        lock     : {},
        static   : {
          text   : '二级菜单',
          link   : '',
          icon   : '',
          d__text: '',
          d__link: '',
          d__icon: '',
          order  : 0,
          script : '',
        },
        cssObj   : {
          self : {
            class: '',
            css  : {
              width : '100%',
              height: '32px',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              color          : 'rgba(180,90,211,1)',
              transition     : 'all 0.1s 0s ease',
              backgroundColor: 'rgba(255,255,255,1)',
              padding        : '10px',
              borderTop      : '0px solid rgba(216,189,226,1)',
              borderRight    : '0px solid rgba(216,189,226,1)',
              borderBottom   : '1px solid rgba(216,189,226,1)',
              borderLeft     : '0px solid rgba(216,189,226,1)',
            },
            hoverCss     : {
              color          : 'rgba(93,51,108,1)',
              backgroundColor: 'rgba(255,255,255,1)',
            },
            groupHoverCss: {},
          },
        },
        className: 'mgTS',
      },
    },
    {
      info: {
        sysLock  : true,
        name     : 'module-an',
        cName    : '按钮',
        lock     : {},
        static   : {
          text   : '二级菜单',
          link   : '',
          icon   : '',
          d__text: '',
          d__link: '',
          d__icon: '',
          order  : 0,
          script : '',
        },
        cssObj   : {
          self : {
            class: '',
            css  : {
              width : '100%',
              height: '40px',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              backgroundColor: 'rgba(255,255,255,1)',
              color          : 'rgba(51,51,51,1)',
              transition     : 'all 0.1s 0s ease',
              padding        : '10px',
            },
            hoverCss     : {
              color          : 'rgba(255,255,255,1)',
              backgroundColor: 'rgba(100,100,100,1)',
            },
            groupHoverCss: {},
          },
        },
        className: 'kPNR',
      },
    },

  ],
}
