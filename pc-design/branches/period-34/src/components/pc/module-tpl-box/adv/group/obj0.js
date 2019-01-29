export default {
  info    : {
    name     : 'module-group',
    cName    : '分组',
    className: 'dsoW',
    sequence : 0,
    lock     : {},
    cssObj   : {
      self : {
        class: '',
        css  : {
          left  : '0px',
          top   : '30px',
          width : '100%',
          height: '105px',
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
          link       : '',
          icon       : '',
          d__link    : 'link__piqx',
          d__icon    : 'icon__piqx',
          d__textarea: 'textarea__piqx',
          order      : 0,
          script     : '',
          textarea   : '请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充',
          rows       : 2,
        },
        cssObj   : {
          self : {
            class: '',
            css  : {
              left  : '0px',
              top   : '56px',
              width : '100%',
              height: '50px',
            },
          },
          inner: {
            class        : '.inner',
            hoverCss     : {},
            groupHoverCss: {},
            css          : {
              color         : 'rgba(133,133,133,1)',
              fontSize      : '14px',
              textAlign     : 'center',
              justifyContent: 'center',
              paddingBottom : '0px',
              paddingLeft   : '18px',
              paddingRight  : '18px',
              paddingTop    : '0px',
            },
          },
        },
        lock     : {
          d: true,
          r: true,
        },
        className: 'piqx',
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
          d__text: 'text__yxBx',
          d__link: 'link__yxBx',
          d__icon: 'icon__yxBx',
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
              height: '44px',
            },
          },
          inner: {
            class        : '.inner',
            hoverCss     : {},
            groupHoverCss: {},
            css          : {
              color   : 'rgba(34,34,34,1)',
              fontSize: '26px',
            },
          },
        },
        lock     : {},
        className: 'yxBx',
        moduleCss: '2',
        sequence : 0,
      },
    },
  ],
}
