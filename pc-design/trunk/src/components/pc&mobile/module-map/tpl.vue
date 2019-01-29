<template>
  <div @keydown.stop :class="{'hover': info.assist && info.assist.a==1, 'groupHover': info.assist && info.assist.a==2}" class="pc-module-map user-module">
    <div class="inner w100p h100p">
      <c-map :options="info.static.mapData" :mClass="info.className"></c-map>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  import mixinModule from '../common/mixin-module'
  import cMap from './map'

  export default {
    name      : 'module-map-tpl',
    mixins    : [mixinModule],
    data() {
      return {
      }
    },
    methods   : {
    },
    computed  : {
    },
    components: {
      cMap,
    },
  }
</script>
<style lang="scss">
  #container {
    width: 100%;
    height: 100%;
  }
</style>
