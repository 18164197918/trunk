<template>
    <div @keydown.stop :class="{'hover': info.assist && info.assist.a==1, 'groupHover': info.assist && info.assist.a==2}" class="pc-module-wb user-module" >
        <div v-show="info.editable" class="tool-bar"></div>
        <div class="inner" :class="{'hover': info.assist && info.assist.a!==0}"></div>
        <slot></slot>
    </div>
</template>

<script>
    import mixinModule from '../common/mixin-module'

    export default {
      name: 'module-wb-tpl',
      mixins: [mixinModule],
      props: ['dataItem'],
      mounted () {
        this.$el.childNodes[1].innerHTML = this.dataItem && this.dataItem.d__shtml || this.info.static.shtml
      },
    }
</script>
