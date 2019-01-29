<template>
  <div class="sort-list-ul">
    <slot></slot>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { $DOC, $BODY, SORT_LIST_ITEM, BODY_SORT_LIST, $PLACE_HOLDER, SORT_LIST_UL, DRAGGING } from '../pc/common/constant-dom'

  let isSortList, currentIndex, insertIndex, itemStyle, parentStyle,
      itemCol, itemRow, pEl, chEl, chElLength, itemWidth, itemHeight, itemRealWidth, itemRealHeight,
      offsetEl, historyEl, currentEl,
      dirX, dirY, initTop, initLeft, Top, Left, minMoveTop, maxMoveTop, minMoveLeft, maxMoveLeft,
      $SORT_LIST_ITEM, oldItemValue, newItemValue, historyCol, historyRow, currentCol, currentRow,
      defaultCance = ['input', 'textarea', 'button', 'select', 'option']

  function concat(arr1, arr2, arr3) {
    if (arguments.length <= 1) {
      return false
    }
    var concat_ = function (arr1, arr2) {
      var arr = arr1.concat()
      for (var i = 0; i < arr2.length; i++) {
        arr.indexOf(arr2[i]) === -1 ? arr.push(arr2[i]) : 0
      }
      return arr
    }
    var result  = concat_(arr1, arr2)
    for (var i = 2; i < arguments.length; i++) {
      result = concat_(result, arguments[i])
    }
    return result
  }

  export default {
    props: {
      options: {
        data       : null, // 数据列表
        axis       : null, // 拖拽的方向
        placeholder: null, // 占位虚拟框的类名
        handle     : null, // 指定的可拖拽元素的类名
        beforeStart: null, // 开始之前处理函数
        stop       : null, // 结束函数
        cancel     : null, // 取消排序元素选择器
      },
    },
    mounted() {
      $(this.$el).off('mousedown')

      $(this.$el).on('mousedown', '> *', e => {
        if (e.which !== 1) {
          return
        }
        if (this.options.handle) { // 假如有handle参数
          if (!$(e.target).hasClass(this.options.handle)) {
            return
          }
        }
        if (this.options.cancel) { // 假如有取消排序元素选择器
          let cancelArr = concat(this.options.cancel.split(','), defaultCance),
              btn       = false
          cancelArr.forEach(item => {
            let cancelSelect = $(item, $(e.currentTarget))
            for (let i = 0; i < cancelSelect.length; i++) {
              if (cancelSelect[i] == e.target) {
                btn = true
              }
            }
          })
          if (btn) {
            return
          }
        }


        pEl            = this.$el // 父元素
        chEl           = $(pEl.children) // 子元素
        chElLength     = chEl.length // 子元素的个数
        isSortList     = false // 是否移动开关
        currentIndex   = $(e.currentTarget).index() // 获取当前元素的下标
        itemStyle      = window.getComputedStyle(chEl[currentIndex]) // 获取移动项的样式
        parentStyle    = window.getComputedStyle(pEl) // 获取列表盒子的样式
        itemWidth      = parseFloat(itemStyle.width) + parseFloat(itemStyle.marginLeft) + parseFloat(itemStyle.marginRight) // 每一项占据的宽度
        itemHeight     = parseFloat(itemStyle.height) + parseFloat(itemStyle.marginTop) + parseFloat(itemStyle.marginBottom) // 每一项占据的高度
        itemRealWidth  = parseFloat(window.getComputedStyle(e.currentTarget).width) // 每一项的真实的宽度
        itemRealHeight = parseFloat(itemStyle.height) //     每一项的真实的高度
        itemCol        = parseInt(parseFloat(parentStyle.width) / itemWidth) // 列数
        itemRow        = Math.ceil(chElLength / itemCol) // 行数
        initTop        = itemHeight * parseInt(currentIndex / itemCol) // 初始top值
        initLeft       = itemWidth * (currentIndex % itemCol) // 初始Left值
        minMoveTop     = -itemHeight / 2 + parseFloat(itemStyle.marginTop) // 向上最大的范围
        maxMoveTop     = parseFloat(parentStyle.height) - itemHeight / 2 // 向下最大的范围
        minMoveLeft    = -itemRealWidth / 2 + parseFloat(itemStyle.marginLeft) // 向左最大的范围
        maxMoveLeft    = parseFloat(parentStyle.width) - itemRealWidth / 2 // 向右最大的范围
        offsetEl       = { // 初始值
          pageX: e.pageX,
          pageY: e.pageY,
        }
        historyEl      = offsetEl // 历史坐标点
        currentEl      = offsetEl // 当前坐标点
        historyCol     = currentIndex % itemCol // 历史列位置
        historyRow     = parseInt(currentIndex / itemCol) // 历史行位置

        if (typeof this.options.beforeStart === 'function' && this.options.beforeStart(e, {startIndex: currentIndex}) === false) {
          return
        }
        // 添加占位符
        if (this.options.placeholder) { // 假如参数中有占位虚拟框
          $PLACE_HOLDER.addClass(this.options.placeholder) // 占位虚拟框
        }
        else { // 假如参数中没有占位的虚拟框,则生成默认的占位虚拟框
          $PLACE_HOLDER.addClass('sort-list-placeholder  ' + chEl.eq(currentIndex).attr('class'))
          $PLACE_HOLDER.css({'height': itemRealHeight, 'width': itemRealWidth})
        }
        $PLACE_HOLDER.insertBefore(chEl.eq(currentIndex))
        // 给当前项加上移动的类名
        chEl.eq(currentIndex).addClass(SORT_LIST_ITEM)
        $SORT_LIST_ITEM = $('.' + SORT_LIST_ITEM) // 当前移动项
        // 绑定事件

        $DOC.on('mousemove.movestaticdata', mouseMoveSortList)
        $DOC.on('mouseup.movestaticdata', mouseUpSortList)

        if (this.options.axis === 'y') { // 拖拽的方向为y轴
          $SORT_LIST_ITEM.css('top', initTop)
        }
        else if (this.options.axis === 'x') {
          // 拖拽的方向为x轴
          $SORT_LIST_ITEM.css('left', initLeft)
        }
        else {
          // 随意拖拽
          $SORT_LIST_ITEM.css({'top': initTop, 'left': initLeft})
        }
//        debugger
      })

      let mouseMoveSortList = (e) => { // 鼠标移动
        if (!isSortList) {
          isSortList = true
          $BODY.addClass(BODY_SORT_LIST)
          $(SORT_LIST_UL).addClass(DRAGGING)
        }
        Left = e.pageX - offsetEl.pageX + initLeft
        Top  = e.pageY - offsetEl.pageY + initTop

        historyEl = {
          pageX: currentEl.pageX,
          pageY: currentEl.pageY,
        }
        currentEl = {
          pageX: e.pageX,
          pageY: e.pageY,
        }

        if (currentEl.pageX > historyEl.pageX) {
          dirX = 'right'
        }
        else if (currentEl.pageX < historyEl.pageX) {
          dirX = 'left'
        }
        else {
          dirX = 'none'
        }
        if (currentEl.pageY > historyEl.pageY) {
          dirY = 'bottom'
        }
        else if (currentEl.pageY < historyEl.pageY) {
          dirY = 'top'
        }
        else {
          dirY = 'none'
        }

        Top <= minMoveTop && (Top = minMoveTop) // 向上范围
        Top >= maxMoveTop && (Top = maxMoveTop) // 向下范围
        Left <= minMoveLeft && (Left = minMoveLeft) // 向左范围
        Left >= maxMoveLeft && (Left = maxMoveLeft) // 向右范围

        if (this.options.axis === 'y') { // 拖拽的方向为y轴
          // 动态地插入虚拟框
          insertIndex = parseInt($SORT_LIST_ITEM[0].offsetTop / itemHeight)
          if ($SORT_LIST_ITEM[0].offsetTop % itemHeight <= 1) {
            $PLACE_HOLDER.insertBefore(chEl.eq(insertIndex)) // 插入虚拟框
          }
          else {
            $PLACE_HOLDER.insertAfter(chEl.eq(insertIndex)) // 插入虚拟框
          }
          $SORT_LIST_ITEM.css('top', Top)
        }
        else if (this.options.axis === 'x') {
          // 拖拽的方向为x轴
          insertIndex = parseInt($SORT_LIST_ITEM[0].offsetLeft / itemWidth)
          if ($SORT_LIST_ITEM[0].offsetLeft % itemWidth <= 1) {
            $PLACE_HOLDER.insertBefore(chEl.eq(insertIndex)) // 插入虚拟框
          }
          else {
            $PLACE_HOLDER.insertAfter(chEl.eq(insertIndex)) // 插入虚拟框
          }
          $SORT_LIST_ITEM.css('left', Left)
        }
        else { // 随意拖拽
          // 根据移动方向计算
          if (dirX === 'left') {
            if (historyCol - 1 >= 0) { // 向左能找到元素
              if (Math.abs($SORT_LIST_ITEM[0].offsetLeft - (historyCol - 1) * itemWidth) <= itemWidth / 2) {
                currentCol = historyCol - 1
                historyCol = currentCol
              }
            }
          }
          else if (dirX === 'right') {
            if (historyCol + 1 < itemCol) { // 向左能找到元素
              if (Math.abs($SORT_LIST_ITEM[0].offsetLeft - (historyCol + 1) * itemWidth) <= itemWidth / 2) {
                currentCol = historyCol + 1
                historyCol = currentCol
              }
            }
          }
          else {
            currentCol = historyCol
          }

          if (dirY === 'top') {
            if (historyRow - 1 >= 0) { // 向上能找到元素
              if (Math.abs($SORT_LIST_ITEM[0].offsetTop - (historyRow - 1) * itemHeight) <= itemHeight / 2) {
                currentRow = historyRow - 1
                historyRow = currentRow
              }
            }
          }
          else if (dirY === 'bottom') {
            if (historyRow + 1 < itemRow) { // 向下能找到元素
              if (Math.abs($SORT_LIST_ITEM[0].offsetTop - (historyRow + 1) * itemHeight) <= itemHeight / 2) {
                currentRow = historyRow + 1
                historyRow = currentRow
              }
            }
          }
          else {
            currentRow = historyRow
          }
          insertIndex = currentRow * itemCol + currentCol
          if (currentIndex >= insertIndex) {
            $PLACE_HOLDER.insertBefore(chEl.eq(insertIndex)) // 插入虚拟框
          }
          else {
            $PLACE_HOLDER.insertAfter(chEl.eq(insertIndex)) // 插入虚拟框
          }

          $SORT_LIST_ITEM.css({'top': Top, 'left': Left})
        }
      }

      let mouseUpSortList = (e) => {
        // 移除事件
        $DOC.off('mousemove.movestaticdata')
        $DOC.off('mouseup.movestaticdata')

        if (isSortList) {
          // 计算插入的位置  （用数组模拟当前元素的排序，先删掉拖拽元素，再计算占位元素在列表中的位置） ? 有没有更好的计算方式
          let arr = []
          for (let i = 0; i < chElLength; i++) {
            arr[i] = ''
          }
          arr.splice($PLACE_HOLDER.index(), 1, 'index')
          arr.splice($SORT_LIST_ITEM.index(), 1)
          insertIndex = arr.indexOf('index')

          // 改变dataList的数据  (目前只是通过改变数据来改变dom，但是没有数据，dom就没改变)
          if (currentIndex !== insertIndex) {
            oldItemValue = this.options.data[currentIndex] // 旧值
            newItemValue = this.options.data[insertIndex] // 新值
            this.options.data.splice(currentIndex, 1, newItemValue)
            this.options.data.splice(insertIndex, 1, oldItemValue)
          }
        }
        else {
          insertIndex = currentIndex
        }

        $BODY.removeClass(BODY_SORT_LIST)
        $(SORT_LIST_UL).removeClass(DRAGGING)
        $PLACE_HOLDER.remove() // 去掉虚拟框
        chEl.eq(currentIndex).removeClass(SORT_LIST_ITEM) // 移除拖拽类名
        $SORT_LIST_ITEM.css({'top': 'unset', 'left': 'unset'}) // ? 去除类名无效，因为js给的是css ，直接绑定到行内style上
        isSortList = false
        typeof this.options.stop === 'function' && this.options.stop(e, {startIndex: currentIndex, stopIndex: insertIndex}, this.options)
      }
    },
  }
</script>
<style lang="scss">
  @import "../../styles/module-assist-pc";

  .sort-list-ul {
    position: relative !important;
    max-height: calc(100% - #{$design-pc-top-height} - 30px);
    overflow-y: scroll;
    &::-webkit-scrollbar { /*滚动条整体样式*/
      width: 0; /*高宽分别对应横竖滚动条的尺寸*/
      height: 0;
    }
    &.dragging {
      cursor: move !important;
      user-select: none;
    }
    .sort-list-item {
      cursor: move;
      pointer-events: none;
      position: absolute !important;
      z-index: 1000;
    }
    .sort-list-placeholder {
      background: #cccccc;
    }
  }
</style>
