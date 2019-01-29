export default {
  info    : {
    cssObj   : {
      self : {
        class: '',
        css  : {
          width : '30%',
          height: '200px',
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
          width : '100%',
          height: '160px',
          zoom  : '0.8',
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
          src    : 'usr/6QN4pQxWbP/5bed4a6ff2bf3.jpg',
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
              },
            groupHoverCss: {},
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
          d__icon    : '',
          d__link    : '',
          d__textarea: '',
          icon       : '',
          link       : '',
          order      : 0,
          rows       : 2,
          textarea   : '花艺作品总是以折中的色彩使用技巧，看待风景的独特视角，读懂每一朵鲜花，每一根枝条的表情，并希望以保持着随性风格的创作而被大家记住。',
          script     : '',
        },
        cssObj: {
          self : {
            class: '',
            css  : {
              width : '80%',
              height: '52px',
              top   : '37.5%',
              left  : '10.4%',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              color     : 'rgba(255,255,255,1)',
              fontFamily: 'Belinda-script',
              fontSize  : '15px',
              fontWeight: 'normal',
              lineHeight: '1.6',
            },
            hoverCss     : {},
            groupHoverCss: {},
          },
        },
      },
    },

  ],
}
