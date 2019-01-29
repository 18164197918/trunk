export default {
  info    : {
    cssObj   : {
      self : {
        class: '',
        css  : {
          width : '25%',
          height: '200px',
        },
      },
      inner: {
        css     : {},
        hoverCss: {
          boxShadow: 'inset 0px 0px 7px 300px rgba(0,0,0,0.28)',
        },
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
          src    : 'usr/6QN4pQxWbP/5bea8c6a37e9f.jpg',
          link   : '',
          d__src : '',
          d__link: '',
          script : '',
        },
        cssObj  : {
          self : {
            class        : '',
            css          : {
              width : '100%',
              height: '100%',
              left  : '0px',
              top   : '0px',
            },
            groupHoverCss: {},
          },
          inner: {
            class        : ['.inner', '.inner:before', '.inner img'],
            css          : {},
            hoverCss     : {},
            groupHoverCss: {},
          },
        },
      },
    },
    {
      info: {
        name  : 'module-xz',
        cName : '形状',
        static: {
          svg    : '<svg viewBox="9.039993286132812 19.052000045776367 186 103" preserveAspectRatio="ASPECTRATIO"> <defs> <image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="9.039993286132812" y="19.052000045776367" width="100%" height="100%"/><path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M195.04 19.052v103h-186v-103h186z"></path> <clipPath id="cp-CLASSNAME"><use xlink:href="#path-CLASSNAME"/> </clipPath></defs><use xlink:href="#WITCHONE-CLASSNAME" clip-path="url(#cp-CLASSNAME)" /></svg>',
          ratio  : 0,
          witch  : 0,
          src    : '',
          link   : '',
          d__src : '',
          d__link: '',
        },
        lock  : {
          d: true,
          r: true,
        },
        cssObj: {
          self : {
            class        : '',
            css          : {
              width     : 'calc(100% - 16px)',
              height    : 'calc(100% - 16px)',
              top       : '8px',
              left      : '8px',
              transition: 'all 0.05s 0s ease',
            },
            groupHoverCss: {
              width : 'calc(100% - 20px)',
              height: 'calc(100% - 20px)',
              top   : '10px',
              left  : '10px',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              height: '100%',
              fill  : 'rgba(0,0,0,0)',
              border: '1px solid rgba(255,255,255,1)',
            },
            hoverCss     : {},
            groupHoverCss: {},
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
          text   : 'MENS',
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
              width : '79.979%',
              height: '',
              top   : 'calc(50% - 25px)',
              left  : '7.333%',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              width     : '100%',
              color     : 'rgba(255,255,255,1)',
              fontFamily: '宋体',
              fontSize  : '34px',
              fontWeight: 'bold',
              textIndent: '6px',
              transition: 'all 0.05s 0s ease',
            },
            hoverCss     : {},
            groupHoverCss: {
              opacity: '0',
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
          text   : 'Save 50%',
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
              width : '100%',
              height: '',
              top   : 'calc(50% - 10px)',
              left  : '',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              color     : 'rgba(255,255,255,1)',
              fontSize  : '14px',
              fontWeight: 'bold',
              opacity   : '0',
              transition: 'all 0.05s 0s ease',
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
