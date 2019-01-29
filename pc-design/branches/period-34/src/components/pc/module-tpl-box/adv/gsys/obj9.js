export default {
  info    : {
    cssObj   : {
      self: {
        css: {
          minHeight: '340px',
        },
      },
    },
    tplCssObj: {
      self: {
        css: {
          minHeight   : '330px',
          marginTop   : '-100px !important',
          marginBottom: '-100px !important',
        },
      },
    },
  },
  children: [
    {
      info    : {
        cName    : '列表',
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
              top         : '172px',
              width       : '100%',
              position    : 'relative !important',
              marginBottom: '172px',
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
              padding: '34px',
            },
          },
          innerGroup: {
            class   : '.inner-group',
            css     : {
              height: '89px',
            },
            hoverCss: {},
          },
        },
        className: 'RTw',
        name     : 'module-list',
        static   : {
          direction  : 'multi-row',
          columnCount: 3,
          dataOrigin : 0,
          dataList   : [
            {
              text__VcK: '请输入要描述的内容',
              link__VcK: '',
              icon__VcK: '',
              text__ca0: '000',
              link__ca0: '',
              icon__ca0: '',
            },
            {
              text__VcK: '请输入要描述的内容',
              link__VcK: '',
              icon__VcK: '',
              text__ca0: '000',
              link__ca0: '',
              icon__ca0: '',
            },
            {
              text__VcK: '请输入要描述的内容',
              link__VcK: '',
              icon__VcK: '',
              text__ca0: '000',
              link__ca0: '',
              icon__ca0: '',
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
              text   : '请输入要描述的内容',
              link   : '',
              icon   : '',
              d__text: 'text__VcK',
              d__link: 'link__VcK',
              d__icon: 'icon__VcK',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '0px',
                  top   : '30px',
                  width : '100%',
                  height: '70px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color          : 'rgba(145,145,145,1)',
                  fontSize       : '16px',
                  backgroundColor: 'rgba(255,255,255,1)',
                  border         : '1px solid rgba(227,227,227,1)',
                  textIndent     : '10px',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'VcK',
            moduleCss: '2',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '000',
              link   : '',
              icon   : '',
              d__text: 'text__ca0',
              d__link: 'link__ca0',
              d__icon: 'icon__ca0',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '11%',
                  top   : '-8px',
                  width : '77%',
                  height: '51px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color          : 'rgba(145,145,145,1)',
                  fontSize       : '48px',
                  backgroundColor: 'rgba(255,255,255,1)',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'ca0',
            moduleCss: '2',
            sequence : 0,
          },
        },
      ],
    },
    {
      info    : {
        cName    : '分组',
        sequence : 0,
        lock     : {
          d: true,
          r: true,
        },
        cssObj   : {
          self : {
            class: '',
            css  : {
              left  : '32%',
              top   : '31px',
              width : '36%',
              height: '106px',
            },
          },
          inner: {
            class   : '.inner-group',
            css     : {},
            hoverCss: {},
          },
        },
        className: 'Ih8',
        name     : 'module-group',
      },
      children: [
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '',
              link   : '',
              icon   : '',
              d__text: 'text__EuQ',
              d__link: 'link__EuQ',
              d__icon: 'icon__EuQ',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '0px',
                  top   : '42px',
                  width : '100%',
                  height: '15px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color       : 'rgba(145,145,145,1)',
                  fontSize    : '14px',
                  borderTop   : '0px solid rgba(159,159,159,1)',
                  borderRight : '0px solid rgba(153,153,153,1)',
                  borderBottom: '1px solid rgba(153,153,153,1)',
                  borderLeft  : '0px solid rgba(153,153,153,1)',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'EuQ',
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
              d__text: 'text__fBc',
              d__link: 'link__fBc',
              d__icon: 'icon__fBc',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '17%',
                  top   : '42px',
                  width : '73%',
                  height: '27px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color          : 'rgba(145,145,145,1)',
                  fontSize       : '14px',
                  backgroundColor: 'rgba(255,255,255,1)',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'fBc',
            moduleCss: '2',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '第一主标题',
              link   : '',
              icon   : '',
              d__text: 'text__rXL',
              d__link: 'link__rXL',
              d__icon: 'icon__rXL',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '14%',
                  top   : '79px',
                  width : '73%',
                  height: '27px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color          : 'rgba(110,110,110,1)',
                  fontSize       : '18px',
                  backgroundColor: 'rgba(255,255,255,1)',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'rXL',
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
              icon   : 'icl-reddit',
              d__text: 'text__DL6',
              d__link: 'link__DL6',
              d__icon: 'icon__DL6',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '40%',
                  top   : '0px',
                  width : '22%',
                  height: '36px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color   : 'rgba(145,145,145,1)',
                  fontSize: '32px',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'DL6',
            moduleCss: '2',
            sequence : 0,
          },
        },
      ],
    }],
  tab     : [],
}
