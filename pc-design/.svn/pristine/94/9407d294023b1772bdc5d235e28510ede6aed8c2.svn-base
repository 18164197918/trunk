<template>
    <div @keydown.stop :class="{'hover': info.assist && info.assist.a==1, 'groupHover': info.assist && info.assist.a==2}" class="pc-module-map user-module">
        <div class="inner w100p h100p">
            <iframe id="container" :src="mapSrc" frameborder="0" allowfullscreen="true"></iframe>
        </div>
        <slot></slot>
    </div>
</template>
<script>
import mixinModule from '../common/mixin-module'

let concatSuffix = _static => `marker=coord:${_static.coord};title:${_static.title};addr:${_static.addr}&key=${_static.key}&referer=myapp`

export default {
  name: 'module-map-tpl',
  mixins: [mixinModule],
  data () {
    return {
      key: 'H6XBZ-HL66I-UJRGN-5YQMK-PR3S6-THFLL', // 秘钥
      srcPrefix: {
        1: 'https://3gimg.qq.com/lightmap/v1/marker/index.html?type=0&',
        2: 'https://3gimg.qq.com/lightmap/components/locationCluster/index.html?type=0&'
      }
    }
  },
  computed: {
    mapSrc () {
      let _static = this.info.static
      return this.srcPrefix[_static.map_type] + concatSuffix(_static)
    }
  }
}
</script>
