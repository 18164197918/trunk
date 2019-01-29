<template>
  <div :class="{'show-set-box': isShowSetBox}" class="base-block">

    <div @click="toggleFoldContent" class="base-iconfont">
      <span class="iconfont iconfont-database"></span>
    </div>

    <div class="base-set-box">
      <div class="tit">数据</div>

      <div class="mb20">
        <label class="d-inline-flex align-center"><input v-model="_static.hasSafeLine" type="checkbox" class="mr5">使用安全线</label>
      </div>

      <div class="grid-list-box">
        <div class="ruler">
          <span v-for="item in 12"></span>
        </div>
        <div class="operate container-wrapper">
          <div class="mask"></div>
          <i class="rulerLine"></i>
          <span v-for="(item,key) in _static.gridList" :class="['col-' + item]">
            <div class="resize-e" @mousedown="downEvent($event,key)"></div>
          </span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import mixinBseModule from '../common/mixin-base-module'
import {
  $DOC, $BODY, BODY_MOVE_RASTER
} from '../common/constant-dom'

let ord, doevent, borderWidArr, downLength, allWidth, rulerWidth,
  moevent, moveLength, moveRang, moveRangAbs, moveRangRound, $rulerLine
export default {
  name: 'base-module-data',
  mixins: [mixinBseModule],
  computed: {
    _static () {
      return this.info.static
    }
  },
  mounted () {
    $rulerLine = $('.rulerLine')
  },
  methods: {
    // 鼠标按下
    downEvent (ev, ordIndex) {
      doevent = ev || event // 鼠标按下事件
      ord = ordIndex // 下标
      allWidth = $('.operate .mask').width() // mask的总宽度
      rulerWidth = Math.round(allWidth / 12) // 每格标尺的宽度
      borderWidArr = [] // 边界线宽度数组
      downLength = doevent.pageX // 鼠标按下距离文档最左侧的距离
      // 将对应的栅格布局的宽度记录在数组中
      for (let i = 0; i < this._static.gridList.length - 1; i++) {
        for (let j = i; j >= 0; j--) {
          !borderWidArr[i] && (borderWidArr[i] = 0)
          borderWidArr[i] += this._static.gridList[j] * rulerWidth
        }
      }
      borderWidArr.push(allWidth)
      borderWidArr.unshift(0)

      $BODY.addClass(BODY_MOVE_RASTER)
      $rulerLine.css({ 'display': 'block', 'left': borderWidArr[ord + 1] })
      $DOC.on('mousemove.moveraster', this.mouseMoveRaster)
      $DOC.on('mouseup.moveraster', this.mouseUpRaster)
    },
    mouseMoveRaster (ev) {
      moevent = ev || event // 鼠标移动事件
      moveLength = moevent.pageX // 鼠标距离文档最左侧的距离
      moveRang = (moveLength - downLength) / rulerWidth // 移动的单位
      moveRangAbs = Math.abs(moveRang) // 移动的单位的绝对值
      moveRangRound = Math.round(moveRang) // 移动的单位的四舍五入值
      //        if (moveRangAbs % 1 <= 0.5 && moveRangAbs <= 1) { //移动未超过半格保持不动
      //        }
      if (moveRangAbs % 1 > 0.5 && moveRangAbs <= 1) { // 移动超过半格，吸附效果
        // 最右不能超过下一个栅格，或者总的宽度的最右边,最左不能超过上一个栅格，或者总的最左边
        if (this._static.gridList[ord] + moveRangRound <= 0 || this._static.gridList[ord + 1] - moveRangRound <= 0) {
          return
        }
        // 重置鼠标初始点击的位置
        if (moveRang > 0) {
          downLength += rulerWidth
        } else {
          downLength -= rulerWidth
        }
        this._static.gridList.splice(ord, 1, this._static.gridList[ord] + moveRangRound)
        this._static.gridList.splice(ord + 1, 1, this._static.gridList[ord + 1] - moveRangRound)
      }
      if (moveRangAbs > 1) { // 移动一次超过了一格，直接移动到对应的位置
        // 最右不能超过下一个栅格，或者总的宽度的最右边,最左不能超过上一个栅格，或者总的最左边
        if (this._static.gridList[ord] + moveRangRound <= 0 || this._static.gridList[ord + 1] - moveRangRound <= 0) {
          return
        }
        downLength += rulerWidth * moveRangRound
        this._static.gridList.splice(ord, 1, this._static.gridList[ord] + moveRangRound)
        this._static.gridList.splice(ord + 1, 1, this._static.gridList[ord + 1] - moveRangRound)
      }
      $rulerLine.css('left', borderWidArr[ord + 1] + moevent.pageX - doevent.pageX)
    },
    mouseUpRaster () {
      $rulerLine.css({ 'display': 'none' })
      $BODY.removeClass(BODY_MOVE_RASTER)
      $DOC.off('mousemove.moveraster')
      $DOC.off('mouseup.moveraster')
    }
  }
}
</script>

<style lang="scss">
  @import "../../../styles/variables";
   body.move-raster{
     cursor: e-resize;
   }
  .grid-list-box {
    position: relative;
    height: 40px;

    .ruler, .operate {
      display: flex;
      position: absolute;
      width: 100%;
      span {
        flex-grow: 1;
      }
    }

    .ruler {
      border-left: 1px #ddd solid;
      top: -7px;
      height: 7px;

      span {
        height: 10px;
        border-right: 1px #ddd solid;
      }
    }
    .operate {
      position: relative;
      .mask {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;
        background: rgba(255, 255, 255, 0);
        width: 100%;
        height: 100%;
      }
      .rulerLine {
        display: none;
        position: absolute;
        border-right: 1px dashed #666;
        height: 40px;
        top: -10px;
      }
      span {
        height: 30px;
        background-color: lighten($primary, 5%);
        border-right: 1px $white solid;
        position: relative;
        .resize-e {
          position: absolute;
          touch-action: none;
          cursor: e-resize;
          width: 7px;
          right: -4px;
          top: 0;
          height: 100%;
          z-index: 100;
        }
        &:nth-last-child(1) {
          border-right: 0;
          .resize-e {
            display: none;
          }
        }
      }

    }
  }
</style>
