export default {
  info    : {
    cssObj   : {
      self: {
        css: {
          minHeight      : '380px',
          backgroundColor: 'rgba(248,248,248,1)',
        },
      },
    },
    tplCssObj: {
      self: {
        css: {
          minHeight   : '380px',
          marginTop   : '-129px !important',
          marginBottom: '-129px !important',
        },
      },
    },
  },
  children: [
    {
      info    : {
        name     : 'module-list',
        cName    : '列表',
        className: 'gM',
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
              top         : '20px',
              width       : '100%',
              position    : 'relative !important',
              marginBottom: '20px',
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
              width  : '25%',
              padding: '4px',
            },
          },
          innerGroup: {
            class   : '.inner-group',
            css     : {
              height: '333px',
            },
            hoverCss: {},
          },
        },
        static   : {
          direction  : 'multi-row',
          columnCount: 4,
          dataOrigin : 0,
          dataList   : [
            {
              src__CKG : '',
              link__CKG: '',
              text__o7p: '请输入要描述的内容',
              link__o7p: '',
              icon__o7p: '',
              src__aAx : 'usr/6QN4pQxWbP/5c0f9868dbfd7.png',
              link__aAx: '',
              text__5fG: '按钮',
              link__5fG: '',
              icon__5fG: '',
              text__4wP: '主标题',
              link__4wP: '',
              icon__4wP: '',
            },
            {
              src__CKG : '',
              link__CKG: '',
              text__o7p: '请输入要描述的内容',
              link__o7p: '',
              icon__o7p: '',
              src__aAx : 'usr/6QN4pQxWbP/5c0f9868dbfd7.png',
              link__aAx: '',
              text__5fG: '按钮',
              link__5fG: '',
              icon__5fG: '',
              text__4wP: '主标题',
              link__4wP: '',
              icon__4wP: '',
            },
            {
              src__CKG : '',
              link__CKG: '',
              text__o7p: '请输入要描述的内容',
              link__o7p: '',
              icon__o7p: '',
              src__aAx : 'usr/6QN4pQxWbP/5c0f9868dbfd7.png',
              link__aAx: '',
              text__5fG: '按钮',
              link__5fG: '',
              icon__5fG: '',
              text__4wP: '主标题',
              link__4wP: '',
              icon__4wP: '',
            },
            {
              src__CKG : '',
              link__CKG: '',
              text__o7p: '请输入要描述的内容',
              link__o7p: '',
              icon__o7p: '',
              src__aAx : 'usr/6QN4pQxWbP/5c0f9868dbfd7.png',
              link__aAx: '',
              text__5fG: '按钮',
              link__5fG: '',
              icon__5fG: '',
              text__4wP: '主标题',
              link__4wP: '',
              icon__4wP: '',
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
        tplCssObj: {
          self : {
            class: '',
            css  : {
              width : '100%',
              height: '160px',
            },
          },
          inner: {
            class        : '.inner-group',
            hoverCss     : {},
            groupHoverCss: {},
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
              d__src : 'src__CKG',
              d__link: 'link__CKG',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '0px',
                  top   : '0px',
                  width : '100%',
                  height: '100%',
                },
              },
              inner: {
                class        : '.inner',
                css          : {
                  fill        : 'rgba(255,255,255,1)',
                  borderTop   : '2px solid rgba(224,20,23,1)',
                  borderRight : '0px solid rgba(224,20,23,1)',
                  borderBottom: '0px solid rgba(224,20,23,1)',
                  borderLeft  : '0px solid rgba(224,20,23,1)',
                },
                hoverCss     : {},
                groupHoverCss: {},
              },
            },
            className: 'CKG',
            moduleCss: '3',
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
              d__text: 'text__o7p',
              d__link: 'link__o7p',
              d__icon: 'icon__o7p',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '0px',
                  top   : '52px',
                  width : '100%',
                  height: '29px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color: 'rgba(138,138,138,1)',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'o7p',
            moduleCss: '2',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-tp',
            cName    : '图片',
            lock     : {
              d: true,
              r: true,
            },
            static   : {
              src    : 'usr/6QN4pQxWbP/5c0f9868dbfd7.png',
              link   : '',
              d__src : 'src__aAx',
              d__link: 'link__aAx',
              script : '',
            },
            cssObj   : {
              self : {
                class   : '',
                css     : {
                  left  : '25%',
                  top   : '82px',
                  width : '50%',
                  height: '170px',
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
                css          : {},
              },
            },
            className: 'aAx',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '按钮',
              link   : '',
              icon   : '',
              d__text: 'text__5fG',
              d__link: 'link__5fG',
              d__icon: 'icon__5fG',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '29%',
                  top   : '270px',
                  width : '43%',
                  height: '39px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color       : 'rgba(110,110,110,1)',
                  border      : '1px solid rgba(196,196,196,1)',
                  borderRadius: '7px',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: '5fG',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '主标题',
              link   : '',
              icon   : '',
              d__text: 'text__4wP',
              d__link: 'link__4wP',
              d__icon: 'icon__4wP',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '0px',
                  top   : '26px',
                  width : '100%',
                  height: '29px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color   : 'rgba(34,34,34,1)',
                  fontSize: '18px',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: '4wP',
            moduleCss: '2',
            sequence : 0,
          },
        },
      ],
    }],
  tab     : [],
}
