<template>
  <div :id="mid" class="map-container"></div>
</template>
<script>
  import $ from 'jquery'
  import { $HEAD, $QQ_MAP_SCRIPT } from '../common/constant-dom'

  let cssC = {
    color       : '#000000',
    fontSize    : '16px',
    background  : '#ffffff',
    border      : 'none',
    borderRadius: '10px',
    textAlign   : 'center',
    padding     : '10px',
    width       : '200px',
  } //标记文字样式

  export default {
    props  : {
      options: null,
      mClass : null,
    },
    name   : 'c-map',
    data() {
      return {
        mid      : '',
        longitude: '',
        latitude : '',
        title    : '',
        scale    : '',
        map      : '',
        marker   : '',
        label    : '',
      }
    },
    methods: {
      initMap(paramsObj) {
        TMap().then(qq => {
          //定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
          this.center = new qq.maps.LatLng(Number(this.latitude), Number(this.longitude))
          this.map    = new qq.maps.Map(document.getElementById(this.mid), {
            center: this.center,                                                                            // 地图的中心地理坐标。
            zoom  : Number(paramsObj.scale)                                                                 // 地图的缩放比列
          })
          let anchor  = new qq.maps.Point(25, 40),
              size    = new qq.maps.Size(50, 50),
              origin  = new qq.maps.Point(0, 0),
              icon    = new qq.maps.MarkerImage(paramsObj.markers[0].iconPath, size, origin, anchor)
          this.marker = new qq.maps.Marker({
            position: this.center,
            map     : this.map,
            icon    : icon,
          })
          this.label  = new qq.maps.Label({
            position: this.center,
            map     : this.map,
            style   : cssC,
            //相对于position位置偏移值，x方向向右偏移为正值，y方向向下偏移为正值，反之为负。
            offset  : new qq.maps.Size(-100, -80),
            content : paramsObj.markers[0].title + ' \n ',
          })
        })
      },
      setCoord() {  //改变坐标位置
        this.center = new qq.maps.LatLng(Number(this.latitude), Number(this.longitude))
        this.map.panTo(this.center)
        this.marker.setPosition(this.center)
        this.label.setPosition(this.center)
      },
      setLabel() {   //改变标签内容
        this.label.setContent(this.title)
      },
      setZoom() {    //改变缩放比例
        this.map.zoomTo(Number(this.scale))
      },
    },
    mounted() {
      this.mid       = 'container' + this.mClass
      this.latitude  = this.options.latitude
      this.longitude = this.options.longitude
      this.initMap(this.options)
    },
    watch  : {
      options: {//深度监听，可监听到对象、数组的变化
        handler(val, oldVal) {
          if (this.longitude !== val.markers[0].longitude) {
            this.longitude = val.markers[0].longitude
            this.setCoord()
          }
          if (this.latitude !== val.markers[0].latitude) {
            this.latitude = val.markers[0].latitude
            this.setCoord()
          }
          if (this.title !== val.markers[0].title) {
            this.title = val.markers[0].title
            this.setLabel()
          }
          if (this.scale !== val.scale) {
            this.scale = val.scale
            this.setZoom()
          }
        },
        deep: true,
      },
    },
  }

  function TMap() {
    return new Promise(function (resolve, reject) {
      if ($('head #qq-map').length === 0) {
        window.init = function () { //页面未始化
          resolve(qq)//注意这里
          window.isInit = true
        }
        $HEAD.append($QQ_MAP_SCRIPT)
      }
      else {                    //页面已经初始化
        resolve(qq)//注意这里
      }
    })
  }
</script>

<style lang="scss" scoped>
  .map-container {
    height: 100%;
    width: 100%;
  }
</style>
