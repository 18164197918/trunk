<template>
    <div :class="{'show-set-box': isShowSetBox}" class="base-block">

        <div @click="toggleFoldContent" class="base-iconfont">
            <span class="iconfont iconfont-rotate"></span>
            <div v-if="checkTitleVal" class="dot"></div>
        </div>
        <div class="base-set-box">
            <div class="tit">
                <label>
                    <input class="mr5" type="checkbox" v-model="checkTitleVal"/>旋转
                </label>
            </div>
            <div v-if="checkTitleVal">
                <div>
                    <div v-for="(item, key1) in rotate3dArr">
                        <dl class="el-block mb10">
                            <dt>
                                {{rotate3dAttr[key1]}}
                            </dt>
                            <dd>
                                <base-range-input :getCb="getCb" :setCb="setCb" min="0" max="360" :index="key1"></base-range-input>
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

  let initStyle     = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
      rotate3dStyle = ['rotateX(', 'rotateY(', 'rotateZ(']


  export default {
    name      : 'base-module-rotate3d',
    mixins    : [mixinBseModule],
    data() {
      return {
        rotate3dAttr: ['X轴', 'Y轴', 'Z轴'],
      }
    },
    methods   : {
      getCb(index) {
        return parseFloat(this.rotate3dArr[index] || '')
      },
      setCb() {
        this.rotate3dArr[arguments[1]] = arguments[0]
        this.$set(this.css, 'transform', this.css.transform.replace(/rotate.*?rotate.*?rotate.*?\)/, this.rotate3dArr.map((item, index) => rotate3dStyle[index] + item + 'deg)').join(' ')))
      },
    },
    computed  : {
      checkTitleVal: {
        get() {
          return this.css.transform && this.css.transform.indexOf('rotate') !== -1
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
            this.css.transform = this.css.transform.replace(/rotate.*?\)\s?/g, '').trim()

            if (this.css.transform === '') {
              this.$delete(this.css, 'transform')
            }
          }
        },
      },
      rotate3dArr() {
        return this.css.transform.match(/rotate\w\((\d+).*?(\d+).*?(\d+)/).slice(1, 4)
      },
    },
  }
</script>
