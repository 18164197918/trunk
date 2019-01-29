export default {
  children: [],
  info: {
    name: 'module-list',
    cName: '列表',
    moduleCss: undefined,
    lock: {},
    static: {
      direction: 'multi-row',
      columnCount: 1,
      dataId: undefined,
      categoryId: undefined,
      dataOrigin: 0,
      showDataNum: 10,
      dataList: [],
      swiperInit: {
        autoplay: { delay: 2000 },
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
    cssObj: {
      self: {
        class: '',
        css: {
          height: 'auto',
          position: 'relative !important'
        }
      },
      innerGap: {
        class: '.inner-gap',
        css: {
          width: '100%',
          padding: '0px'
        }
      },
      innerGroup: {
        class: '.inner-group',
        css: {
          height: '0px'
        },
        hoverCss: {}
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
  }

}
