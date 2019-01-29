export default {
  info: {
    static: {
      type: 'main'
    },
    cssObj: {
      self: {
        class: '',
        css: {
          width: '100%'
        }
      },

      inner: {
        class: '.inner-menu',
        css: {
          borderTop: '1px solid rgba(255,255,255,1)',
          borderRight: '1px solid rgba(255,255,255,1)',
          borderBottom: '1px solid rgba(255,255,255,1)',
          borderLeft: '1px solid rgba(100,100,100,1)'
        },
        hoverCss: {}
      }
    }
  },
  children: [
    {
      info: {
        sysLock: true,
        name: 'module-an',
        cName: '按钮',
        lock: {},
        static: {
          text: '一级菜单',
          link: '',
          icon: '',
          d__text: '',
          d__link: '',
          d__icon: '',
          order: 0,
          script: ''
        },
        cssObj: {
          self: {
            class: '',
            css: {
              width: '100%',
              height: '30px',
              left: '0px',
              right: '0px'
            }
          },
          inner: {
            class: '.inner',
            css: {
              backgroundColor: 'rgba(255,255,255,1)',
              color: 'rgba(124,124,124,1)',
              borderTop: '0px solid rgba(100,100,100,1)',
              borderRight: '1px solid rgba(100,100,100,1)',
              borderBottom: '0px solid rgba(100,100,100,1)',
              borderLeft: '0px solid rgba(100,100,100,1)',
              padding: '10px'
            },
            hoverCss: {},
            groupHoverCss: {}
          }
        },
        className: 'YMm'
      }
    },
    {
      info: {
        sysLock: true,
        name: 'module-an',
        cName: '按钮',
        lock: {},
        static: {
          text: '二级菜单',
          link: '',
          icon: '',
          d__text: '',
          d__link: '',
          d__icon: '',
          order: 0,
          script: ''
        },
        cssObj: {
          self: {
            class: '',
            css: {
              width: '100%',
              height: '32px'
            }
          },
          inner: {
            class: '.inner',
            css: {
              color: 'rgba(80,80,80,1)',
              boxShadow: '1px 1px 1px 1px rgba(131,131,131,0.5)',
              transform: 'translate3d(0px,2px,0px)',
              backgroundColor: 'rgba(255,255,255,1)',
              padding: '10px'
            },
            hoverCss: {},
            groupHoverCss: {}
          }
        },
        className: '4UE'
      }
    },
    {
      info: {
        sysLock: true,
        name: 'module-an',
        cName: '按钮',
        lock: {},
        static: {
          text: '二级菜单',
          link: '',
          icon: '',
          d__text: '',
          d__link: '',
          d__icon: '',
          order: 0,
          script: ''
        },
        cssObj: {
          self: {
            class: '',
            css: {
              width: '100%',
              height: '40px'
            }
          },
          inner: {
            class: '.inner',
            css: {
              backgroundColor: 'rgba(255,255,255,1)',
              color: 'rgba(51,51,51,1)',
              padding: '10px'
            },
            hoverCss: {},
            groupHoverCss: {}
          }
        },
        className: 'iIN'
      }
    }

  ]
}
