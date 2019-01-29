export default {
  info: {
    cssObj: {
      self: {
        css: {
          minHeight: '400px'
        }
      }
    },
    tplCssObj: {
      self: {
        css: {
          minHeight: '400px',
          marginTop: '-126px !important',
          marginBottom: '-126px !important'
        }
      }
    }
  },
  children: [
    {
      info: {
        cName: '列表',
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
              top: '120px',
              width: '100%',
              position: 'relative !important',
              marginBottom: '120px'

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
              width: '50%',
              padding: '35px'
            }
          },
          innerGroup: {
            class: '.inner-group',
            css: {
              height: '40px'
            },
            hoverCss: {}
          }
        },
        className: '1ce',
        name: 'module-list',
        static: {
          direction: 'multi-row',
          columnCount: 2,
          dataOrigin: 0,
          dataList: [
            {
              textarea__PqF: '请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充',
              link__PqF: '',
              icon__PqF: '',
              text__UGf: '01',
              link__UGf: '',
              icon__UGf: ''
            },
            {
              textarea__PqF: '请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充',
              link__PqF: '',
              icon__PqF: '',
              text__UGf: '01',
              link__UGf: '',
              icon__UGf: ''
            },
            {
              textarea__PqF: '请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充',
              link__PqF: '',
              icon__PqF: '',
              text__UGf: '01',
              link__UGf: '',
              icon__UGf: ''
            },
            {
              textarea__PqF: '请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充',
              link__PqF: '',
              icon__PqF: '',
              text__UGf: '01',
              link__UGf: '',
              icon__UGf: ''
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
        },
        tplCssObj: {
          self: {
            class: '',
            css: {
              width: '100%',
              height: '160px'
            }
          },
          inner: {
            class: '.inner-group',
            hoverCss: {},
            groupHoverCss: {}
          }
        }
      },
      children: [
        {
          info: {
            name: 'module-an',
            cName: '按钮',
            static: {
              link: '',
              icon: '',
              d__link: 'link__PqF',
              d__textarea: 'textarea__PqF',
              d__icon: 'icon__PqF',
              order: 0,
              script: '',
              textarea: '请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充',
              rows: 2
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  width: '80%',
                  height: '50px',
                  top: '5px',
                  left: '76px'
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(110,110,110,1)'
                }
              }
            },
            lock: {
              d: true,
              r: true
            },
            className: 'PqF',
            moduleCss: '2',
            sequence: 0
          }
        },
        {
          info: {
            name: 'module-an',
            cName: '按钮',
            static: {
              text: '01',
              link: '',
              icon: '',
              d__text: 'text__UGf',
              d__link: 'link__UGf',
              d__icon: 'icon__UGf',
              order: 0,
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '0px',
                  top: '0px',
                  width: '60px',
                  height: '60px'
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(255,255,255,1)',
                  fontWeight: 'normal',
                  fontSize: '29px',
                  backgroundColor: 'rgba(7,108,224,1)',
                  borderRadius: '50%'
                }
              }
            },
            lock: {
              d: true,
              r: true
            },
            className: 'UGf',
            moduleCss: '2',
            sequence: 0
          }
        }
      ]
    },
    {
      info: {
        cName: '分组',
        sequence: 0,
        lock: {
          d: true,
          r: true
        },
        cssObj: {
          self: {
            class: '',
            css: {
              width: '90%',
              height: '80px',
              top: '25px',
              left: '5%'
            }
          },
          inner: {
            class: '.inner-group',
            css: {},
            hoverCss: {}
          }
        },
        className: 'EOV',
        name: 'module-group'
      },
      children: [
        {
          info: {
            name: 'module-xz',
            cName: '形状',
            lock: {
              d: true,
              r: true
            },
            static: {
              svg: '<svg viewBox="0 0 400 400" preserveAspectRatio="ASPECTRATIO">\n            <defs>\n              <image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="0" y="0" width="100%" height="100%"/>\n              <path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M190 19.052v103h-186v-103h186z"></path>\n              <clipPath id="cp-CLASSNAME">\n                <use xlink:href="#path-CLASSNAME"/>\n              </clipPath>\n            </defs>\n            <use xlink:href="#WITCHONE-CLASSNAME" clip-path="url(#cp-CLASSNAME)" />\n\t\t\t\t\t</svg>',
              ratio: 0,
              witch: 0,
              src: '',
              link: '',
              d__src: 'src__3UK',
              d__link: 'link__3UK'
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  width: '60px',
                  height: '9px',
                  top: '75px',
                  left: 'calc(50% - 15px)'
                }
              },
              inner: {
                class: '.inner',
                css: {
                  fill: 'rgba(7,108,224,1)'
                },
                hoverCss: {},
                groupHoverCss: {}
              }
            },
            className: '3UK',
            moduleCss: '01',
            sequence: 0
          }
        },
        {
          info: {
            name: 'module-an',
            cName: '按钮',
            static: {
              text: '副标题',
              link: '',
              icon: '',
              d__text: 'text__UI6',
              d__link: 'link__UI6',
              d__icon: 'icon__UI6',
              order: 0,
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '5%',
                  top: '38px',
                  width: '90%',
                  height: '26px'
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(103,103,103,1)',
                  fontWeight: 'normal',
                  fontSize: '16px'
                }
              }
            },
            lock: {
              d: true,
              r: true
            },
            className: 'UI6',
            moduleCss: '2',
            sequence: 0
          }
        },
        {
          info: {
            name: 'module-an',
            cName: '按钮',
            static: {
              text: '第一行主标题',
              link: '',
              icon: '',
              d__text: 'text__Xwo',
              d__link: 'link__Xwo',
              d__icon: 'icon__Xwo',
              order: 0,
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  width: '90%',
                  height: '35px',
                  top: '0px',
                  left: '5%'
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(7,108,224,1)',
                  fontWeight: 'bold',
                  fontSize: '22px'
                }
              }
            },
            lock: {
              d: true,
              r: true
            },
            className: 'Xwo',
            moduleCss: '2',
            sequence: 0
          }
        }
      ]
    }],
  tab: []
}
