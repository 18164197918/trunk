<template>
    <div :class="{'show-set-box': isShowSetBox}" class="base-block">

        <div @click="toggleFoldContent" class="base-iconfont">
            <span class="iconfont iconfont-padding"></span>
            <div v-if="checkTitleVal" class="dot"></div>
        </div>

        <div class="base-set-box">
            <div class="tit">
                <label>
                    <input class="mr5" type="checkbox" v-model="checkTitleVal"/>间距
                </label>
            </div>
            <div v-if="checkTitleVal">
                <dl class="el-block mb10">
                    <dd>
                        <label>
                            <input class="mr5" type="checkbox" v-model="checkVal"/> 所有的间距都相同
                        </label>
                    </dd>
                </dl>
                <div class="padding-style">
                    <dl v-for="item in currentPaddingList" class="el-block mb10">
                        <div class="icon"></div>
                        <base-range-input :css="css" :propName="item" min="0" max="100" unit="px"></base-range-input>
                    </dl>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import mixinBseModule from '../common/mixin-base-module'

  let paddingArr      = ['padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
      paddingArrSlice = paddingArr.slice(1)

  export default {
    name      : 'base-module-padding',
    mixins    : [mixinBseModule],
    computed  : {
      currentPaddingList: function () {
        return this.checkVal ? paddingArr.slice(0, 1) : paddingArrSlice
      },
      checkTitleVal    : {
        get() {
          for (let i in this.css) {
            if (/^padding/.test(i)) {
              return true
            }
          }
          return false
        },
        set(bool) {
          if (bool) {
            this.$set(this.css, 'padding', '10px')
          }
          else {
            this.$delete(this.css, 'padding')
            for (let i in paddingArrSlice) {
              this.$delete(this.css, paddingArrSlice[i])
            }
          }
        },
      },
      checkVal         : {
        get() {
          for (let i in this.css) {
            if (/^padding\w+/.test(i)) {
              return false
            }
          }
          return true
        },
        set(bool) {
          if (bool) { //等同内边距
            this.$set(this.css, 'padding', this.css.paddingTop)
            for (let i in paddingArrSlice) {
              this.$delete(this.css, paddingArrSlice[i])
            }
          }
          else {
            let temp = this.css.padding
            this.$delete(this.css, 'padding')
            for (let i in paddingArrSlice) {
              this.$set(this.css, paddingArrSlice[i], temp)
            }
          }
        },
      },
    },
  }
</script>
<style lang="scss">
    $iconSize: 18px;
    $iconBeforeSize: 5px;
    $iconBeforeBg: #ccc;
    .padding-style {
        dl {
            .icon {
                position: relative;
                margin-right: 10px;
                border: 1px dotted $iconBeforeBg;
                width: $iconSize;
                height: $iconSize;

                &:before {
                    position: absolute;
                    background: $iconBeforeBg;
                    content: '';
                }
            }
            &:only-child {
                .icon {
                    border: $iconBeforeSize - 2 solid $iconBeforeBg;
                    &:before {
                        content: initial;
                    }
                }
            }
            &:nth-child(1) {
                .icon {
                    &:before {
                        top: -1px;
                        width: 100%;
                        height: $iconBeforeSize;
                    }
                }
            }
            &:nth-child(2) {
                .icon {
                    &:before {
                        right: -1px;
                        width: $iconBeforeSize;
                        height: 100%;
                    }
                }
            }
            &:nth-child(3) {
                .icon {
                    &:before {
                        bottom: -1px;
                        width: 100%;
                        height: $iconBeforeSize;
                    }
                }
            }
            &:nth-child(4) {
                .icon {
                    &:before {
                        left: -1px;
                        width: $iconBeforeSize;
                        height: 100%;
                    }
                }
            }
        }
    }

</style>
