<template>
    <div :class="{'show-set-box': isShowSetBox}" class="base-block">

        <div @click="toggleFoldContent" class="base-iconfont">
            <span class="iconfont iconfont-margin"></span>
            <div v-if="checkTitleVal" class="dot"></div>
        </div>

        <div class="base-set-box">

            <div class="tit">
                <label>
                    <input class="mr5" type="checkbox" v-model="checkTitleVal"/>外边距
                </label>
            </div>

            <div v-if="checkTitleVal">
                <dl class="el-block mb10">
                    <dd>
                        <label>
                            <input class="mr5" type="checkbox" v-model="checkVal"/>外边距相等
                        </label>
                    </dd>
                </dl>
                <div>
                    <dl class="icon-common-list icon-list-border el-block mb10" v-for="item in currentMarginList">
                        <dt>
                            <div class="icon"></div>
                        </dt>
                        <base-range-input :css="css" :propName="item" min="0" max="100" step="1" unit="px"></base-range-input>
                    </dl>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  import mixinBseModule from '../common/mixin-base-module'

  let marginArr      = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
      marginArrSlice = marginArr.slice(1)

  export default {
    name      : 'base-module-margin',
    mixins    : [mixinBseModule],
    computed  : {
      currentMarginList: function () {
        return this.checkVal ? marginArr.slice(0, 1) : marginArrSlice
      },
      checkTitleVal    : {
        get() {
          return !!(this.css.margin || this.css.marginTop)
        },
        set(bool) {
          if (bool) {
            this.$set(this.css, 'margin', '10px')
          }
          else {
            this.$delete(this.css, 'margin')
            for (let i in marginArrSlice) {
              this.$delete(this.css, marginArrSlice[i])
            }
          }
        },
      },
      checkVal         : {
        get() {
          return !this.css.marginTop
        },
        set(bool) {
          if (bool) {
            this.$set(this.css, 'margin', this.css.marginTop)
            for (let i in marginArrSlice) {
              this.$delete(this.css, marginArrSlice[i])
            }
          }
          else {
            let temp = this.css.margin
            this.$delete(this.css, 'margin')
            for (let i in marginArrSlice) {
              this.$set(this.css, marginArrSlice[i], temp)
            }
          }
        },
      },
    },
  }
</script>
