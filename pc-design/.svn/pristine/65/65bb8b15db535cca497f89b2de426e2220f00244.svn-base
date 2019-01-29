<template>
  <div class="pc-module-xz user-module" :class="{'hover': info.assist && info.assist.a==1, 'groupHover': info.assist && info.assist.a==2}">
    <a :href="dataLink || dataItem && dataItem[info.static.d__link] || info.static.link"
       :class="{'hover': info.assist && info.assist.a!==0}"
       v-html="actualSvg"
       class="inner">
    </a>
    <slot></slot>
  </div>
</template>

<script>
  import mixinModule from '../common/mixin-module'
  import { filterImg } from '@/js/filter.img'
  import { SVG_ASPECT_RATIO, SVG_WITCH_ONE } from '../common/constant'

  export default {
    name    : 'module-xz-tpl',
    mixins  : [mixinModule],
    props   : ['dataItem', 'dataLink', 'dataSrc'],
    computed: {
      actualSvg() {
        let _static = this.info.static,
            obj     = {
              CLASSNAME  : this.info.className + (this.indexKey || ''),
              ASPECTRATIO: SVG_ASPECT_RATIO[_static.ratio].value,
              WITCHONE   : SVG_WITCH_ONE[_static.witch].value,
              SRC        : filterImg(this.dataSrc || (this.rootData && this.rootData.data[_static.d__src]) || this.dataItem && this.dataItem[_static.d__src] || _static.src),
            }
        return _static.svg.replace(/CLASSNAME|ASPECTRATIO|WITCHONE|SRC/g, arg => {
          return obj[arg]
        })
      },
      _link() {
        let _static = this.info.static

        if (this.dataLink) {
          return _static.d__src ? this.dataLink : _static.link
        }
        else if (this.dataItem) {
          return _static.d__src ? (this.dataItem[_static.d__link] || _static.link) : _static.link
        }
        else {
          return _static.link
        }
      },
    },
  }
</script>
