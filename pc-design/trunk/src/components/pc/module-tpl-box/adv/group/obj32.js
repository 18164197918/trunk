export default {
  info    : {
    cssObj   : {
      self : {
        class: '',
        css  : {
          width : '25%',
          height: '300px',
        },
      },
      inner: {
        css     : {},
        hoverCss: {},
      },
    },
    tplCssObj: {
      self: {
        class: '',
        css  : {
          width : 'calc(50% - 20px)',
          height: '200px',
        },
      },
    },

  },
  children: [
    {
      info: {
        name  : 'module-xz',
        cName : '形状',
        lock  : {
          d: true,
          r: true,
        },
        static: {
          svg    : '<svg viewBox="9.039993286132812 19.052000045776367 186 103" preserveAspectRatio="ASPECTRATIO"><defs><image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="9.039993286132812" y="19.052000045776367" width="100%" height="100%"/><path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M195.04 19.052v103h-186v-103h186z"></path><clipPath id="cp-CLASSNAME"><use xlink:href="#path-CLASSNAME"/></clipPath></defs><use xlink:href="#WITCHONE-CLASSNAME" clip-path="url(#cp-CLASSNAME)" /></svg>',
          ratio  : 0,
          witch  : 0,
          src    : '',
          link   : '',
          d__src : '',
          d__link: '',
        },
        cssObj: {
          self : {
            class        : '',
            css          : {
              width : '100%',
              height: '80%',
              top   : '0px',
              left  : '0px',
            },
            groupHoverCss: {},
          },
          inner: {
            class        : '.inner',
            css          : {
              backgroundColor   : 'rgba(255,255,255,1)',
              backgroundImage   : 'usr/6QN4pQxWbP/5bebf06e2b70a.jpg',
              backgroundPosition: 'center center',
              backgroundSize    : '100% 100%',
              backgroundRepeat  : 'no-repeat',
              fill              : 'rgba(255,52,77,0)',
              transition        : 'all 0.2s 0s ease',
            },
            hoverCss     : {},
            groupHoverCss: {
              backgroundSize: '105% 105%',
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
          d__icon    : '',
          d__link    : '',
          d__textarea: '',
          icon       : '',
          link       : '',
          order      : 0,
          rows       : 2,
          textarea   : '“绿树阴浓夏日长，楼台倒影入池塘”当木屋的倒影印在布莱德湖上，是时候跟夏天说声“你好”了',
          script     : '',
        },
        cssObj: {
          self : {
            class: '',
            css  : {
              left : '5%',
              top  : 'calc(80% - 28px)',
              width: '90%',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              backgroundColor: 'rgba(0,0,0,1)',
              color          : 'rgba(255,255,255,1)',
              fontFamily     : '黑体',
              fontSize       : '16px',
              lineHeight     : '1.2',
              overflow       : 'hidden',
              paddingBottom  : '8px',
              paddingLeft    : '8px',
              paddingRight   : '8px',
              paddingTop     : '8px',
              transition     : 'all 0.2s 0s ease',
            },
            hoverCss     : {},
            groupHoverCss: {},
          },
        },
      },
    },


  ],
}
