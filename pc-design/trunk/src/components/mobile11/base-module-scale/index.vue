<template>
    <div :class="{'show-set-box': isShowSetBox}" class="base-block">

        <div @click="toggleFoldContent" class="base-iconfont">
            <span class="iconfont iconfont-scale"></span>
            <div v-if="checkTitleVal" class="dot"></div>
        </div>
        <div class="base-set-box">
            <div class="tit">
                <label>
                    <input class="mr5" type="checkbox" v-model="checkTitleVal"/>缩放
                </label>
            </div>
            <div v-if="checkTitleVal">
                <div>
                    <div v-for="(item, key1) in scaleArr">
                        <dl class="el-block mb10">
                            <dt>
                                {{scaleAttr[key1]}}
                            </dt>
                            <dd>
                                <base-range-input :getCb="getCb" :setCb="setCb" min="0.1" max="2" :index="key1" step='0.01'></base-range-input>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mixinBseModule from '../common/mixin-base-module'

let initStyle = 'scale(1,1)'

export default {
  name: 'base-module-scale',
  mixins: [mixinBseModule],
  data () {
    return {
      scaleAttr: ['水平', '垂直']
    }
  },
  methods: {
    getCb (index) {
      return parseFloat(this.scaleArr[index] || '')
    },
    setCb () {
      this.scaleArr[arguments[1]] = arguments[0]
      this.$set(this.css, 'transform', this.css.transform.replace(/scale\(.*?\)/, 'scale(' + this.scaleArr.join(',') + ')'))
    }
  },
  computed: {
    checkTitleVal: {
      get () {
        return this.css.transform && this.css.transform.indexOf('scale') !== -1
      },
      set (bool) {
        if (bool) {
          if (this.css.transform) {
            this.css.transform += ' ' + initStyle
          } else {
            this.$set(this.css, 'transform', initStyle)
          }
        } else {
          this.css.transform = this.css.transform.replace(/scale\(.*?\)/, '').trim()

          if (this.css.transform === '') {
            this.$delete(this.css, 'transform')
          }
        }
      }
    },
    scaleArr () {
      return this.css.transform.match(/scale\(([\d.]+).*?([\d.]+)/).slice(1, 3)
    }
  }
}
</script>
