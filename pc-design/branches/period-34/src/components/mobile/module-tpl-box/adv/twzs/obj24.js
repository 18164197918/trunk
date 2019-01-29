export default {
  info    : {
    cssObj: {
      self: {
        css: {
          minHeight: '310px',
        },
      },
    },
  },
  children: [
    {
      info    : {
        name     : 'module-list',
        cName    : '列表',
        className: 'xX4',
        sequence : 0,
        lock     : {
          d: true,
          r: true,
        },
        cssObj   : {
          self      : {
            class: '',
            css  : {
              left        : '0px',
              top         : '0px',
              width       : '100%',
              position    : 'relative !important',
              marginBottom: '0px',
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
              width  : '25%',
              padding: '6px',
            },
          },
          innerGroup: {
            class   : '.inner-group',
            css     : {
              height: '291px',
            },
            hoverCss: {},
          },
        },
        static   : {
          direction  : 'multi-row',
          columnCount: 4,
          dataOrigin : 0,
          dataList   : [
            {
              src__NtG : '',
              link__NtG: '',
              src__Gv4 : 'usr/6QN4pQxWbP/5bebbfcf81a4f.jpg',
              link__Gv4: '',
              text__iWn: '第二主标题',
              link__iWn: '',
              icon__iWn: '',
              text__xUD: '请输入要描述的内容',
              link__xUD: '',
              icon__xUD: '',
            },
            {
              src__NtG : '',
              link__NtG: '',
              src__Gv4 : 'usr/6QN4pQxWbP/5bebbfcf81a4f.jpg',
              link__Gv4: '',
              text__iWn: '第二主标题',
              link__iWn: '',
              icon__iWn: '',
              text__xUD: '请输入要描述的内容',
              link__xUD: '',
              icon__xUD: '',
            },
            {
              src__NtG : '',
              link__NtG: '',
              src__Gv4 : 'usr/6QN4pQxWbP/5bebbfcf81a4f.jpg',
              link__Gv4: '',
              text__iWn: '第二主标题',
              link__iWn: '',
              icon__iWn: '',
              text__xUD: '请输入要描述的内容',
              link__xUD: '',
              icon__xUD: '',
            },
            {
              src__NtG : '',
              link__NtG: '',
              src__Gv4 : 'usr/6QN4pQxWbP/5bebbfcf81a4f.jpg',
              link__Gv4: '',
              text__iWn: '第二主标题',
              link__iWn: '',
              icon__iWn: '',
              text__xUD: '请输入要描述的内容',
              link__xUD: '',
              icon__xUD: '',
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
            lock     : {
              d: true,
              r: true,
            },
            static   : {
              src    : 'usr/6QN4pQxWbP/5bebbfcf81a4f.jpg',
              link   : '',
              d__src : 'src__Gv4',
              d__link: 'link__Gv4',
              script : '',
            },
            cssObj   : {
              self : {
                class   : '',
                css     : {
                  left  : '0px',
                  top   : '0px',
                  width : '100%',
                  height: '291px',
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
                css          : {},
              },
            },
            className: 'Gv4',
            moduleCss: '1',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-xz',
            cName    : '形状',
            lock     : {
              d: true,
              r: true,
            },
            static   : {
              svg    : '<svg viewBox="9.039993286132812 19.052000045776367 186 103" preserveAspectRatio="ASPECTRATIO">\n            <defs>\n              <image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="9.039993286132812" y="19.052000045776367" width="100%" height="100%"/>\n              <path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M195.04 19.052v103h-186v-103h186z"></path>\n              <clipPath id="cp-CLASSNAME">\n                <use xlink:href="#path-CLASSNAME"/>\n              </clipPath>\n            </defs>\n            <use xlink:href="#WITCHONE-CLASSNAME" clip-path="url(#cp-CLASSNAME)" />\n\t\t\t\t\t</svg>',
              ratio  : 0,
              witch  : 0,
              src    : '',
              link   : '',
              d__src : 'src__NtG',
              d__link: 'link__NtG',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '14%',
                  top   : '173px',
                  width : '72%',
                  height: '88px',
                },
              },
              inner: {
                class        : '.inner',
                css          : {
                  fill     : 'rgba(243,243,243,0.85)',
                  border   : '5px solid rgba(0,0,0,0)',
                  boxShadow: '0px 0px 0px 5px rgba(234,234,234,0.9098039215686274)',
                },
                hoverCss     : {},
                groupHoverCss: {},
              },
            },
            className: 'NtG',
            moduleCss: '3',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '第二主标题',
              link   : '',
              icon   : '',
              d__text: 'text__iWn',
              d__link: 'link__iWn',
              d__icon: 'icon__iWn',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '23%',
                  top   : '182px',
                  width : '55%',
                  height: '37px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color       : 'rgba(54,54,54,1)',
                  fontSize    : '18px',
                  borderTop   : '0px solid rgba(0,0,0,1)',
                  borderRight : '0px solid rgba(0,0,0,1)',
                  borderBottom: '1px solid rgba(182,182,182,1)',
                  borderLeft  : '0px solid rgba(0,0,0,1)',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'iWn',
            moduleCss: '2',
            sequence : 0,
          },
        },
        {
          info: {
            name     : 'module-an',
            cName    : '按钮',
            static   : {
              text   : '请输入要描述的内容',
              link   : '',
              icon   : '',
              d__text: 'text__xUD',
              d__link: 'link__xUD',
              d__icon: 'icon__xUD',
              order  : 0,
              script : '',
            },
            cssObj   : {
              self : {
                class: '',
                css  : {
                  left  : '20%',
                  top   : '218px',
                  width : '61%',
                  height: '38px',
                },
              },
              inner: {
                class        : '.inner',
                hoverCss     : {},
                groupHoverCss: {},
                css          : {
                  color   : 'rgba(110,110,110,1)',
                  fontSize: '13px',
                },
              },
            },
            lock     : {
              d: true,
              r: true,
            },
            className: 'xUD',
            moduleCss: '2',
            sequence : 0,
          },
        },
      ],
    }],
  tab     : [],
}
