export default {
  info    : {
    static: {
      gridList: [12],
    },
    cssObj: {
      self: {
        css: {
          minHeight      : '260px',
          backgroundColor: 'rgba(246,246,246,1)',
        },
      },
    },
  },
  children: [
    {
      info    : {
        name     : 'module-list',
        cName    : '列表',
        className: 'gKa',
        sequence : 0,
        lock     : {},
        cssObj   : {
          self      : {
            class: '',
            css  : {
              left        : '0px',
              top         : '21px',
              width       : '100%',
              position    : 'relative !important',
              marginBottom: '21px',
            },
          },
          inner     : {
            class   : '.inner-group',
            css     : {},
            hoverCss: {},
          },
          innerGap  : {
            class: '.inner-gap',
            css  : {
              width  : '50%',
              padding: '16px',
            },
          },
          innerGroup: {
            class   : '.inner-group',
            css     : {
              height: '184px',
            },
            hoverCss: {},
          },
        },
        static   : {
          direction  : 'multi-row',
          columnCount: 2,
          dataOrigin : 0,
          dataList   : [
            {
              src__qVZ     : 'usr/6QN4pQxWbP/5bed49f6e97d1.jpg',
              link__qVZ    : '',
              text__IaX    : '资讯服务主标题',
              link__IaX    : '',
              icon__IaX    : '',
              textarea__c6D: '请输入要描述的内容进行描述请输入要描述的内容进行描述',
              link__c6D    : '',
              icon__c6D    : '',
              text__qnr    : '立即资讯',
              link__qnr    : '',
              icon__qnr    : '',
            },
            {
              src__qVZ     : 'usr/6QN4pQxWbP/5bed49f6e97d1.jpg',
              link__qVZ    : '',
              text__IaX    : '资讯服务主标题',
              link__IaX    : '',
              icon__IaX    : '',
              textarea__c6D: '请输入要描述的内容进行描述请输入要描述的内容进行描述',
              link__c6D    : '',
              icon__c6D    : '',
              text__qnr    : '立即资讯',
              link__qnr    : '',
              icon__qnr    : '',
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
        },
      },
      children: [
        {
          info: {
            name     : 'module-tp',
            cName    : '图片',
            lock     : {},
            static   : {
              src    : 'usr/6QN4pQxWbP/5bed49f6e97d1.jpg',
              link   : '',
              d__src : '',
              d__link: 'link__qVZ',
              script : '',
            },
            cssObj   : {
              self : {
                class   : '',
                css     : {
                  left  : '0px',
                  top   : '0px',
                  width : '55%',
                  height: '184px',
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
                css          : {
                  transition: 'all 0.2s 0s ease',
                },
              },
            },
            className: 'qVZ',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '资讯服务主标题',
              link   : '',
              icon   : '',
              d__text: 'text__IaX',
              d__link: 'link__IaX',
              d__icon: 'icon__IaX',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '58%',
                  top   : '9px',
                  width : '42%',
                  height: '32px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color         : 'rgba(36,36,36,1)',
                  transition    : 'all 0.2s 0s ease',
                  textAlign     : 'left',
                  justifyContent: 'flex-start',
                  fontSize      : '17px',
                  fontFamily    : '黑体',
                  fontWeight    : 'bold',
                },
              },
            },
            lock     : {},
            className: 'IaX',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              link       : '',
              icon       : '',
              d__lin     : 'link__c6D',
              d__ico     : 'icon__c6D',
              order      : 0,
              script     : '',
              textarea   : '请输入要描述的内容进行描述请输入要描述的内容进行描述',
              d__textarea: 'textarea__c6D',
              rows       : 2,
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '58%',
                  top   : '52px',
                  width : '41.7%',
                  height: '49px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color         : 'rgba(78,78,78,1)',
                  transition    : 'all 0.2s 0s ease',
                  textAlign     : 'left',
                  justifyContent: 'flex-start',
                  fontSize      : '14px',
                  fontFamily    : '微软雅黑',
                  fontWeight    : 'normal',
                },
              },
            },
            lock     : {},
            className: 'c6D',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '立即资讯',
              link   : '',
              icon   : '',
              d__text: 'text__qnr',
              d__link: 'link__qnr',
              d__icon: 'icon__qnr',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '58%',
                  top   : '126px',
                  width : '28.6%',
                  height: '42px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color       : 'rgba(7,108,224,1)',
                  border      : '1px solid rgba(7,108,224,1)',
                  transition  : 'all 0.2s 0s ease',
                  fontSize    : '12px',
                  borderRadius: '40px',
                },
              },
            },
            lock     : {},
            className: 'qnr',
            moduleCss: '1',
            sequence : 0,
          },
        },
      ],
    },
  ],
  tab     : [],
}
