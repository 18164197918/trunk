export default {
  info    : {
    static   : {
      gridList: [12],
    },
    cssObj   : {
      self: {
        css: {
          minHeight      : '130px',
          backgroundColor: 'rgba(43,43,43,1)',
        },
      },
    },
  },
  children: [
    {
      info    : {
        name     : 'module-list',
        cName    : '列表',
        className: 'boc',
        sequence : 0,
        lock     : {},
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
              width  : '20%',
              padding: '29px',
            },
          },
          innerGroup: {
            class   : '.inner-group',
            css     : {
              height: '64px',
            },
            hoverCss: {},
          },
        },
        static   : {
          direction  : 'multi-row',
          columnCount: 5,
          dataOrigin : 0,
          dataList   : [
            {
              src__pA2 : 'usr/6QN4pQxWbP/5c18ae01665e0.png',
              link__pA2: '',
            },
            {
              src__pA2 : 'usr/6QN4pQxWbP/5c18ae01665e0.png',
              link__pA2: '',
            },
            {
              src__pA2 : 'usr/6QN4pQxWbP/5c18ae01665e0.png',
              link__pA2: '',
            },
            {
              src__pA2 : 'usr/6QN4pQxWbP/5c18ae01665e0.png',
              link__pA2: '',
            },
            {
              src__pA2 : 'usr/6QN4pQxWbP/5c18ae01665e0.png',
              link__pA2: '',
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
              src    : 'usr/6QN4pQxWbP/5c18ae01665e0.png',
              link   : '',
              d__src : 'src__pA2',
              d__link: 'link__pA2',
              script : '',
            },
            cssObj   : {
              self : {
                class   : '',
                css     : {
                  width : '100%',
                  height: '100%',
                  top   : '0px',
                  right : '0px',
                  bottom: '0px',
                  left  : '0px',
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
                  objectFit : 'contain',
                },
              },
            },
            className: 'pA2',
            moduleCss: '1',
            sequence : 0,
          },
        },
      ],
    },
  ],
  tab     : [],
}
