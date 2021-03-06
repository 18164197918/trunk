export default {
  info: {
    static: {
      gridList: [12]
    },
    cssObj: {
      self: {
        css: {
          minHeight: '460px',
          backgroundColor: 'rgba(246,246,246,1)'
        }
      }
    }
  },
  children: [
    {
      info: {
        name: 'module-list',
        cName: '列表',
        className: 'ufl',
        sequence: 0,
        lock: {},
        cssObj: {
          self: {
            class: '',
            css: {
              left: '0px',
              top: '10px',
              width: '100%',
              position: 'relative !important',
              marginBottom: '10px'
            }
          },
          inner: {
            class: '.inner-group',
            css: {
              backgroundColor: 'rgba(255,255,255,1)'
            },
            hoverCss: {}
          },
          innerGap: {
            class: '.inner-gap',
            css: {
              width: '50%',
              padding: '8px'
            }
          },
          innerGroup: {
            class: '.inner-group',
            css: {
              height: '203px'
            },
            hoverCss: {}
          }
        },
        static: {
          direction: 'multi-row',
          columnCount: 2,
          dataOrigin: 0,
          dataList: [
            {
              text__YZg: '案例介绍主标题',
              link__YZg: '',
              icon__YZg: '',
              src__FmB: 'usr/6QN4pQxWbP/5c18528e02800.jpg',
              link__FmB: '',
              text__7un: '请输入要描述的内容',
              link__7un: '',
              icon__7un: '',
              textarea__aU0: '请输入要描述的内容请输入要描述的内容请输入要描述的内容请输入要描述的内容请输入要描述的内容',
              link__aU0: '',
              icon__aU0: ''
            },
            {
              text__YZg: '案例介绍主标题',
              link__YZg: '',
              icon__YZg: '',
              src__FmB: 'usr/6QN4pQxWbP/5c18528e02800.jpg',
              link__FmB: '',
              text__7un: '请输入要描述的内容',
              link__7un: '',
              icon__7un: '',
              textarea__aU0: '请输入要描述的内容请输入要描述的内容请输入要描述的内容请输入要描述的内容请输入要描述的内容',
              link__aU0: '',
              icon__aU0: ''
            },
            {
              text__YZg: '案例介绍主标题',
              link__YZg: '',
              icon__YZg: '',
              src__FmB: 'usr/6QN4pQxWbP/5c18528e02800.jpg',
              link__FmB: '',
              text__7un: '请输入要描述的内容',
              link__7un: '',
              icon__7un: '',
              textarea__aU0: '请输入要描述的内容请输入要描述的内容请输入要描述的内容请输入要描述的内容请输入要描述的内容',
              link__aU0: '',
              icon__aU0: ''
            },
            {
              text__YZg: '案例介绍主标题',
              link__YZg: '',
              icon__YZg: '',
              src__FmB: 'usr/6QN4pQxWbP/5c18528e02800.jpg',
              link__FmB: '',
              text__7un: '请输入要描述的内容',
              link__7un: '',
              icon__7un: '',
              textarea__aU0: '请输入要描述的内容请输入要描述的内容请输入要描述的内容请输入要描述的内容请输入要描述的内容',
              link__aU0: '',
              icon__aU0: ''
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
              text: '案例介绍主标题',
              link: '',
              icon: '',
              d__text: 'text__YZg',
              d__link: 'link__YZg',
              d__icon: 'icon__YZg',
              order: 0,
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '55%',
                  top: '10px',
                  width: '40%',
                  height: '52px'
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(38,38,38,1)',
                  textAlign: 'left',
                  justifyContent: 'flex-start',
                  fontSize: '15px',
                  borderTop: '0px solid rgba(0,0,0,1)',
                  borderRight: '0px solid rgba(0,0,0,1)',
                  borderBottom: '1px solid rgba(235,235,235,1)',
                  borderLeft: '0px solid rgba(0,0,0,1)'
                }
              }
            },
            lock: {},
            className: 'YZg',
            moduleCss: '1',
            sequence: 0
          }
        },
        {
          info: {
            name: 'module-tp',
            cName: '图片',
            lock: {},
            static: {
              src: 'usr/6QN4pQxWbP/5c18528e02800.jpg',
              link: '',
              d__src: 'src__FmB',
              d__link: 'link__FmB',
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '0px',
                  top: '0px',
                  width: '48%',
                  height: '203px'
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
            className: 'FmB',
            moduleCss: '1',
            sequence: 0
          }
        },
        {
          info: {
            name: 'module-an',
            cName: '按钮',
            static: {
              text: '请输入要描述的内容',
              link: '',
              icon: '',
              d__text: 'text__7un',
              d__link: 'link__7un',
              d__icon: 'icon__7un',
              order: 0,
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '55%',
                  top: '92px',
                  width: '45%',
                  height: '32px'
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(110,110,110,1)',
                  textAlign: 'left',
                  justifyContent: 'flex-start'
                }
              }
            },
            lock: {},
            className: '7un',
            moduleCss: '1',
            sequence: 0
          }
        },
        {
          info: {
            name: 'module-an',
            cName: '按钮',
            static: {
              link: '',
              icon: '',
              d__link: 'link__aU0',
              d__icon: 'icon__aU0',
              order: 0,
              script: '',
              textarea: '请输入要描述的内容请输入要描述的内容请输入要描述的内容请输入要描述的内容请输入要描述的内容',
              d__textarea: 'textarea__aU0',
              rows: 2
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '55%',
                  top: '125px',
                  width: '40%',
                  height: '51px'
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(150,150,150,1)',
                  textAlign: 'left',
                  justifyContent: 'flex-start',
                  fontSize: '12px',
                  lineHeight: '2'
                }
              }
            },
            lock: {},
            className: 'aU0',
            moduleCss: '1',
            sequence: 0
          }
        }
      ]
    }
  ],
  tab: []
}
