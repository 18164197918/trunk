<template>
  <dd @mousedown.stop>
    <div class="current-color">
      <span @click="toggleColorPicker" :style="{'background-color': color}"></span>
      <chrome-picker v-if="currentRandomColor === dataCache.colorPickerStatus" v-model="color" :class="[vcPosition]"></chrome-picker>
    </div>
    <div v-if="showHistory" class="history-colors">
      <span v-for="item in dataTools.historyColorList" @click="color=item" :style="{'background-color': item}"></span>
    </div>
  </dd>
</template>

<script>
  import { Chrome } from 'vue-color'
  import {dataCache, dataTools} from '../common'

  export default {
    props     : {
      showHistory: {default: false},
      setCb      : {type: Function},
      getCb      : {type: Function},
      index      : {},
      css        : {},
      propName   : {},
      type       : {},
      vcPosition : {default: 'bottom-center'},
    },
    data() {
      return {
        dataCache,
        dataTools,
        currentRandomColor: String(Math.random()).slice(2),
        isShowPicker      : false,
      }
    },
    computed  : {
      color: {
        get() {
          if (this.getCb) {
            return this.getCb(this.index)
          }
          else {
            return this.css[this.propName] || ''
          }
        },
        set(value) {
          if (typeof value === 'string') {
            value = {
              rgba_val: value,
            }
          }
          else {
            value.rgba_val = 'rgba(' + value.rgba.r + ',' + value.rgba.g + ',' + value.rgba.b + ',' + value.rgba.a + ')'
          }


          if (this.setCb) {
            this.setCb(value, this.index)
          }
          else {
            this.$set(this.css, this.propName, typeof value === 'string' ? value : value.rgba_val)
          }
        },
      },
    },
    methods   : {
      toggleColorPicker() {
        if (this.dataCache.colorPickerStatus === false) {
          this.dataCache.colorPickerStatus = this.currentRandomColor
        }
        else if (this.dataCache.colorPickerStatus === this.currentRandomColor) {
          this.dataCache.colorPickerStatus = false
        }
        else {
          this.dataCache.colorPickerStatus = this.currentRandomColor
        }
        //this.isShowPicker = !this.isShowPicker
      },
    },
    components: {
      'chrome-picker': Chrome,
    },
  }
</script>


<style lang="scss">
  /*
      相对于 span 标签的方位

      top-left    | top-center  |   top-right
      ------------------------ -------------
                  |             |
      -------------------------------------
      bottom-left |bottom-center|   bottom-right
  */
  $span-height: 32px;

  .left-box,
  .right-box {
    .current-color {
      position: relative;
      flex: auto;
      margin-top: 2px;
      margin-left: 5px;
      height: $span-height;
      cursor: pointer;

      > span {
        display: block;
        height: inherit;
        border: 1px #e4e4e4 solid;
        border-radius: 3px;
      }
      .vc-chrome {
        z-index: 1;
        position: absolute;
        /*left: -45px;
        top: 33px;*/
        &.top-left {
          left: 0;
        }
        &.top-right {
          right: 0;
        }
        &.top-center {
          left: 50%;
          transform: translateX(-50%);
        }
        &.bottom-left {
          left: 0;
          bottom: $span-height;
        }
        &.bottom-center {
          left: 50%;
          bottom: $span-height;
          transform: translateX(-50%);
        }
        &.bottom-right {
          right: 0;
          bottom: $span-height;
        }

      }
    }
    .history-colors {
      margin-left: 2%;
      display: flex;
      flex-wrap: wrap;
      width: 80px;
      height: 30px;
      flex: none;

      > span {
        margin: 1px;
        width: 14px;
        height: 14px;
        cursor: pointer;
      }
    }

    /*修改颜色选择器默认样式*/
    .vc-chrome {
      width: 200px;
    }
    .vc-chrome-body {
      padding: 10px 10px 5px;
    }
    .vc-chrome-fields-wrap {
      padding-top: 10px;
    }
  }
</style>
