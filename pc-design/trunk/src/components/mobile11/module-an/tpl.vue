<template>
    <div class="pc-module-an user-module" :class="[activeClass, {'hover': info.assist && info.assist.a==1, 'groupHover': info.assist && info.assist.a==2}]">
        <!--<a :href="dataLink || dataItem && dataItem[_static.d__link] || _static.link" class="inner">-->
      <a :href="_link" class="inner">
            <span v-if="dataIcon || (dataItem && dataItem[_static.d__icon]) || _static.icon"
                  :class="[dataIcon || (dataItem && dataItem[_static.d__icon]) || _static.icon]"
                  class="icl" ></span>
            <span v-if="_static.text!==undefined" class="text">
                {{ dataText || (rootData && rootData.data[_static.d__text]) || (dataItem && dataItem[_static.d__text]) || _static.text}}
            </span>
            <span v-if="_static.textarea!==undefined" class="textarea"
                  :style="{'-webkit-line-clamp': _static.rows}"
                  v-html="(dataText || (rootData && rootData.data[_static.d__textarea]) || (dataItem && dataItem[_static.d__textarea]) || _static.textarea).replace(/\n/g,'<br/>').replace(/\s/g,'&nbsp;')">
            </span>
        </a>
        <slot></slot>
    </div>
</template>

<script>
    import mixinModule from '../common/mixin-module'

    export default {
      name: 'module-an-tpl',
      mixins: [mixinModule],
      props: ['dataIcon', 'dataItem', 'dataLink', 'dataText', 'activeClass'],
      computed: {
        _static () {
          return this.info.static
        },
        _link () {
          let _static = this._static
          /**
           * 1.children-menu 和 children-page 不能单独设置链接
           * 2.children-list 中，优先使用动态列表数据 dataLink, 其次静态列表数据 dataItem
           *    如果不绑定则可以单独设置链接，否则使用列表数据
           */
          if(this.dataText && this.dataLink){
            return this.dataLink
          }
          else if(this.dataLink){
            if(_static.d__text || _static.d__textarea){
              return this.dataLink
            }else{
              return _static.link
            }
          }else if(this.dataItem){
            if(_static.d__text || _static.d__textarea){
              return this.dataItem[_static.d__link]
            }else{
              return _static.link
            }
          }else{
            return _static.link
          }
        }
      }
    }
</script>
