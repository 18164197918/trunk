<template>
  <div @keydown.stop :class="{'hover': info.assist && info.assist.a==1, 'groupHover': info.assist && info.assist.a==2}" class="pc-module-map user-module">
    <div class="inner w100p h100p">
      <!--<iframe id="container" :src="mapSrc" frameborder="0" allowfullscreen="true"></iframe>-->
      <!--<div id="container" :params="params"></div>-->
      <iframe id="container" :src="mapSrc" frameborder="0" allowfullscreen="true"></iframe>



    </div>
    <slot></slot>
  </div>
</template>
<script>
  import mixinModule from '../common/mixin-module'

  export default {
    name   : 'module-map-tpl',
    mixins : [mixinModule],
    data() {
      return {
        baseUrl: process.env.BASE_URL,
      }
    },
    methods: {
      encoder(obj) {//编码   将对象或者数组转成字符串
        let encoderUrl = ''
        encoder(obj)

        function encoder(obj, j, keyArr) {
          if (typeof(j) === 'undefined') {
            j = 1
          }
          if (typeof(obj) === 'object') {      //假如是对象或者数组
            for (let i in obj) {
              if (obj[i] instanceof Array) {                  //假如是数组
                obj[i].forEach((item, index) => {
                  if (typeof(item) === 'object' && item !== null) { //假如数组里面是对象或者数组
                    j++
                    encoder(item, j, i + '[' + index + ']')
                  }
                  else {
                    if (typeof(keyArr) === 'undefined') {
                      encoderUrl += '&' + i + '[' + index + ']' + '=' + obj[i][index]
                    }
                    else {
                      encoderUrl += '&' + keyArr + '[' + index + ']' + '=' + obj[i][index]
                    }
                  }
                })
              }
              else if (obj[i] instanceof Object && obj[i] !== null) {                           //假如是对象
                for (let k in  obj[i]) {
                  if (typeof(obj[i][k]) === 'object' && obj[i] !== null) {    //假如数组里面是对象或者数组
                    j++
                    encoder(obj[i][k], j, i + '[' + k + ']')
                  }
                  else {
                    if (typeof(keyArr) === 'undefined') {
                      encoderUrl += '&' + i + '[' + k + ']' + '=' + obj[i][k]
                    }
                    else {
                      encoderUrl += '&' + keyArr + '[' + k + ']' + '=' + obj[i][k]
                    }
                  }
                }
              }
              else {
                if (obj[i] === null) {
                  return
                }
                if (keyArr) {
                  encoderUrl += '&' + keyArr + '[' + i + ']' + '=' + obj[i]
                }
                else {
                  encoderUrl += '&' + i + '=' + obj[i]
                }
              }
            }
          }
        }

        return encoderUrl.substring(1)
      },
    },
    computed:{
      mapSrc:function(){
        return  this.baseUrl + 'map.html?' + encodeURIComponent(this.encoder(this.info.static.mapData))
      }
    },
  }
</script>
<style lang="scss">
  #container {
    width: 100%;
    height: 100%;
  }
</style>
