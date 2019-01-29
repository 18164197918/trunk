export default {
  info: {
    name  : 'module-map',
    cName : '地图',
    lock  : {},
    static: {
      coord   : '114.423214,30.434600',         //坐标
      title   : '武佰信息',                      //名称
      map_type: 1,                              //地图类型
//      addr    : '湖北省武汉市江夏区光谷大道',     //地址
//      coord   : '30.434600,114.423214',         //坐标
//      search  : '',                           //搜索
    },
    cssObj: {
      self : {
        class   : '',
        hoverCss: {},
        css     : {
          width : '100%',
          height: '400px',
        },
      },
      inner: {
        class        : '.inner',
        hoverCss     : {},
        groupHoverCss: {},
      },
    },
  },
}
