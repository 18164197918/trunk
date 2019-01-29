import dataTools from './data-tools'
import dataCache from './data-cache'
import baseRangeInput from '../base-range-input/index.vue'
import $ from 'jquery'

export default {
  props     : {
    static    : {},
    children  : {},
    css       : {},
    info      : {},
    first     : {},
    notAllow  : {default: () => []},
  },
  data() {
    return {
      dataTools,
      dataCache,
    }
  },
  methods   : {
    toggleFoldContent() {
      let name = this.$options.name
      if (name === this.dataCache.baseModuleName) {
        this.dataCache.baseModuleName = undefined
      }
      else {
        this.dataCache.baseModuleName = name
      }
      //this.adjustBaseSetBoxPosition()
    },
    /**
     * TODO 组件之间切换还存在BUG
     */
    adjustBaseSetBoxPosition() {
      let $el         = $(this.$el),
          $baseSetBox = $el.children('.base-set-box')

      setTimeout(() => {
        $baseSetBox.removeAttr('style')

        let $el_top            = $el.position().top,
            $baseSetBox_height = $baseSetBox.outerHeight(),
            $rightBox_height   = $('#right-box').height()

        if ($baseSetBox_height >= $rightBox_height) {
          $baseSetBox.css({
            top         : -$el_top,
            height      : $rightBox_height,
            'overflow-y': 'scroll',
          })
        }
        else if ($el_top + $baseSetBox_height > $rightBox_height) {
          $baseSetBox.css({
            top: $rightBox_height - $el_top - $baseSetBox_height,
          })
        }
      })
    },
  },
  computed  : {
    isShowSetBox() {
      return dataTools.isRightBoxFold && this.$options.name === this.dataCache.baseModuleName
    },
  },
  components: {
    baseRangeInput,
  },
}
