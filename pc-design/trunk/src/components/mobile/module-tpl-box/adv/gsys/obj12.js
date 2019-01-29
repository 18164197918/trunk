export default {
  info    : {
    cssObj   : {
      self: {
        css: {
          minHeight: '160px',
        },
      },
    },
    tplCssObj: {
      self: {
        css: {
          minHeight   : '160px',
          marginTop   : '-40px !important',
          marginBottom: '-55px !important',
        },
      },
    },
  },
  children: [
    {
      info    : {
        name     : 'module-list',
        cName    : '列表',
        className: 'ioZH',
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
              top         : '0px',
              width       : '100%',
              position    : 'relative !important',
              marginBottom: '0px',
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
              width  : '33.333%',
              padding: '11px',
            },
          },
          innerGroup: {
            class   : '.inner-group',
            css     : {
              height: '138px',
            },
            hoverCss: {},
          },
        },
        static   : {
          direction  : 'multi-row',
          columnCount: 3,
          dataOrigin : 0,
          dataList   : [
            {
              src__Fkvo : '',
              link__Fkvo: '',
              text__i6VA: '请输入内容',
              link__i6VA: '',
              icon__i6VA: '',
              text__4Fao: '00',
              link__4Fao: '',
              icon__4Fao: '',
              text__rsGZ: '',
              link__rsGZ: '',
              icon__rsGZ: '',
            },
            {
              src__Fkvo : '',
              link__Fkvo: '',
              text__i6VA: '请输入内容',
              link__i6VA: '',
              icon__i6VA: '',
              text__4Fao: '00',
              link__4Fao: '',
              icon__4Fao: '',
              text__rsGZ: '',
              link__rsGZ: '',
              icon__rsGZ: '',
            },
            {
              src__Fkvo : '',
              link__Fkvo: '',
              text__i6VA: '请输入内容',
              link__i6VA: '',
              icon__i6VA: '',
              text__4Fao: '00',
              link__4Fao: '',
              icon__4Fao: '',
              text__rsGZ: '',
              link__rsGZ: '',
              icon__rsGZ: '',
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
              d__src : 'src__Fkvo',
              d__link: 'link__Fkvo',
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
                  fill: 'rgba(246,246,246,1)',
                },
                hoverCss     : {},
                groupHoverCss: {},
              },
            },
            className: 'Fkvo',
            moduleCss: '2',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '请输入内容',
              link   : '',
              icon   : '',
              d__text: 'text__i6VA',
              d__link: 'link__i6VA',
              d__icon: 'icon__i6VA',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '52%',
                  top   : '81px',
                  width : '48%',
                  height: '23px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color   : 'rgba(101,101,101,1)',
                  fontSize: '14px',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'i6VA',
            moduleCss: '2',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '00',
              link   : '',
              icon   : '',
              d__text: 'text__4Fao',
              d__link: 'link__4Fao',
              d__icon: 'link__4Fao',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '52%',
                  top   : '34px',
                  width : '47%',
                  height: '44px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color   : 'rgba(6,6,6,1)',
                  fontSize: '46px',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: '4Fao',
            moduleCss: '2',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '',
              link   : '',
              icon   : 'icl-bug-fill',
              d__text: 'text__rsGZ',
              d__link: 'link__rsGZ',
              d__icon: 'icon__rsGZ',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '0px',
                  top   : 'calc(50% - 34.500px)',
                  width : '52%',
                  height: '69px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color       : 'rgba(153,153,153,1)',
                  fontSize    : '56px',
                  borderTop   : '0px solid rgba(0,0,0,1)',
                  borderRight : '1px solid rgba(217,217,217,1)',
                  borderBottom: '0px solid rgba(0,0,0,1)',
                  borderLeft  : '0px solid rgba(0,0,0,1)',
                },
              },
            },
            lock     : {
              d: false,
              r: false,
            },
            className: 'rsGZ',
            moduleCss: '2',
            sequence : 0,
          },
        },
      ],
    },
  ],
  tab     : [],
}
