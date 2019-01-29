export default {
  info    : {
    cssObj   : {
      self : {
        css  : {
          width : '306px',
          height: '100px',
        },
        class: '',
      },
      inner: {
        css     : {
          backgroundColor: 'rgba(249,249,249,1)',
        },
        class   : '.inner-group',
        hoverCss: {},
      },
    },
    tplCssObj: {
      self: {
        class: '',
        css  : {
          width : '100%',
          height: '100px',
        },
      },
    },

  },
  children: [
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
          textarea   : '单击此处在右侧输入标题,或链接到数据库数据',
          script     : '',
        },
        cssObj: {
          self : {
            class        : '',
            css          : {
              top   : 'calc(7% + 45px)',
              left  : '38%',
              width : '60%',
              height: '38%',
            },
            groupHoverCss: {},
          },
          inner: {
            class        : '.inner',
            css          : {
              color         : 'rgba(133,133,133,1)',
              fontSize      : '13px',
              justifyContent: 'flex-start',
            },
            hoverCss     : {},
            groupHoverCss: {},
          },
        },
      },
    },
    {
      info: {
        name    : 'module-an',
        cName   : '按钮',
        sequence: 0,
        lock    : {
          d: true,
          r: true,
        },
        static  : {
          text   : '作者：张三',
          icon   : '',
          link   : '',
          d__text: '',
          d__icon: '',
          d__link: '',
          order  : 0,
          script : '',
        },
        cssObj  : {
          self : {
            class: '',
            css  : {
              top   : 'calc(7% + 30px)',
              left  : '38%',
              width : '50%',
              height: '11.5%',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              color         : 'rgba(162,35,10,1)',
              fontSize      : '12px',
              justifyContent: 'flex-start',
            },
            hoverCss     : {},
            groupHoverCss: {},
          },
        },
      },
    },
    {
      info: {
        name    : 'module-an',
        cName   : '按钮',
        sequence: 0,
        lock    : {
          d: true,
          r: true,
        },
        static  : {
          text   : '点击此处在右侧输入新闻标题',
          icon   : '',
          link   : '',
          d__text: '',
          d__icon: '',
          d__link: '',
          order  : 0,
          script : '',
        },
        cssObj  : {
          self : {
            class: '',
            css  : {
              top   : '7%',
              left  : '38%',
              width : '60%',
              height: '30px',
            },
          },
          inner: {
            class        : '.inner',
            css          : {
              color         : 'rgba(51,51,51,1)',
              fontSize      : '16px',
              justifyContent: 'flex-start',
            },
            hoverCss     : {},
            groupHoverCss: {},
          },
        },
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
        cssObj   : {
          self : {
            css     : {
              top   : '8%',
              left  : '4%',
              width : '30%',
              height: '84%',
            },
            class   : '',
            hoverCss: {},
          },
          inner: {
            css          : {
              borderRadius: '50%',
            },
            class        : [
              '.inner',
              '.inner:before',
              '.inner img',
            ],
            hoverCss     : {},
            groupHoverCss: {},
          },
        },
        static   : {
          src    : 'usr/g5O46p2bRB/5bc45046360d8.jpg',
          link   : '',
          d__src : '',
          d__link: '',
          script : '',
        },
        moduleCss: '5',
      },
    },

  ],
}
