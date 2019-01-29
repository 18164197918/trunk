export default {
  info    : {
    static: {type: 'main', class: 'vertical2'},
    cssObj: {
      self : {
        class: '',
        css  : {
          width: '30%',
        },
      },
      inner: {
        class   : '.inner-menu',
        css     : {},
        hoverCss: {},
      },
    },
    static: {
      class     : 'vertical2',
      type      : 'main',
      isShowSub : true,
      isShowHome: true,
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
          text   : '产品名称产品名称',
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
              height: '48px',
              left  : '0px',
              top   : '0px',
              width : '100%',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              color          : 'rgba(80,79,79,1)',
              justifyContent : 'center',
              textIndent     : '5px',
              textAlign      : 'center',
              backgroundColor: 'rgba(255,217,228,1)',
              fontWeight     : 'bold',
            },
            hoverCss     : {
              color: 'rgba(80,79,79,1)',
            },
            groupHoverCss: {},
          },
        },
        className: 'cWAs',
      },
    },
    {
      info: {
        sysLock  : true,
        name     : 'module-an',
        cName    : '按钮',
        lock     : {},
        static   : {
          text   : '产品名称产品名称2',
          link   : '',
          icon   : 'icl-tag',
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
              height: '33px',
              left  : '0px',
              top   : '0px',
              width : '100%',
              zIndex: '100',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              backgroundColor: 'rgba(255,245,245,1)',
              color          : 'rgba(80,79,79,1)',
              justifyContent : 'flex-start',
              textIndent     : '5px',
            },
            hoverCss     : {},
            groupHoverCss: {},
          },
        },
        className: '4xEP',
      },
    },
    {
      info: {
        sysLock  : true,
        className: '9XWk',
      },
    },
  ],
}
