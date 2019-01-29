<script>
  import { classPrefix } from './constant'
  import { FUNC_TO_CSS } from '../common/FUNC_TO_CSS'

    export default {
      render: function (createElement) {
        return createElement('style', this.styles)
      },
      props: ['info', 'isTpl', 'fatherObj', 'hidePrefix'],
      computed  : {
        styles() {
          return FUNC_TO_CSS(this.info.cssObj,  (this.hidePrefix ? '' : '.' + classPrefix) + this.info.className, this.fatherObj) + ((this.isTpl && typeof this.info.tplCssObj === 'object' && FUNC_TO_CSS(this.info.tplCssObj, (this.hidePrefix ? '' : '.' + classPrefix) + this.info.className)) || '')
        },
      },
    }
</script>