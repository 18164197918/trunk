export default {
  info    : {
    cssObj   : {
      self: {
        css: {
          minHeight: '440px',
        },
      },
    },
  },
  children: [
    {
      info    : {
        name     : 'module-group',
        cName    : '分组',
        className: 'py6e',
        sequence : 0,
        lock     : {
          d: true,
          r: true,
        },
        cssObj   : {
          self : {
            class: '',
            css  : {
              left  : '0%',
              top   : '20px',
              width : '100%',
              height: '110px',
            },
          },
          inner: {
            class   : '.inner-group',
            css     : {},
            hoverCss: {},
          },
        },
      },
      children: [
        {
          info: {
            name     : 'module-xz',
            cName    : '形状',
            lock     : {
              d: true,
              r: true,
            },
            static   : {
              svg    : '<svg viewBox="9.039993286132812 19.052000045776367 186 103" preserveAspectRatio="ASPECTRATIO">\n            <defs>\n              <image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="9.039993286132812" y="19.052000045776367" width="100%" height="100%"/>\n              <path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M195.04 19.052v103h-186v-103h186z"></path>\n              <clipPath id="cp-CLASSNAME">\n                <use xlink:href="#path-CLASSNAME"/>\n              </clipPath>\n            </defs>\n            <use xlink:href="#WITCHONE-CLASSNAME" clip-path="url(#cp-CLASSNAME)" />\n\t\t\t\t\t</svg>',
              ratio  : 0,
              witch  : 0,
              src    : '',
              link   : '',
              d__src : 'src__eEvy',
              d__link: 'link__eEvy',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '48%',
                  top   : '85px',
                  width : '4%',
                  height: '25px',
                },
              },
              inner: {
                class        : '.inner',
                css          : {
                  fill           : 'rgba(255,255,255,0)',
                  backgroundColor: 'rgba(255,255,255,0)',
                  borderBottom   : '2px solid rgba(0,0,0,1)',
                },
                hoverCss     : {},
                groupHoverCss: {},
              },
            },
            className: 'eEvy',
            moduleCss: '2',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '请输入要描述的内容进行内容补充',
              link   : '',
              icon   : '',
              d__text: 'text__8iel',
              d__link: 'link__8iel',
              d__icon: 'icon__8iel',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '0%',
                  top   : '55px',
                  width : '100%',
                  height: '34px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color     : 'rgba(102,102,102,1)',
                  transition: 'all 0.2s 0s ease',
                  fontSize  : '16px',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: '8iel',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '第一行主标题',
              link   : '',
              icon   : '',
              d__text: 'text__FmBX',
              d__link: 'link__FmBX',
              d__icon: 'icon__FmBX',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '1%',
                  top   : '0px',
                  width : '98%',
                  height: '50px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color          : 'rgba(0,0,0,1)',
                  backgroundColor: 'rgba(255,255,255,1)',
                  fontSize       : '25px',
                  fontWeight     : 'normal',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'FmBX',
            moduleCss: '2',
            sequence : 0,
          },
        },
      ],
    },
    {
      info    : {
        name     : 'module-list',
        cName    : '列表',
        className: 'ECgG',
        sequence : 0,
        lock     : {
          d: true,
          r: true,
        },
        cssObj   : {
          self      : {
            class: '',
            css  : {
              left        : '0px',
              top         : '136px',
              width       : '100%',
              position    : 'relative !important',
              marginBottom: '136px',
            },
          },
          inner     : {
            class   : '.inner-group',
            css     : {},
            hoverCss: {},
          },
          innerGap  : {
            class: '.inner-gap',
            css  : {
              width  : '50%',
              padding: '19px',
            },
          },
          innerGroup: {
            class   : '.inner-group',
            css     : {
              height: '226px',
            },
            hoverCss: {},
          },
        },
        static   : {
          direction  : 'multi-row',
          columnCount: 2,
          dataOrigin : 0,
          dataList   : [
            {
              src__68Gm : 'usr/6QN4pQxWbP/5c0a40702588e.png',
              link__68Gm: '',
              text__73wG: '第一行主标题',
              link__73wG: '',
              icon__73wG: '',
              text__n0zX: '请输入要描述的内容',
              link__n0zX: '',
              icon__n0zX: '',
              text__q6ps: '请输入要描述的内容',
              link__q6ps: '',
              icon__q6ps: '',
            },
            {
              src__68Gm : 'usr/6QN4pQxWbP/5c0a40702588e.png',
              link__68Gm: '',
              text__73wG: '第一行主标题',
              link__73wG: '',
              icon__73wG: '',
              text__n0zX: '请输入要描述的内容',
              link__n0zX: '',
              icon__n0zX: '',
              text__q6ps: '请输入要描述的内容',
              link__q6ps: '',
              icon__q6ps: '',
            },
          ],
          swiperInit : {
            autoplay      : {
              delay: 2000,
            },
            loop          : false,
            speed         : 400,
            slidesPerView : 1,
            effect        : 'slide',
            wrapperClass  : 'wrapper',
            slideClass    : 'inner-gap',
            direction     : 'horizontal',
            allowTouchMove: false,
            observer      : true,
            observeParents: true,
          },
        },
      },
      children: [
        {
          info: {
            name     : 'module-tp',
            cName    : '图片',
            lock     : {
              d: true,
              r: true,
            },
            static   : {
              src    : 'usr/6QN4pQxWbP/5c0a40702588e.png',
              link   : '',
              d__src : 'src__68Gm',
              d__link: 'link__68Gm',
              script : '',
            },
            cssObj   : {
              self : {
                class   : '',
                css     : {
                  left  : '0%',
                  top   : '0px',
                  width : '100%',
                  height: '200px',
                },
                hoverCss: {},
              },
              inner: {
                class        : [
                  '.inner',
                  '.inner:before',
                  '.inner img',
                ],
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  border    : '1px solid rgba(218,218,218,1)',
                  transition: 'all 0.2s 0s ease',
                },
              },
            },
            className: '68Gm',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '第一行主标题',
              link   : '',
              icon   : '',
              d__text: 'text__73wG',
              d__link: 'link__73wG',
              d__icon: 'icon__73wG',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '0%',
                  top   : '170px',
                  width : '100%',
                  height: '30px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color          : 'rgba(255,255,255,0.84)',
                  transition     : 'all 0.2s 0s ease',
                  boxShadow      : '0px 0px 60px 0px rgba(0,0,0,.5)',
                  backgroundColor: 'rgba(0,0,0,0.7099999999999997)',
                  justifyContent : 'flex-start',
                  textIndent     : '10px',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: '73wG',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '请输入要描述的内容',
              link   : '',
              icon   : '',
              d__text: 'text__n0zX',
              d__link: 'link__n0zX',
              d__icon: 'icon__n0zX',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '0%',
                  top   : '200px',
                  width : '45%',
                  height: '26px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color         : 'rgba(255,52,77,1)',
                  transition    : 'all 0.2s 0s ease',
                  justifyContent: 'flex-start',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'n0zX',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '请输入要描述的内容',
              link   : '',
              icon   : '',
              d__text: 'text__q6ps',
              d__link: 'link__q6ps',
              d__icon: 'icon__q6ps',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '45%',
                  top   : '200px',
                  width : '55%',
                  height: '26px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color         : 'rgba(102,102,102,1)',
                  transition    : 'all 0.2s 0s ease',
                  justifyContent: 'flex-end',
                  textIndent    : '0px',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'q6ps',
            moduleCss: '1',
            sequence : 0,
          },
        },
      ],
    },
  ],
  tab     : [],
}
