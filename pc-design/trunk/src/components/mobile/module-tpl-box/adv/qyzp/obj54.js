export default {
  info    : {
    static   : {
      gridList: [12],
    },
    cssObj   : {
      self: {
        css: {
          minHeight      : '480px',
          backgroundColor: 'rgba(238,238,238,1)',
        },
      },
    },
  },
  children: [
    {
      info    : {
        name     : 'module-group',
        cName    : '分组',
        className: 'UIS',
        sequence : 0,
        lock     : {},
        cssObj   : {
          self : {
            class: '',
            css  : {
              left  : '2%',
              top   : '23px',
              width : '31%',
              height: '49px',
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
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '未来的路很远，我们携手一起走！',
              link   : '',
              icon   : '',
              d__text: 'text__XvI',
              d__link: 'link__XvI',
              d__icon: 'icon__XvI',
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
                  height: '24px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color         : 'rgba(73,73,73,1)',
                  transition    : 'all 0.2s 0s ease',
                  textAlign     : 'left',
                  justifyContent: 'flex-start',
                  fontSize      : '16px',
                  fontWeight    : 'bold',
                },
              },
            },
            lock     : {},
            className: 'XvI',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '如有意者，请投简历到jianli@163.com邮箱',
              link   : '',
              icon   : '',
              d__text: 'text__HKw',
              d__link: 'link__HKw',
              d__icon: 'icon__HKw',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '0px',
                  top   : '28px',
                  width : '100%',
                  height: '21px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color         : 'rgba(73,73,73,1)',
                  transition    : 'all 0.2s 0s ease',
                  textAlign     : 'left',
                  justifyContent: 'flex-start',
                  fontSize      : '12px',
                  fontWeight    : 'normal',
                },
              },
            },
            lock     : {},
            className: 'HKw',
            moduleCss: '1',
            sequence : 0,
          },
        },
      ],
    },
    {
      info    : {
        name     : 'module-list',
        cName    : '列表',
        className: 'Gzv',
        sequence : 0,
        lock     : {},
        cssObj   : {
          self      : {
            class: '',
            css  : {
              left        : '0px',
              top         : '81px',
              width       : '100%',
              position    : 'relative !important',
              marginBottom: '81px',
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
              width  : '100%',
              padding: '14px',
            },
          },
          innerGroup: {
            class   : '.inner-group',
            css     : {
              height: '162px',
            },
            hoverCss: {},
          },
        },
        static   : {
          direction  : 'multi-row',
          columnCount: 1,
          dataOrigin : 0,
          dataList   : [
            {
              textarea__VPF: '1、本科及以上学历，3年以上PHP开发经验\n2、有大型项目开发经验者优先\n3、精通PHP语言，有面向对象开发经验者优先\n4、熟悉LAMP体系的开发，熟悉Linux操作系统，熟悉Apache系统配置',
              link__VPF    : '',
              icon__VPF    : '',
              text__Yaw    : 'PROGRAMMER',
              link__Yaw    : '',
              icon__Yaw    : '',
              text__9ku    : '程序员',
              link__9ku    : '',
              icon__9ku    : '',
              text__gfk    : '',
              link__gfk    : '',
              icon__gfk    : 'icl-android-fill',
            },
            {
              textarea__VPF: '1、本科及以上学历，3年以上PHP开发经验\n2、有大型项目开发经验者优先\n3、精通PHP语言，有面向对象开发经验者优先\n4、熟悉LAMP体系的开发，熟悉Linux操作系统，熟悉Apache系统配置',
              link__VPF    : '',
              icon__VPF    : '',
              text__Yaw    : 'PROGRAMMER',
              link__Yaw    : '',
              icon__Yaw    : '',
              text__9ku    : '程序员',
              link__9ku    : '',
              icon__9ku    : '',
              text__gfk    : '',
              link__gfk    : '',
              icon__gfk    : 'icl-android-fill',
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
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              link       : '',
              icon       : '',
              d__link    : 'link__VPF',
              d__icon    : 'icon__VPF',
              order      : 0,
              script     : '',
              textarea   : '1、本科及以上学历，3年以上PHP开发经验\n2、有大型项目开发经验者优先\n3、精通PHP语言，有面向对象开发经验者优先\n4、熟悉LAMP体系的开发，熟悉Linux操作系统，熟悉Apache系统配置',
              d__textarea: 'textarea__VPF',
              rows       : 5,
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '28%',
                  top   : '16px',
                  width : '54%',
                  height: '130px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color         : 'rgba(73,73,73,1)',
                  transition    : 'all 0.2s 0s ease',
                  textAlign     : 'left',
                  justifyContent: 'flex-start',
                  fontSize      : '15px',
                  fontWeight    : 'normal',
                  lineHeight    : '1.8',
                  padding       : '20px',
                  borderTop     : '0px solid rgba(0,0,0,1)',
                  borderRight   : '0px solid rgba(0,0,0,1)',
                  borderBottom  : '0px solid rgba(0,0,0,1)',
                  borderLeft    : '1px solid rgba(235,235,235,1)',
                },
              },
            },
            lock     : {},
            className: 'VPF',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : 'PROGRAMMER',
              link   : '',
              icon   : '',
              d__text: 'text__Yaw',
              d__link: 'link__Yaw',
              d__icon: 'icon__Yaw',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '9%',
                  top   : '85px',
                  width : '14%',
                  height: '18px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color         : 'rgba(246,148,0,1)',
                  transition    : 'all 0.2s 0s ease',
                  textAlign     : 'left',
                  justifyContent: 'flex-start',
                  fontSize      : '12px',
                  fontWeight    : 'normal',
                },
              },
            },
            lock     : {},
            className: 'Yaw',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '程序员',
              link   : '',
              icon   : '',
              d__text: 'text__9ku',
              d__link: 'link__9ku',
              d__icon: 'icon__9ku',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '9%',
                  top   : '58px',
                  width : '13%',
                  height: '24px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color         : 'rgba(73,73,73,1)',
                  transition    : 'all 0.2s 0s ease',
                  textAlign     : 'left',
                  justifyContent: 'flex-start',
                  fontSize      : '18px',
                  fontWeight    : 'normal',
                },
              },
            },
            lock     : {},
            className: '9ku',
            moduleCss: '1',
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
              icon   : 'icl-android-fill',
              d__text: 'text_gfk',
              d__link: 'link_gfk',
              d__icon: 'icon_gfk',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  width : '10%',
                  height: '86px',
                  left  : '85%',
                  top   : '27.5%',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color     : 'rgba(80,80,80,1)',
                  transition: 'all 0.2s 0s ease',
                  fontSize  : '75px',
                },
              },
            },
            lock     : {},
            className: 'gfk',
            moduleCss: '1',
            sequence : 0,
          },
        },
      ],
    },
  ],
  tab     : [],
}
