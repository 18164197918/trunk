import $ from 'jquery'
import { generateClassName } from '../common/constant'
import moduleContainerList from '../module-container/module-list'


export const createEmptySiteData = {
  cssObj: {
    h1  : {css: {fontSize: '36px', fontWeight: 'bold'}, class: 'h1'},
    h2  : {css: {'color': 'rgba(176,57,57,1)', fontSize: '32px', fontWeight: 'bold'}, class: 'h2'},
    h3  : {css: {fontSize: '26px', fontWeight: 'bold'}, class: 'h3'},
    h4  : {css: {fontSize: '20px', fontWeight: 'normal'}, class: 'h4'},
    h5  : {css: {fontSize: '16px', fontWeight: 'normal'}, class: 'h5'},
    h6  : {css: {fontSize: '12px', fontWeight: 'normal'}, class: 'h6'},
    body: {css: {color: 'rgba(85,85,85,1)', fontSize: '14px', fontFamily: '微软雅黑', lineHeight: '1.5'}, class: ''},
  },

  database: [],

  footConfig: [],
  headConfig: [],

  safeLineWidth: '1000px',

  isShowFootConfig: true,
  isShowHeadConfig: true,

  bindColumn : {},
  bindContent: {},
  bindSingle : {},
}


export const createEmptyPageData = function () {
  let temp = $.extend(true, {}, {
    info    : {
      name     : 'module-container',
      cName    : '容器',
      static   : {
        hasSafeLine: true,
        gridList   : [12],
      },
      lock     : {},
      cssObj   : {
        self     : {
          class: '',
          css  : {
            minHeight: '300px',
          },
        },
        container: {
          class: '.container',
          css  : {},
        },
      },
      className: 'IPi',
      moduleCss: '',
    },
    children: []
  }, {info: {className: generateClassName(),}})
  delete temp.info.tplCssObj

  return {
    config: [temp],
    cssObj: null,
  }
}


