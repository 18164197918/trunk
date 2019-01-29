export default {
  info    : {
    static   : {
      gridList: [6, 6],
    },
    cssObj   : {
      self: {
        css: {
          minHeight      : '350px',
          backgroundColor: 'rgba(41,44,59,1)',
        },
      },
    },
    tplCssObj: {
      self: {
        css: {
          minHeight   : '330px',
          marginTop   : '-93px !important',
          marginBottom: '-93px !important',
        },
      },
    },
  },
  children: [
    {
      info: {
        name     : 'module-an',
        cName    : '按钮',
        static   : {
          text   : '战略合作',
          link   : '',
          icon   : '',
          d__text: 'text__edG',
          d__link: 'link__edG',
          d__icon: 'icon__edG',
          order  : 0,
          script : '',
        },
        cssObj   : {
          self : {
            class: '',
            css  : {
              width : '88.8%',
              height: '26px',
              left  : '20px',
              top   : '18%',
              right : '0px',
            },
          },
          inner: {
            class        : '.inner',
            hoverCss     : {},
            groupHoverCss: {},
            css          : {
              color         : 'rgba(123,144,165,1)',
              transition    : 'all 0.2s 0s ease',
              textAlign     : 'left',
              justifyContent: 'flex-start',
              fontSize      : '18px',
            },
          },
        },
        lock     : {},
        className: 'edG',
        moduleCss: '1',
        sequence : 0,
      },
    },
    {
      info    : {
        name     : 'module-list',
        cName    : '列表',
        className: 'fEb',
        sequence : 0,
        lock     : {},
        cssObj   : {
          self      : {
            class: '',
            css  : {
              left        : 'initial',
              top         : '110px',
              width       : '92.6%',
              right       : '0px',
              position    : 'relative !important',
              marginBottom: '110px',
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
              padding: '19px',
            },
          },
          innerGroup: {
            class   : '.inner-group',
            css     : {
              height: '52px',
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
              src__KuH : 'usr/6QN4pQxWbP/5c18ae01665e0.png',
              link__KuH: '',
            },
            {
              src__KuH : 'usr/6QN4pQxWbP/5c18ae01665e0.png',
              link__KuH: '',
            },
            {
              src__KuH : 'usr/6QN4pQxWbP/5c18ae01665e0.png',
              link__KuH: '',
            },
            {
              src__KuH : 'usr/6QN4pQxWbP/5c18ae01665e0.png',
              link__KuH: '',
            },
            {
              src__KuH : 'usr/6QN4pQxWbP/5c18ae01665e0.png',
              link__KuH: '',
            },
            {
              src__KuH : 'usr/6QN4pQxWbP/5c18ae01665e0.png',
              link__KuH: '',
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
//        tplCssObj: {
//          self : {
//            class: '',
//            css  : {
//              width : '100%',
//              height: '160px',
//            },
//          },
//          inner: {
//            class        : '.inner-group',
//            hoverCss     : {},
//            groupHoverCss: {},
//          },
//        },
      },
      children: [
        {
          info: {
            name     : 'module-tp',
            cName    : '图片',
            lock     : {},
            static   : {
              src    : 'usr/6QN4pQxWbP/5c18ae01665e0.png',
              link   : '',
              d__src : 'src__KuH',
              d__link: 'link__KuH',
              script : '',
            },
            cssObj   : {
              self : {
                class   : '',
                css     : {
                  left  : '0px',
                  top   : '0px',
                  width : '100%',
                  height: '100%',
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
                  transition: 'all 0.2s 0s ease',
                  objectFit : 'contain',
                },
              },
            },
            className: 'KuH',
            moduleCss: '1',
            sequence : 0,
          },
        },
      ],
    },
    {
      info: {
        name     : 'module-an',
        cName    : '按钮',
        static   : {
          text   : '关于我们',
          link   : '',
          icon   : '',
          d__text: 'text__r9h',
          d__link: 'link__r9h',
          d__icon: 'icon__r9h',
          order  : 0,
          script : '',
        },
        cssObj   : {
          self : {
            class: '',
            css  : {
              width : '88%',
              height: '26px',
              left  : '10px',
              top   : '18.6%',
              right : '0px',
            },
          },
          inner: {
            class        : '.inner',
            hoverCss     : {},
            groupHoverCss: {},
            css          : {
              color         : 'rgba(123,144,165,1)',
              transition    : 'all 0.2s 0s ease',
              textAlign     : 'left',
              justifyContent: 'flex-start',
              fontSize      : '18px',
            },
          },
        },
        lock     : {},
        className: 'r9h',
        moduleCss: '1',
        sequence : 1,
      },
    },
    {
      info    : {
        name     : 'module-list',
        cName    : '列表',
        className: 'dvL',
        sequence : 1,
        lock     : {},
        cssObj   : {
          self      : {
            class: '',
            css  : {
              left        : 'initial',
              top         : '123px',
              width       : '89.6%',
              right       : '0px',
              position    : 'relative !important',
              marginBottom: '123px',
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
              height: '27px',
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
              text__erE: '关于我们',
              link__erE: '',
              icon__erE: '',
            },
            {
              text__erE: '关于我们',
              link__erE: '',
              icon__erE: '',
            },
            {
              text__erE: '关于我们',
              link__erE: '',
              icon__erE: '',
            },
            {
              text__erE: '关于我们',
              link__erE: '',
              icon__erE: '',
            },
            {
              text__erE: '关于我们',
              link__erE: '',
              icon__erE: '',
            },
            {
              text__erE: '关于我们',
              link__erE: '',
              icon__erE: '',
            },
            {
              text__erE: '关于我们',
              link__erE: '',
              icon__erE: '',
            },
            {
              text__erE: '关于我们',
              link__erE: '',
              icon__erE: '',
            },
            {
              text__erE: '关于我们',
              link__erE: '',
              icon__erE: '',
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
//        tplCssObj: {
//          self : {
//            class: '',
//            css  : {
//              width : '100%',
//              height: '160px',
//            },
//          },
//          inner: {
//            class        : '.inner-group',
//            hoverCss     : {},
//            groupHoverCss: {},
//          },
//        },
      },
      children: [
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '关于我们',
              link   : '',
              icon   : '',
              d__text: 'text__erE',
              d__link: 'link__erE',
              d__icon: 'icon__erE',
              order  : 0,
              script : '',
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
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color         : 'rgba(103,106,121,1)',
                  transition    : 'all 0.2s 0s ease',
                  textAlign     : 'left',
                  justifyContent: 'flex-start',
                  fontSize      : '14px',
                },
              },
            },
            lock     : {},
            className: 'erE',
            moduleCss: '1',
            sequence : 1,
          },
        },
      ],
    },
  ],
  tab     : [],
}
