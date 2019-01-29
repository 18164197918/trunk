export default {
  info: {
    name  : 'module-map',
    cName : '地图',
    lock  : {},
    static: {
//      coord   : '30.434600,114.423214',       //坐标
//      zoom    : 15,                            //缩放比列
//      title   : '武佰信息',                    //名称
//      addr    : '湖北省武汉市江夏区光谷大道',     //地址
//      map_type: 1,                            //地图类型
//      search  : '',                           //搜索
      mapData:{
        longitude: 114.423214,                                              //中心经度
        latitude : 30.434600,                                               //中心纬度
        scale    : 15,                                                      //缩放级别，取值范围为5-18
        markers  : [                                                        //标记点
          {
            longitude: 114.423214,	                                            //纬度	Number	是	浮点数，范围 -90 ~ 90
            latitude : 30.434600,                                               //经度	Number	是	浮点数，范围 -180 ~ 180
            title    : "武佰信息",                                               //标注点名
            iconPath : './img/location.png',                                    //显示的图标
          },
        ],
      }
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
