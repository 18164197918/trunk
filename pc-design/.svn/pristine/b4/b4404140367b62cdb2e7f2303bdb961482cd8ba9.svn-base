<template>
  <div :class="{'show-set-box': isShowSetBox}" class="base-block">

    <div @click="toggleFoldContent" class="base-iconfont">
      <span class="iconfont iconfont-translate"></span>
      <div v-if="checkTitleVal" class="dot"></div>
    </div>
    <div class="base-set-box">
      <div class="tit">
        <label>
          <input class="mr5" type="checkbox" v-model="checkTitleVal"/>位移
        </label>
      </div>
      <div v-if="checkTitleVal">
        <div>
          <div v-for="(item, key1) in translate3dArr">
            <dl class="el-block mb10">
              <dt>
                {{translate3dAttr[key1]}}
              </dt>
              <dd>
                <base-range-input :getCb="getCb" :setCb="setCb" min="-200" max="200" :index="key1" unit="px"></base-range-input>
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

  let initStyle = 'translate3d(0px,0px,0px)'

  export default {
    name    : 'base-module-translate3d',
    mixins  : [mixinBseModule],
    data() {
      return {
        translate3dAttr: ['水平', '垂直'],
      }
    },
    methods : {
      getCb(index) {
        return parseFloat(this.translate3dArr[index] || '')
      },
      setCb() {
        this.translate3dArr[arguments[1]] = arguments[0]
        this.$set(this.css, 'transform', this.css.transform.replace(/translate3d\(.*?\)/, 'translate3d(' + (this.translate3dArr.map(item => item + 'px')).join(',') + ',0px)'))
      },
    },
    computed: {
      checkTitleVal: {
        get() {
          return this.css.transform && this.css.transform.indexOf('translate3d') !== -1
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
            this.css.transform = this.css.transform.replace(/translate3d\(.*?\)/, '').trim()

            if (this.css.transform === '') {
              this.$delete(this.css, 'transform')
            }
          }
        },
      },
      translate3dArr() {
        return this.css.transform.match(/translate3d\(([\d-]+).*?([\d-]+)/).slice(1, 3)
      },
    },
  }
</script>
