export default {
  info    : {
    cssObj   : {
      self: {
        css: {
          minHeight: '440px',
        },
      },
    },
    tplCssObj: {
      self: {
        css: {
          minHeight   : '420px',
          marginTop   : '-127px !important',
          marginBottom: '-127px !important',
        },
      },
    },
  },
  children: [
    {
      info    : {
        name     : 'module-list',
        cName    : '列表',
        className: '1Yl',
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
              top         : '30px',
              width       : '100%',
              position    : 'relative !important',
              marginBottom: '30px',
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
              padding: '0px',
            },
          },
          innerGroup: {
            class   : '.inner-group',
            css     : {
              height: '385px',
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
              text__vQo : '请输入要描述的内容进行内容补充',
              link__vQo : '',
              icon__vQo : '',
              text__q3g : '主标题',
              link__q3g : '',
              icon__q3g : '',
              src__93uV : 'usr/6QN4pQxWbP/5bece29a337d4.jpg',
              link__93uV: '',
            },
            {
              text__vQo : '请输入要描述的内容进行内容补充',
              link__vQo : '',
              icon__vQo : '',
              text__q3g : '主标题',
              link__q3g : '',
              icon__q3g : '',
              src__93uV : 'usr/6QN4pQxWbP/5bece29a337d4.jpg',
              link__93uV: '',
            },
            {
              text__vQo : '请输入要描述的内容进行内容补充',
              link__vQo : '',
              icon__vQo : '',
              text__q3g : '主标题',
              link__q3g : '',
              icon__q3g : '',
              src__93uV : 'usr/6QN4pQxWbP/5bece29a337d4.jpg',
              link__93uV: '',
            },
            {
              text__vQo : '请输入要描述的内容进行内容补充',
              link__vQo : '',
              icon__vQo : '',
              text__q3g : '主标题',
              link__q3g : '',
              icon__q3g : '',
              src__93uV : 'usr/6QN4pQxWbP/5bece29a337d4.jpg',
              link__93uV: '',
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
              link   : '',
              icon   : '',
              d__link: 'link__vQo',
              d__icon: 'icon__vQo',
              d__text: 'text__vQo',
              order  : 0,
              script : '',
              text   : '请输入要描述的内容进行内容补充',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '28%',
                  top   : '183px',
                  width : '21%',
                  height: '185px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color         : 'rgba(103,103,103,1)',
                  writingMode   : 'tb-rl',
                  fontSize      : '16px',
                  alignItems    : 'center',
                  textAlign     : 'left',
                  justifyContent: 'flex-start',
                  fontStyle     : 'normal',
                  fontWeight    : 'normal',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'vQo',
            moduleCss: '2',
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
              d__text: 'text__q3g',
              d__link: 'link__q3g',
              d__icon: 'icon__q3g',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '53%',
                  top   : '183px',
                  width : '23%',
                  height: '163px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color         : 'rgba(64,64,64,1)',
                  writingMode   : 'tb-rl',
                  fontSize      : '26px',
                  alignItems    : 'center',
                  textAlign     : 'left',
                  justifyContent: 'flex-start',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'q3g',
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
              src    : 'usr/6QN4pQxWbP/5bece29a337d4.jpg',
              link   : '',
              d__src : 'src__93uV',
              d__link: 'link__93uV',
              script : '',
            },
            cssObj   : {
              self : {
                class   : '',
                css     : {
                  left  : 'calc(50% - 83.5px)',
                  top   : '0px',
                  width : '160px',
                  height: '160px',
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
                  border      : '4px solid rgba(233,231,232,1)',
                  transition  : 'all 0.2s 0s ease',
                  borderRadius: '50%',
                },
              },
            },
            className: '93uV',
            moduleCss: '1',
            sequence : 0,
          },
        },
      ],
    }],
  tab     : [],
}