export const createColumnPageData = function () {
  return {
    config: [
      {
        info    : {
          name     : 'module-container',
          cName    : '容器',
          static   : {
            hasSafeLine: true,
            gridList   : [
              3,
              9,
            ],
          },
          lock     : {},
          cssObj   : {
            self     : {
              class: '',
              css  : {
                minHeight: '300px',
              },
            },
            container: {
              class: '.container',
              css  : {},
            },
          },
          className: 'IPi',
          moduleCss: '2',
        },
        children: [
          {
            info    : {
              name     : 'module-menu',
              cName    : '菜单',
              sequence : 0,
              lock     : {},
              static   : {
                class    : 'vertical1',
                type     : 'sub',
                isShowSub: true,
              },
              cssObj   : {
                self : {
                  class: '',
                  css  : {
                    left  : '0%',
                    top   : '17px',
                    width : '80%',
                    height: '290px',
                  },
                },
                inner: {
                  class        : '.inner-menu',
                  hoverCss     : {},
                  groupHoverCss: {},
                  css          : {},
                },
              },
              className: '9AuY',
            },
            children: [
              {
                info: {
                  name     : 'module-an',
                  cName    : '按钮',
                  lock     : {
                    d: true,
                    r: true,
                  },
                  static   : {
                    link   : '',
                    icon   : '',
                    text   : '一级菜单',
                    d__link: '',
                    d__icon: '',
                    d__text: '',
                    order  : 0,
                  },
                  cssObj   : {
                    self : {
                      class   : '',
                      css     : {
                        width : '100%',
                        height: '55px',
                        left  : '0%',
                      },
                      hoverCss: {},
                    },
                    inner: {
                      class        : '.inner',
                      css          : {
                        backgroundColor: 'rgba(120,141,162,1)',
                        transition     : 'all 0.1s 0s ease',
                        fontWeight     : 'bold',
                        color          : 'rgba(255,255,255,1)',
                      },
                      hoverCss     : {},
                      groupHoverCss: {},
                    },
                  },
                  className: 'beLO',
                },
              },
              {
                info: {
                  name     : 'module-an',
                  cName    : '按钮',
                  lock     : {
                    d: true,
                    r: true,
                  },
                  static   : {
                    text   : '二级菜单',
                    link   : '',
                    icon   : '',
                    d__text: '',
                    d__link: '',
                    d__icon: '',
                    order  : 0,
                  },
                  cssObj   : {
                    self : {
                      class   : '',
                      css     : {
                        width : '100%',
                        height: '55px',
                      },
                      hoverCss: {},
                    },
                    inner: {
                      class        : '.inner',
                      css          : {
                        color       : 'rgba(80,80,80,1)',
                        borderTop   : '0px solid rgba(0,0,0,1)',
                        borderRight : '0px solid rgba(0,0,0,1)',
                        borderBottom: '0px dashed rgba(220,220,220,1)',
                        borderLeft  : '0px solid rgba(0,0,0,1)',
                        transition  : 'all 0.1s 0s ease',
                        boxShadow   : '0px 5px 15px -10px rgba(0,0,0,.5)',
                      },
                      hoverCss     : {
                        backgroundColor: 'rgba(223,224,227,1)',
                      },
                      groupHoverCss: {},
                    },
                  },
                  className: 'zlQT',
                },
              },
              {
                info: {
                  name     : 'module-an',
                  cName    : '按钮',
                  lock     : {
                    d: true,
                    r: true,
                  },
                  static   : {
                    text   : '三级菜单',
                    link   : '',
                    icon   : '',
                    d__text: '',
                    d__link: '',
                    d__icon: '',
                    order  : 0,
                  },
                  cssObj   : {
                    self : {
                      class   : '',
                      css     : {
                        width : '100%',
                        height: '40px',
                      },
                      hoverCss: {},
                    },
                    inner: {
                      class        : '.inner',
                      css          : {
                        color       : 'rgba(80,80,80,1)',
                        borderTop   : '0px solid rgba(0,0,0,1)',
                        borderRight : '0px solid rgba(0,0,0,1)',
                        borderBottom: '1px solid rgba(220,220,220,1)',
                        borderLeft  : '0px solid rgba(0,0,0,1)',
                        transition  : 'all 0.1s 0s ease',
                      },
                      hoverCss     : {
                        backgroundColor: 'rgba(223,224,227,1)',
                      },
                      groupHoverCss: {},
                    },
                  },
                  className: '8geC',
                },
              },
            ],
          },
          {
            info    : {
              name     : 'module-list',
              cName    : '列表',
              sequence : 1,
              lock     : {
                d: true,
                r: true,
              },
              cssObj   : {
                self      : {
                  class: '',
                  css  : {
                    left        : '0%',
                    top         : '0px',
                    width       : '100%',
                    position    : 'relative !important',
                    marginBottom: '0px',
                  },
                },
                inner     : {
                  class   : '.inner-group',
                  hoverCss: {},
                  css     : {},
                },
                innerGap  : {
                  class: '.inner-gap',
                  css  : {
                    width  : '100%',
                    padding: '20px',
                  },
                },
                innerGroup: {
                  class   : '.inner-group',
                  css     : {
                    height: '137px',
                  },
                  hoverCss: {},
                },
              },
              className: 'sOtl',
              static   : {
                direction  : 'multi-row',
                columnCount: 1,
                dataOrigin : 2,
                dataList   : [
                  {
                    text__ogGG : '2018-12-6',
                    link__ogGG : '',
                    text__iA8C : '标题',
                    link__iA8C : '',
                    src__5MLt  : 'usr/g5O46p2bRB/5bc45046360d8.jpg',
                    link__5MLt : '',
                    shtml__AzwQ: '<p style="text-align: left;">详情</p>',
                    link__AzwQ : '',
                  },
                  {
                    text__ogGG : '2018-12-6',
                    link__ogGG : '',
                    text__iA8C : '标题',
                    link__iA8C : '',
                    src__5MLt  : 'usr/g5O46p2bRB/5bc45046360d8.jpg',
                    link__5MLt : '',
                    shtml__AzwQ: '<p style="text-align: left;">详情</p>',
                    link__AzwQ : '',
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
                categoryId : '',
              },
            },
            children: [
              {
                info: {
                  name     : 'module-tp',
                  cName    : '图片',
                  lock     : {
                    d: false,
                    r: false,
                  },
                  sequence : 0,
                  static   : {
                    src    : 'usr/g5O46p2bRB/5bc45046360d8.jpg',
                    link   : '',
                    d__src : 'image',
                    d__link: 'link__5MLt',
                  },
                  cssObj   : {
                    self : {
                      class        : '',
                      css          : {
                        height: '100%',
                        left  : '0%',
                        top   : '0%',
                        width : '232px',
                      },
                      groupHoverCss: {},
                    },
                    inner: {
                      class        : [
                        '.inner',
                        '.inner:before',
                        '.inner img',
                      ],
                      css          : {},
                      hoverCss     : {},
                      groupHoverCss: {},
                    },
                  },
                  className: '5MLt',
                },
              },
              {
                info: {
                  name     : 'module-an',
                  cName    : '按钮',
                  lock     : {
                    d: false,
                    r: false,
                  },
                  static   : {
                    text   : '标题',
                    icon   : '',
                    link   : '',
                    d__text: 'title',
                    d__icon: 'icon__iA8C',
                    d__link: 'link__iA8C',
                    order  : 0,
                  },
                  cssObj   : {
                    self : {
                      class        : '',
                      css          : {
                        height: '29px',
                        left  : '29.749%',
                        top   : '5px',
                        width : '67.685%',
                      },
                      groupHoverCss: {},
                    },
                    inner: {
                      class        : '.inner',
                      css          : {
                        backgroundColor: 'rgba(255,52,77,0)',
                        textAlign      : 'left',
                        justifyContent : 'flex-start',
                        fontWeight     : 'bold',
                        fontSize       : '16px',
                      },
                      hoverCss     : {},
                      groupHoverCss: {},
                    },
                  },
                  className: 'iA8C',
                  sequence : 0,
                },
              },
              {
                info: {
                  name     : 'module-an',
                  cName    : '按钮',
                  lock     : {
                    d: false,
                    r: false,
                  },
                  static   : {
                    text   : '2018-12-6',
                    icon   : '',
                    link   : '',
                    d__text: 'updated_at',
                    d__icon: 'icon__ogGG',
                    d__link: 'link__ogGG',
                    order  : 0,
                  },
                  cssObj   : {
                    self : {
                      class        : '',
                      css          : {
                        height: '20px',
                        left  : '29.747%',
                        top   : '46px',
                        width : '67.683%',
                      },
                      groupHoverCss: {},
                    },
                    inner: {
                      class        : '.inner',
                      css          : {
                        backgroundColor: 'rgba(255,52,77,0)',
                        textAlign      : 'left',
                        justifyContent : 'flex-start',
                        color          : 'rgba(155,155,155,1)',
                      },
                      hoverCss     : {},
                      groupHoverCss: {},
                    },
                  },
                  className: 'ogGG',
                  sequence : 0,
                },
              },
              {
                info: {
                  name     : 'module-an',
                  cName    : '按钮',
                  lock     : {
                    d: false,
                    r: false,
                  },
                  static   : {
                    textarea   : '',
                    icon       : '',
                    link       : '',
                    d__textarea: 'description',
                    d__icon    : 'icon__AzwQ',
                    d__link    : 'link__AzwQ',
                    order      : 0,
                  },
                  cssObj   : {
                    self : {
                      class        : '',
                      css          : {
                        height: '58px',
                        left  : '29.747%',
                        top   : '75px',
                        width : '67.683%',
                      },
                      groupHoverCss: {},
                    },
                    inner: {
                      class        : '.inner',
                      css          : {
                        textAlign     : 'left',
                        justifyContent: 'flex-start',
                      },
                      hoverCss     : {},
                      groupHoverCss: {},
                    },
                  },
                  className: 'AzwQ',
                  sequence : 0,
                },
              },
            ],
          },
        ],
        tab     : [],
      },
      {
        info    : {
          name     : 'module-container',
          cName    : '容器',
          static   : {
            hasSafeLine: true,
            gridList   : [
              3,
              9,
            ],
          },
          lock     : {},
          cssObj   : {
            self     : {
              class: '',
              css  : {
                minHeight: '100px',
              },
            },
            container: {
              class: '.container',
              css  : {},
            },
          },
          className: 'IPj',
          moduleCss: '2',
        },
        children: [
          {
            info    : {
              name     : 'module-page',
              cName    : '分页',
              sequence : 1,
              lock     : {},
              static   : {
                isShowEnds: false,
                isShowTurn: true,
                isShowNum : true,
                firstText : '首页',
                lastText  : '尾页',
                prevText  : '上一页',
                nextText  : '下一页',
              },
              cssObj   : {
                self : {
                  class: '',
                  css  : {
                    left  : '0%',
                    top   : '32px',
                    width : '100%',
                    height: '40px',
                  },
                },
                inner: {
                  class        : '.inner-page',
                  hoverCss     : {},
                  groupHoverCss: {},
                  css          : {},
                },
              },
              className: 'fXW5',
              moduleCss: '1',
            },
            children: [
              {
                info: {
                  sysLock  : true,
                  name     : 'module-an',
                  cName    : '按钮',
                  lock     : {},
                  static   : {
                    text   : '按钮',
                    link   : '',
                    icon   : '',
                    d__text: '',
                    d__link: '',
                    d__icon: '',
                    order  : 0,
                  },
                  cssObj   : {
                    self : {
                      class   : '',
                      css     : {
                        width       : '70px',
                        height      : '100%',
                        marginTop   : '0px',
                        marginRight : '5px',
                        marginBottom: '0px',
                        marginLeft  : '5px',
                      },
                      hoverCss: {},
                    },
                    inner: {
                      class        : '.inner',
                      css          : {
                        border      : '1px solid rgba(74,79,95,1)',
                        color       : 'rgba(71,77,90,1)',
                        transition  : 'all 0.1s 0s ease',
                        borderRadius: '35px',
                      },
                      hoverCss     : {
                        color          : 'rgba(255,255,255,1)',
                        backgroundColor: 'rgba(100,100,100,1)',
                      },
                      groupHoverCss: {},
                    },
                  },
                  className: 'skCl',
                },
              },
              {
                info: {
                  sysLock  : true,
                  name     : 'module-an',
                  cName    : '按钮',
                  lock     : {},
                  static   : {
                    text   : '按钮',
                    link   : '',
                    icon   : '',
                    d__text: '',
                    d__link: '',
                    d__icon: '',
                    order  : 0,
                  },
                  cssObj   : {
                    self : {
                      class   : '',
                      css     : {
                        width       : '70px',
                        height      : '100%',
                        marginTop   : '0px',
                        marginRight : '5px',
                        marginBottom: '0px',
                        marginLeft  : '5px',
                      },
                      hoverCss: {},
                    },
                    inner: {
                      class        : '.inner',
                      css          : {
                        border      : '1px solid rgba(74,79,95,1)',
                        color       : 'rgba(71,77,90,1)',
                        transition  : 'all 0.1s 0s ease',
                        borderRadius: '35px',
                      },
                      hoverCss     : {
                        color          : 'rgba(255,255,255,1)',
                        backgroundColor: 'rgba(100,100,100,1)',
                      },
                      groupHoverCss: {},
                    },
                  },
                  className: 'zHqh',
                },
              },
              {
                info: {
                  sysLock  : true,
                  name     : 'module-an',
                  cName    : '按钮',
                  lock     : {},
                  static   : {
                    text   : '按钮',
                    link   : '',
                    icon   : '',
                    d__text: '',
                    d__link: '',
                    d__icon: '',
                    order  : 0,
                  },
                  cssObj   : {
                    self : {
                      class   : '',
                      css     : {
                        width       : '50px',
                        height      : '100%',
                        marginTop   : '0px',
                        marginRight : '5px',
                        marginBottom: '0px',
                        marginLeft  : '5px',
                      },
                      hoverCss: {},
                    },
                    inner: {
                      class        : '.inner',
                      css          : {
                        border      : '1px solid rgba(74,79,95,1)',
                        color       : 'rgba(71,77,90,1)',
                        transition  : 'all 0.1s 0s ease',
                        borderRadius: '35px',
                      },
                      hoverCss     : {
                        color          : 'rgba(255,255,255,1)',
                        backgroundColor: 'rgba(100,100,100,1)',
                      },
                      groupHoverCss: {},
                    },
                  },
                  className: 'y2Dn',
                },
              },
            ],
          },
        ],
        tab     : [],
      },
    ],
    cssObj: null,
  }
}

export const createContentPageData = function () {
  return {
    config: [
      {
        info    : {
          name     : 'module-container',
          cName    : '容器',
          static   : {
            hasSafeLine: true,
            gridList   : [
              3,
              9,
            ],
          },
          lock     : {},
          cssObj   : {
            self     : {
              class: '',
              css  : {
                minHeight: '686px',
              },
            },
            container: {
              class: '.container',
              css  : {},
            },
          },
          className: 'IPi',
          moduleCss: '2',
        },
        children: [
          {
            info    : {
              name     : 'module-menu',
              cName    : '菜单',
              sequence : 0,
              lock     : {},
              static   : {
                class    : 'vertical1',
                type     : 'sub',
                isShowSub: true,
              },
              cssObj   : {
                self : {
                  class: '',
                  css  : {
                    left  : '0%',
                    top   : '17px',
                    width : '80%',
                    height: '290px',
                  },
                },
                inner: {
                  class        : '.inner-menu',
                  hoverCss     : {},
                  groupHoverCss: {},
                  css          : {},
                },
              },
              className: '9AuY',
            },
            children: [
              {
                info: {
                  name     : 'module-an',
                  cName    : '按钮',
                  lock     : {
                    d: true,
                    r: true,
                  },
                  static   : {
                    link   : '',
                    icon   : '',
                    text   : '一级菜单',
                    d__link: '',
                    d__icon: '',
                    d__text: '',
                    order  : 0,
                  },
                  cssObj   : {
                    self : {
                      class   : '',
                      css     : {
                        width : '100%',
                        height: '55px',
                        left  : '0%',
                      },
                      hoverCss: {},
                    },
                    inner: {
                      class        : '.inner',
                      css          : {
                        backgroundColor: 'rgba(120,141,162,1)',
                        transition     : 'all 0.1s 0s ease',
                        fontWeight     : 'bold',
                        color          : 'rgba(255,255,255,1)',
                      },
                      hoverCss     : {},
                      groupHoverCss: {},
                    },
                  },
                  className: 'beLO',
                },
              },
              {
                info: {
                  name     : 'module-an',
                  cName    : '按钮',
                  lock     : {
                    d: true,
                    r: true,
                  },
                  static   : {
                    text   : '二级菜单',
                    link   : '',
                    icon   : '',
                    d__text: '',
                    d__link: '',
                    d__icon: '',
                    order  : 0,
                  },
                  cssObj   : {
                    self : {
                      class   : '',
                      css     : {
                        width : '100%',
                        height: '55px',
                      },
                      hoverCss: {},
                    },
                    inner: {
                      class        : '.inner',
                      css          : {
                        color       : 'rgba(80,80,80,1)',
                        borderTop   : '0px solid rgba(0,0,0,1)',
                        borderRight : '0px solid rgba(0,0,0,1)',
                        borderBottom: '0px dashed rgba(220,220,220,1)',
                        borderLeft  : '0px solid rgba(0,0,0,1)',
                        transition  : 'all 0.1s 0s ease',
                        boxShadow   : '0px 5px 15px -10px rgba(0,0,0,.5)',
                      },
                      hoverCss     : {
                        backgroundColor: 'rgba(223,224,227,1)',
                      },
                      groupHoverCss: {},
                    },
                  },
                  className: 'zlQT',
                },
              },
              {
                info: {
                  name     : 'module-an',
                  cName    : '按钮',
                  lock     : {
                    d: true,
                    r: true,
                  },
                  static   : {
                    text   : '三级菜单',
                    link   : '',
                    icon   : '',
                    d__text: '',
                    d__link: '',
                    d__icon: '',
                    order  : 0,
                  },
                  cssObj   : {
                    self : {
                      class   : '',
                      css     : {
                        width : '100%',
                        height: '40px',
                      },
                      hoverCss: {},
                    },
                    inner: {
                      class        : '.inner',
                      css          : {
                        color       : 'rgba(80,80,80,1)',
                        borderTop   : '0px solid rgba(0,0,0,1)',
                        borderRight : '0px solid rgba(0,0,0,1)',
                        borderBottom: '1px solid rgba(220,220,220,1)',
                        borderLeft  : '0px solid rgba(0,0,0,1)',
                        transition  : 'all 0.1s 0s ease',
                      },
                      hoverCss     : {
                        backgroundColor: 'rgba(223,224,227,1)',
                      },
                      groupHoverCss: {},
                    },
                  },
                  className: '8geC',
                },
              },
            ],
          },
          {
            info: {
              name     : 'module-an',
              cName    : '按钮',
              static   : {
                text   : '按钮',
                link   : '',
                icon   : '',
                d__text: 'title',
                d__link: 'link__lBTC',
                d__icon: 'icon__lBTC',
                order  : 0,
                script : '',
              },
              cssObj   : {
                self : {
                  class: '',
                  css  : {
                    width : '100%',
                    height: '50px',
                    left  : '0%',
                    top   : '30px',
                  },
                },
                inner: {
                  class        : '.inner',
                  hoverCss     : {},
                  groupHoverCss: {},
                  css          : {
                    fontSize  : '20px',
                    fontWeight: 'bold',
                  },
                },
              },
              lock     : {},
              className: 'lBTC',
              moduleCss: '1',
              sequence : 1,
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
                d__text: 'author',
                d__link: 'link__E5XI',
                d__icon: 'icon__E5XI',
                order  : 0,
                script : '',
              },
              cssObj   : {
                self : {
                  class: '',
                  css  : {
                    width : '16.660%',
                    height: '36px',
                    left  : '24.278%',
                    top   : '95px',
                  },
                },
                inner: {
                  class        : '.inner',
                  hoverCss     : {},
                  groupHoverCss: {},
                  css          : {
                    color   : 'rgba(151,151,151,1)',
                    fontSize: '12px',
                  },
                },
              },
              lock     : {},
              className: 'E5XI',
              moduleCss: '1',
              sequence : 1,
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
                d__text: 'source',
                d__link: 'link__sMLC',
                d__icon: 'icon__sMLC',
                order  : 0,
                script : '',
              },
              cssObj   : {
                self : {
                  class: '',
                  css  : {
                    width : '16.660%',
                    height: '36px',
                    left  : '41.389%',
                    top   : '95px',
                  },
                },
                inner: {
                  class        : '.inner',
                  hoverCss     : {},
                  groupHoverCss: {},
                  css          : {
                    color   : 'rgba(151,151,151,1)',
                    fontSize: '12px',
                  },
                },
              },
              lock     : {},
              className: 'sMLC',
              moduleCss: '1',
              sequence : 1,
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
                d__text: 'updated_at',
                d__link: 'link__v5m2',
                d__icon: 'icon__v5m2',
                order  : 0,
                script : '',
              },
              cssObj   : {
                self : {
                  class: '',
                  css  : {
                    width : '16.660%',
                    height: '36px',
                    left  : '58.500%',
                    top   : '95px',
                  },
                },
                inner: {
                  class        : '.inner',
                  hoverCss     : {},
                  groupHoverCss: {},
                  css          : {
                    color   : 'rgba(151,151,151,1)',
                    fontSize: '12px',
                  },
                },
              },
              lock     : {},
              className: 'v5m2',
              moduleCss: '1',
              sequence : 1,
            },
          },
          {
            info: {
              name     : 'module-an',
              cName    : '按钮',
              static   : {
                link       : '',
                icon       : '',
                d__link    : 'link__uSUZ',
                d__icon    : 'icon__uSUZ',
                order      : 0,
                script     : '',
                textarea   : '',
                d__textarea: 'description',
                rows       : 4,
              },
              cssObj   : {
                self : {
                  class: '',
                  css  : {
                    width : '100.000%',
                    height: '123px',
                    left  : '0.056%',
                    top   : '146.000px',
                  },
                },
                inner: {
                  class        : '.inner',
                  hoverCss     : {},
                  groupHoverCss: {},
                  css          : {
                    alignItems   : 'center',
                    boxShadow    : 'inset 0px 0px 40px 0px rgba(0,0,0,0.12)',
                    paddingTop   : '10px',
                    paddingRight : '30px',
                    paddingBottom: '10px',
                    paddingLeft  : '30px',
                  },
                },
              },
              lock     : {},
              className: 'uSUZ',
              moduleCss: '1',
              sequence : 1,
            },
          },
          {
            info: {
              name     : 'module-tp',
              cName    : '图片',
              lock     : {},
              static   : {
                src    : 'usr/6QN4pQxWbP/5c21fef16bc2f.jpg',
                link   : '',
                d__src : 'image',
                d__link: '',
                script : '',
              },
              cssObj   : {
                self : {
                  class   : '',
                  css     : {
                    width : '100%',
                    height: '365px',
                    left  : '0%',
                    top   : '294px',
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
              className: '3ueg',
              moduleCss: '1',
              sequence : 1,
            },
          },
        ],
        tab     : [],
      },
      {
        info    : {
          name     : 'module-container',
          cName    : '容器',
          static   : {
            hasSafeLine: true,
            gridList   : [
              3,
              9,
            ],
          },
          lock     : {},
          cssObj   : {
            self     : {
              class: '',
              css  : {
                minHeight: '210px',
              },
            },
            container: {
              class: '.container',
              css  : {},
            },
          },
          className: '7KbV',
          moduleCss: '2',
        },
        children: [
          {
            info: {
              name     : 'module-html',
              cName    : '富文本',
              editable : false,
              lock     : {},
              static   : {
                html   : '<h2>这是一段富文本</h2>',
                link   : '',
                d__html: 'content',
                d__link: '',
              },
              cssObj   : {
                self : {
                  class   : '',
                  hoverCss: {},
                  css     : {
                    width   : '100%',
                    height  : '200px',
                    left    : '0%',
                    top     : '0%',
                    position: 'relative !important',
                  },
                },
                inner: {
                  class        : '.inner',
                  hoverCss     : {},
                  groupHoverCss: {},
                  css          : {
                    fontSize: '14px',
                  },
                },
              },
              className: 'pLy',
              moduleCss: '1',
              sequence : 1,
            },
          },
        ],
      },
    ],
    cssObj: null,
  }
}
