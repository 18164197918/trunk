export default {
  info: {
    cssObj: {
      self: {
        css: {
          minHeight: '350px'
        }
      }
    },
    tplCssObj: {
      self: {
        css: {
          minHeight: '350px',
          marginTop: '-120px !important',
          marginBottom: '-120px !important'
        }
      }
    }
  },
  children: [
    {
      info: {
        name: 'module-list',
        cName: '列表',
        className: 'lcRc',
        sequence: 0,
        lock: {
          d: true,
          r: true
        },
        cssObj: {
          self: {
            class: '',
            css: {
              left: '5%',
              top: '40px',
              width: '90%',
              position: 'relative !important',
              marginBottom: '40px'
            }
          },
          inner: {
            class: '.inner-group',
            css: {
              border: '1px solid rgba(229,229,229,1)'
            },
            hoverCss: {}
          },
          innerGap: {
            class: '.inner-gap',
            css: {
              width: '25%',
              padding: '5px'
            }
          },
          innerGroup: {
            class: '.inner-group',
            css: {
              height: '260px'
            },
            hoverCss: {}
          }
        },
        static: {
          direction: 'single-row',
          columnCount: 4,
          dataOrigin: 0,
          dataList: [
            {
              src__kLTT: 'usr/6QN4pQxWbP/5bee82253e9b2.jpg',
              link__kLTT: '',
              text__5Mud: '主标题',
              link__5Mud: '',
              icon__5Mud: '',
              text__EntG: '请输入要描述的内容',
              link__EntG: '',
              icon__EntG: '',
              text__bsr0: '按钮',
              link__bsr0: '',
              icon__bsr0: ''
            },
            {
              src__kLTT: 'usr/6QN4pQxWbP/5bee82253e9b2.jpg',
              link__kLTT: '',
              text__5Mud: '主标题',
              link__5Mud: '',
              icon__5Mud: '',
              text__EntG: '请输入要描述的内容',
              link__EntG: '',
              icon__EntG: '',
              text__bsr0: '按钮',
              link__bsr0: '',
              icon__bsr0: ''
            },
            {
              src__kLTT: 'usr/6QN4pQxWbP/5bee82253e9b2.jpg',
              link__kLTT: '',
              text__5Mud: '主标题',
              link__5Mud: '',
              icon__5Mud: '',
              text__EntG: '请输入要描述的内容',
              link__EntG: '',
              icon__EntG: '',
              text__bsr0: '按钮',
              link__bsr0: '',
              icon__bsr0: ''
            },
            {
              src__kLTT: 'usr/6QN4pQxWbP/5bee82253e9b2.jpg',
              link__kLTT: '',
              text__5Mud: '主标题',
              link__5Mud: '',
              icon__5Mud: '',
              text__EntG: '请输入要描述的内容',
              link__EntG: '',
              icon__EntG: '',
              text__bsr0: '按钮',
              link__bsr0: '',
              icon__bsr0: ''
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
            name: 'module-tp',
            cName: '图片',
            lock: {
              d: true,
              r: true
            },
            static: {
              src: 'usr/6QN4pQxWbP/5bee82253e9b2.jpg',
              link: '',
              d__src: 'src__kLTT',
              d__link: 'link__kLTT',
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '28%',
                  top: '35px',
                  width: '40%',
                  height: '80px'
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
            className: 'kLTT',
            moduleCss: '1',
            sequence: 0
          }
        },
        {
          info: {
            name: 'module-an',
            cName: '按钮',
            static: {
              text: '主标题',
              link: '',
              icon: '',
              d__text: 'text__5Mud',
              d__link: 'link__5Mud',
              d__icon: 'icon__5Mud',
              order: 0,
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '0.000%',
                  top: '125px',
                  width: '100.000%',
                  height: '30px'
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(51,51,51,1)',
                  fontSize: '20px'
                }
              }
            },
            lock: {
              d: true,
              r: true
            },
            className: '5Mud',
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
              d__text: 'text__EntG',
              d__link: 'link__EntG',
              d__icon: 'icon__EntG',
              order: 0,
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '0.000%',
                  top: '156px',
                  width: '100.000%',
                  height: '24px'
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(102,102,102,1)',
                  fontSize: '12px'
                }
              }
            },
            lock: {
              d: true,
              r: true
            },
            className: 'EntG',
            moduleCss: '1',
            sequence: 0
          }
        },
        {
          info: {
            name: 'module-an',
            cName: '按钮',
            static: {
              text: '按钮',
              link: '',
              icon: '',
              d__text: 'text__bsr0',
              d__link: 'link__bsr0',
              d__icon: 'icon__bsr0',
              order: 0,
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '25.000%',
                  top: '190px',
                  width: '50%',
                  height: '35px'
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(255,255,255,1)',
                  backgroundColor: 'rgba(0,0,0,1)',
                  borderRadius: '5px'
                }
              }
            },
            lock: {
              d: true,
              r: true
            },
            className: 'bsr0',
            moduleCss: '3',
            sequence: 0
          }
        }
      ]
    }
  ],
  tab: []
}
