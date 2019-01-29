<template>
    <div :class="{'show-set-box': isShowSetBox}" class="base-block">

        <div @click="toggleFoldContent" class="base-iconfont">
            <span class="iconfont iconfont-skew"></span>
          <div v-if="checkTitleVal" class="dot"></div>
        </div>
        <div class="base-set-box">
            <div class="tit">
                <label>
                    <input class="mr5" type="checkbox" v-model="checkTitleVal"/>倾斜
                </label>
            </div>
            <div v-if="checkTitleVal" class="border-module">
                <div>
                    <div v-for="(item, key1) in skewArr">
                        <dl class="el-block mb10">
                            <dt>
                                {{skewAttr[key1]}}
                            </dt>
                            <dd>
                                <base-range-input :getCb="getCb" :setCb="setCb" min="-80" max="80" :index="key1"></base-range-input>
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

  let initStyle = 'skew(0deg,0deg)'

  export default {
    name      : 'base-module-skew',
    mixins    : [mixinBseModule],
    data() {
      return {
        skewAttr: ['水平', '垂直'],
      }
    },
    methods   : {
      getCb(index) {
        return parseFloat(this.skewArr[index] || '')
      },
      setCb() {
        this.skewArr[arguments[1]] = arguments[0]
        this.$set(this.css, 'transform', this.css.transform.replace(/skew\(.*?\)/, 'skew(' + (this.skewArr.map(item => item + 'deg')).join(',') + ')'))
      },
    },
    computed  : {
      checkTitleVal: {
        get() {
          return this.css.transform && this.css.transform.indexOf('skew') !== -1
        },
        set(bool) {
          if (bool) {
            if (this.css.transform) {
              this.css.transform += ' ' + initStyle
            }
            else {
              this.$set(this.css, 'transform', initStyle)
            }
          }
          else {
            this.css.transform = this.css.transform.replace(/skew\(.*?\)/, '').trim()

            if (this.css.transform === '') {
              this.$delete(this.css, 'transform')
            }
          }
        },
      },
      skewArr() {
        return this.css.transform.match(/skew\(([\d-]+).*?([\d-]+)/).slice(1, 3)
      },
    },
  }
</script>
