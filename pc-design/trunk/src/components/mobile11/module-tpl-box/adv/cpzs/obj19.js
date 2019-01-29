export default {
  info: {
    cssObj: {
      self: {
        css: {
          minHeight: '300px'
        }
      }
    },
    tplCssObj: {
      self: {
        css: {
          minHeight: '300px',
          marginTop: '-100px !important',
          marginBottom: '-100px !important'
        }
      }
    }
  },
  children: [
    {
      info: {
        name: 'module-list',
        cName: '列表',
        className: 'Bvv3',
        sequence: 0,
        lock: {
          d: true,
          r: true
        },
        cssObj: {
          self: {
            class: '',
            css: {
              left: '0px',
              top: '35px',
              width: '100%',
              position: 'relative !important',
              marginBottom: '35px'
            }
          },
          inner: {
            class: '.inner-group',
            css: {},
            hoverCss: {}
          },
          innerGap: {
            class: '.inner-gap',
            css: {
              width: '25%',
              padding: '12px'
            }
          },
          innerGroup: {
            class: '.inner-group',
            css: {
              height: '200px'
            },
            hoverCss: {}
          }
        },
        static: {
          direction: 'multi-row',
          columnCount: 4,
          dataOrigin: 0,
          dataList: [
            {
              text__gLSG: '请输入内容',
              link__gLSG: '',
              icon__gLSG: '',
              text__3fXv: '标题',
              link__3fXv: '',
              icon__3fXv: '',
              src__wEKp: 'usr/6QN4pQxWbP/5bebbfcf81a4f.jpg',
              link__wEKp: ''
            },
            {
              text__gLSG: '请输入内容',
              link__gLSG: '',
              icon__gLSG: '',
              text__3fXv: '标题',
              link__3fXv: '',
              icon__3fXv: '',
              src__wEKp: 'usr/6QN4pQxWbP/5bebbfcf81a4f.jpg',
              link__wEKp: ''
            },
            {
              text__gLSG: '请输入内容',
              link__gLSG: '',
              icon__gLSG: '',
              text__3fXv: '标题',
              link__3fXv: '',
              icon__3fXv: '',
              src__wEKp: 'usr/6QN4pQxWbP/5bebbfcf81a4f.jpg',
              link__wEKp: ''
            },
            {
              text__gLSG: '请输入内容',
              link__gLSG: '',
              icon__gLSG: '',
              text__3fXv: '标题',
              link__3fXv: '',
              icon__3fXv: '',
              src__wEKp: 'usr/6QN4pQxWbP/5bebbfcf81a4f.jpg',
              link__wEKp: ''
            }
          ],
          swiperInit: {
            autoplay: {
              delay: 2000
            },
            loop: false,
            speed: 400,
            slidesPerView: 1,
            effect: 'slide',
            wrapperClass: 'wrapper',
            slideClass: 'inner-gap',
            direction: 'horizontal',
            allowTouchMove: false,
            observer: true,
            observeParents: true
          }
        }
      },
      children: [
        {
          info: {
            name: 'module-an',
            cName: '按钮',
            static: {
              text: '请输入内容',
              link: '',
              icon: '',
              d__text: 'text__gLSG',
              d__link: 'link__gLSG',
              d__icon: 'icon__gLSG',
              order: 0,
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '15%',
                  top: '85px',
                  width: '70%',
                  height: '48px',
                  zIndex: 3
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(255,255,255,1)',
                  border: '1px solid rgba(255,255,255,1)',
                  fontSize: '16px'
                }
              }
            },
            lock: {
              d: true,
              r: true
            },
            className: 'gLSG',
            moduleCss: '1',
            sequence: 0
          }
        },
        {
          info: {
            name: 'module-an',
            cName: '按钮',
            static: {
              text: '标题',
              link: '',
              icon: '',
              d__text: 'text__3fXv',
              d__link: 'link__3fXv',
              d__icon: 'icon__3fXv',
              order: 0,
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '0%',
                  top: '35px',
                  width: '100%',
                  height: '50px',
                  zIndex: 3
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(255,255,255,1)',
                  fontSize: '24px'
                }
              }
            },
            lock: {
              d: true,
              r: true
            },
            className: '3fXv',
            moduleCss: '1',
            sequence: 0
          }
        },
        {
          info: {
            name: 'module-tp',
            cName: '图片',
            lock: {
              d: true,
              r: true
            },
            static: {
              src: 'usr/6QN4pQxWbP/5bebbfcf81a4f.jpg',
              link: '',
              d__src: 'src__wEKp',
              d__link: 'link__wEKp',
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '0%',
                  top: '0px',
                  width: '100%',
                  height: '200px'
                },
                hoverCss: {}
              },
              inner: {
                class: [
                  '.inner',
                  '.inner:before',
                  '.inner img'
                ],
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  transition: 'all 0.2s 0s ease'
                }
              }
            },
            className: 'wEKp',
            moduleCss: '1',
            sequence: 0
          }
        }
      ]
    }
  ],
  tab: []
}
