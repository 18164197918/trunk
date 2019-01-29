<template>
    <div @keydown.stop  :class="{'hover': info.assist && info.assist.a==1, 'groupHover': info.assist && info.assist.a==2}" class="pc-module-video user-module" >
        <div class="inner">
            <iframe :src="src" frameborder="0" allowfullscreen="true"></iframe>
        </div>
        <slot></slot>
    </div>
</template>
<script>
  import mixinModule from '../common/mixin-module'
  export default {
    name: 'module-video-tpl',
    mixins: [mixinModule],
    computed:{
      src(){
        let src= this.info.static.src
        return src.indexOf('src') !== -1 ? src.match(/src=("|')([\w\W]+?)\1/)[2] : src
      },
    },
  }
</script>