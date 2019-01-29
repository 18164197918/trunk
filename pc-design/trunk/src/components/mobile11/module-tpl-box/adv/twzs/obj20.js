export default {
  info: {
    cssObj: {
      self: {
        css: {
          minHeight: '290px'
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
              top: '0%',
              width: '100%',
              position: 'relative !important',
              marginBottom: '0px'
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
              padding: '32px'
            }
          },
          innerGroup: {
            class: '.inner-group',
            css: {
              height: '224px'
            },
            hoverCss: {}
          }
        },
        className: '1xt2',
        name: 'module-list',
        static: {
          direction: 'multi-row',
          columnCount: 4,
          dataOrigin: 0,
          dataList: [
            {
              textarea__CFuf: '请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充',
              link__CFuf: '',
              icon__CFuf: '',
              text__bmEt: '第一行主标题',
              link__bmEt: '',
              icon__bmEt: '',
              text__EUom: '',
              link__EUom: '',
              icon__EUom: ''
            },
            {
              textarea__CFuf: '请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充',
              link__CFuf: '',
              icon__CFuf: '',
              text__bmEt: '第一行主标题',
              link__bmEt: '',
              icon__bmEt: '',
              text__EUom: '',
              link__EUom: '',
              icon__EUom: ''
            },
            {
              textarea__CFuf: '请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充',
              link__CFuf: '',
              icon__CFuf: '',
              text__bmEt: '第一行主标题',
              link__bmEt: '',
              icon__bmEt: '',
              text__EUom: '',
              link__EUom: '',
              icon__EUom: ''
            },
            {
              textarea__CFuf: '请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充',
              link__CFuf: '',
              icon__CFuf: '',
              text__bmEt: '第一行主标题',
              link__bmEt: '',
              icon__bmEt: '',
              text__EUom: '',
              link__EUom: '',
              icon__EUom: ''
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
              link: '',
              icon: '',
              d__link: 'link__CFuf',
              d__textarea: 'textarea__CFuf',
              d__icon: 'icon__CFuf',
              order: 0,
              script: '',
              textarea: '请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充请输入要描述的内容进行内容补充',
              rows: 2
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '0px',
                  top: '175px',
                  width: '100%',
                  height: '57px'
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(136,136,136,1)',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  textAlign: 'center',
                  justifyContent: 'center',
                  lineHeight: '2'
                }
              }
            },
            lock: {
              d: true,
              r: true
            },
            className: 'CFuf',
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
              d__text: 'text__bmEt',
              d__link: 'link__bmEt',
              d__icon: 'icon__bmEt',
              order: 0,
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: '0px',
                  top: '136px',
                  width: '100%',
                  height: '32px'
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(29,29,29,1)',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  textAlign: 'center',
                  justifyContent: 'center'
                }
              }
            },
            lock: {
              d: true,
              r: true
            },
            className: 'bmEt',
            moduleCss: '2',
            sequence: 0
          }
        },
        {
          info: {
            name: 'module-an',
            cName: '按钮',
            static: {
              text: '',
              link: '',
              icon: 'icl-android-fill',
              d__text: 'text__EUom',
              d__link: 'link__EUom',
              d__icon: 'icon__EUom',
              order: 0,
              script: ''
            },
            cssObj: {
              self: {
                class: '',
                css: {
                  left: 'calc(50% - 54px)',
                  top: '0px',
                  width: '108px',
                  height: '108px'
                }
              },
              inner: {
                class: '.inner',
                hoverCss: {},
                groupHoverCss: {},
                css: {
                  color: 'rgba(255,255,255,1)',
                  borderRadius: '50%',
                  fontSize: '36px',
                  backgroundColor: 'rgba(7,108,224,1)'
                }
              }
            },
            lock: {
              d: true,
              r: true
            },
            className: 'EUom',
            moduleCss: '2',
            sequence: 0
          }
        }
      ]
    }],
  tab: []
}
