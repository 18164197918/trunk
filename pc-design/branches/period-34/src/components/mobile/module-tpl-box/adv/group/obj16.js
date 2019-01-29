export default {
  info: {
    cssObj: {
      inner: {
        css: {},
        hoverCss: {}
      },
      self: {
        class: '',
        css: {
          width: '25%',
          height: '140px'
        }
      }
    },
    tplCssObj: {
      self: {
        class: '',
        css: {
          width: 'calc(50% - 20px)',
          height: '140px'
        }
      }
    }

  },
  children: [
    {
      info: {
        name: 'module-tp',
        cName: '图片',
        lock: {
          d: true,
          r: true
        },
        sequence: 0,
        static: {
          src: 'usr/6QN4pQxWbP/5bed49f67f868.jpg',
          link: '',
          d__src: '',
          d__link: '',
          script: ''
        },
        cssObj: {
          self: {
            class: '',
            css: {
              width: '100%',
              height: '100%',
              left: '0px',
              top: '0px'
            },
            groupHoverCss: {}
          },
          inner: {
            class: ['.inner', '.inner:before', '.inner img'],
            css: {
              transition: 'all 0.2s 0s ease'
            },
            hoverCss: {},
            groupHoverCss: {}
          }
        }
      }
    },
    {
      info: {
        name: 'module-an',
        cName: '按钮',
        lock: {
          d: true,
          r: true
        },
        static: {
          text: '关于我',
          icon: '',
          link: '',
          d__text: '',
          d__icon: '',
          d__link: '',
          order: 0,
          script: ''
        },
        cssObj: {
          self: {
            class: '',
            css: {
              height: '32px',
              left: '10%',
              top: 'calc(100% - 32px)',
              width: '80%',
              transition: 'all 0.2s 0s ease'
            },
            groupHoverCss: {}
          },
          inner: {
            class: '.inner',
            css: {
              backgroundColor: 'rgba(255,52,77,0)',
              color: 'rgba(255,255,255,1)',
              fontFamily: '微软雅黑',
              fontSize: '14px',
              fontWeight: 'normal',
              transition: 'all 0.2s 0s ease'
            },
            hoverCss: {},
            groupHoverCss: {}
          }
        }
      }
    },
    {
      info: {
        name: 'module-an',
        cName: '按钮',
        lock: {
          d: true,
          r: true
        },
        static: {
          d__icon: '',
          d__link: '',
          d__textarea: '',
          icon: '',
          link: '',
          order: 0,
          rows: 3,
          textarea: '我曾有缘，在黄昏的江船上仰望过白帝城，顶着浓冽的秋霜登临过黄鹤楼，还在一个冬夜摸到了寒山寺。',
          script: ''
        },
        cssObj: {
          self: {
            class: '',
            css: {
              height: '0px',
              left: '10%',
              top: '100%',
              width: '80%',
              overflow: 'hidden',
              opacity: '0',
              transition: 'all 0.2s 0s ease'
            },
            groupHoverCss: {}
          },
          inner: {
            class: '.inner',
            css: {
              color: 'rgba(255,255,255,1)',
              fontSize: '12px'
            },
            hoverCss: {},
            groupHoverCss: {}
          }
        }
      }
    }

  ]
}
