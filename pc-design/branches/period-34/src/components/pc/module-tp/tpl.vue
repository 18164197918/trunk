<template>
    <div class="pc-module-tp user-module" :class="{'hover': info.assist && info.assist.a==1, 'groupHover': info.assist && info.assist.a==2}">
        <!--<a :href="dataLink || dataItem && dataItem[_static.d__link] || _static.link" class="inner">-->
        <a :href="_link" class="inner">
            <img :src="(dataSrc || (rootData && rootData.data[_static.d__src]) || dataItem && dataItem[_static.d__src] || _static.src) | filterImg" alt="">
        </a>

        <slot></slot>
    </div>
</template>

<script>
    import mixinModule from '../common/mixin-module'

    export default {
      name: 'module-tp-tpl',
      mixins: [mixinModule],
      props: ['dataItem', 'dataLink', 'dataSrc'],
      computed: {
        _static () {
          return this.info.static
        },
        _link () {
          let _static = this._static

          if(this.dataLink){
            return _static.d__src ? this.dataLink : _static.link
          }else if(this.dataItem){
            return _static.d__src ? (this.dataItem[_static.d__link] || _static.link) : _static.link
          }else{
            return _static.link
          }
        }
      }
    }
</script>
