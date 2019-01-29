export default {
  info    : {
    static   : {
      gridList: [12],
    },
    cssObj   : {
      self: {
        css: {
          minHeight      : '400px',
          backgroundColor: 'rgba(246,246,246,1)',
        },
      },
    },
    tplCssObj: {
      self: {
        css: {
          minHeight   : '400px',
          marginTop   : '-119px !important',
          marginBottom: '-119px !important',
        },
      },
    },
  },
  children: [
    {
      info    : {
        name     : 'module-list',
        cName    : '列表',
        className: 'XDI',
        sequence : 0,
        lock     : {},
        cssObj   : {
          self      : {
            class: '',
            css  : {
              left        : '0px',
              top         : '18px',
              width       : '100%',
              position    : 'relative !important',
              marginBottom: '18px',
            },
          },
          inner     : {
            class   : '.inner-group',
            css     : {
              backgroundColor: 'rgba(255,255,255,1)',
            },
            hoverCss: {},
          },
          innerGap  : {
            class: '.inner-gap',
            css  : {
              width  : '33.333%',
              padding: '14px',
            },
          },
          innerGroup: {
            class   : '.inner-group',
            css     : {
              height: '336px',
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
              text__mAQ: '咨询服务主标题',
              link__mAQ: '',
              icon__mAQ: '',
              text__NWX: '请输入要描述的内容进行补充',
              link__NWX: '',
              icon__NWX: '',
              src__AO3 : 'usr/6QN4pQxWbP/5bed4a6ff2bf3.jpg',
              link__AO3: '',
            },
            {
              text__mAQ: '咨询服务主标题',
              link__mAQ: '',
              icon__mAQ: '',
              text__NWX: '请输入要描述的内容进行补充',
              link__NWX: '',
              icon__NWX: '',
              src__AO3 : 'usr/6QN4pQxWbP/5bed4a6ff2bf3.jpg',
              link__AO3: '',
            },
            {
              text__mAQ: '咨询服务主标题',
              link__mAQ: '',
              icon__mAQ: '',
              text__NWX: '请输入要描述的内容进行补充',
              link__NWX: '',
              icon__NWX: '',
              src__AO3 : 'usr/6QN4pQxWbP/5bed4a6ff2bf3.jpg',
              link__AO3: '',
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
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '咨询服务主标题',
              link   : '',
              icon   : '',
              d__text: 'text__mAQ',
              d__link: 'link__mAQ',
              d__icon: 'icon__mAQ',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '0px',
                  top   : '218px',
                  width : '100%',
                  height: '36px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color     : 'rgba(0,0,0,1)',
                  transition: 'all 0.2s 0s ease',
                  fontSize  : '16px',
                  fontFamily: '黑体',
                  fontWeight: 'bold',
                },
              },
            },
            lock     : {},
            className: 'mAQ',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '请输入要描述的内容进行补充',
              link   : '',
              icon   : '',
              d__text: 'text__NWX',
              d__link: 'link__NWX',
              d__icon: 'icon__NWX',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '0px',
                  top   : '260px',
                  width : '100%',
                  height: '36px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color     : 'rgba(89,89,89,1)',
                  transition: 'all 0.2s 0s ease',
                  fontSize  : '14px',
                  fontFamily: '微软雅黑',
                  fontWeight: 'normal',
                },
              },
            },
            lock     : {},
            className: 'NWX',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-tp',
            cName    : '图片',
            lock     : {},
            static   : {
              src    : 'usr/6QN4pQxWbP/5bed4a6ff2bf3.jpg',
              link   : '',
              d__src : 'src__AO3',
              d__link: 'link__AO3',
              script : '',
            },
            cssObj   : {
              self : {
                class   : '',
                css     : {
                  left  : '0px',
                  top   : '0px',
                  width : '100%',
                  height: '183px',
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
                },
              },
            },
            className: 'AO3',
            moduleCss: '1',
            sequence : 0,
          },
        },
      ],
    },
  ],
  tab     : [],
}
