<template>
  <div :class="{'show-set-box': isShowSetBox}" class="base-block">

    <div @click="toggleFoldContent" class="base-iconfont">
      <span class="iconfont iconfont-border-radius"></span>
      <div v-if="checkTitleVal" class="dot"></div>
    </div>

    <div class="base-set-box">
      <div class="tit">
        <label>
          <input class="mr5" type="checkbox" v-model="checkTitleVal"/>圆角
        </label>
      </div>
      <div v-if="checkTitleVal">
        <dl class="el-block mb10">
          <dd>
            <label>
              <input class="mr5" type="checkbox" v-model="checkVal"/>等距圆角
            </label>
          </dd>
        </dl>
        <div>
          <dl v-for="(item, key) in currentBorderRadiusArr" class="icon-common-list icon-list-border-radius el-block mb10">
            <dt><div class="icon"></div></dt>
            <base-range-input :css="css" :propName="item" min="0" max="100" step="1" :unitCb="unitCb"></base-range-input>
          </dl>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import mixinBseModule from '../common/mixin-base-module'
  import { UNIT_REG } from '../common/constant'


  let borderRadiusArr      = ['borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
      borderRadiusArrSlice = borderRadiusArr.slice(1),
      borderRadiusInit     = '35px'

  export default {
    name      : 'base-module-radius',
    mixins    : [mixinBseModule],
    data() {
      return {
        checkOne: false,
        checkTwo: true,
      }
    },
    computed  : {
      checkTitleVal   : {
        get() {
          for (let i in this.css) {
            if (i === 'borderRadius' || i === 'borderTopLeftRadius') {
              return true
            }
          }
          return false
        },
        set(bool) {
          if (bool) {
            this.$set(this.css, 'borderRadius', borderRadiusInit)
          }
          else {
            for (let i in borderRadiusArr) {
              this.$delete(this.css, borderRadiusArr[i])
            }
          }
        },
      },
      checkVal        : {
        get() {
          for (let i in this.css) {
            if (i === 'borderTopLeftRadius') {
              return false
            }
          }
          return true
        },
        set(bool) {
          if (bool) {
            this.$set(this.css, 'borderRadius', borderRadiusInit)
            for (let i in borderRadiusArrSlice) {
              this.$delete(this.css, borderRadiusArrSlice[i])
            }
          }
          else {
            let temp = this.css.borderRadius
            this.$delete(this.css, 'borderRadius')
            for (let i in borderRadiusArrSlice) {
              this.$set(this.css, borderRadiusArrSlice[i], temp)
            }
          }
        },
      },
      currentBorderRadiusArr: function () {
        return this.checkVal ? borderRadiusArr.slice(0, 1) : borderRadiusArrSlice
      },
    },
    methods   : {
      unitCb(css, propName) {
        let match     = css[propName].match(UNIT_REG)
        let u         = match[2] === 'px' ? '%' : 'px'
        css[propName] = `${match[1] + u}`
      },
    },
  }
</script>

<style lang="scss">
  $iconSize: 18px;
  $iconBeforeSize: 5px;
  $iconBeforeBg: #ccc;

  .margin-item {
    dt {
      width: 32px !important;
    }
    .icon {
      position: relative;
      border: 1px dotted #aaaaaa;
      width: $iconSize;
      height: $iconSize;
      &:before {
        position: absolute;
        background: $iconBeforeBg;
        content: "";
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
</style>

