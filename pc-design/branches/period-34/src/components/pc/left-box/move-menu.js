import $ from 'jquery'
import dataCache from '../common/data-cache'
import {
  $DOC, $BODY,
  LEFT_BOX, PANNEL_BTN, DESIGN_TERMINAL, LEFT_MENU_ICON, RIGHT_BOX, CONTENT_BOX, BODY_MOVING_MENU, WRAPPER_BTN, DESIGN_MODULE_WRAPPER,
} from '../common/constant-dom'

export default function () {
  let $this, offsetEl, $leftBox, $pannelBtn, $designTerminal, $wrapperBtn, currentIndex, designModuleWrapperWidth,
      leftBoxStyle, designPcStyle, rightBoxStyle, contentBoxStyle, pannelBtnStyle, wrapperBtnStyle,
      initLeft, initTop, Left, Top, initTopRange, initCloseBottomRange, initCloseRightRange, initOpenBottomRange, initOpenRightRange

  $(this.$el).undelegate(LEFT_MENU_ICON, 'mousedown')
  $(this.$el).delegate(LEFT_MENU_ICON, 'mousedown', function (e) {
    if (e.which !== 1) {
      return
    }

    dataCache.isMovedLeftBox = false

    $this           = $(this)
    $designTerminal = $this.closest(DESIGN_TERMINAL)
    $leftBox        = $this.closest(LEFT_BOX)
    $pannelBtn      = $this.closest(PANNEL_BTN)
    $wrapperBtn     = $this.closest(WRAPPER_BTN)
    currentIndex    = $pannelBtn.index()
    leftBoxStyle    = window.getComputedStyle($leftBox[0])
    designPcStyle   = window.getComputedStyle($designTerminal[0])
    rightBoxStyle   = window.getComputedStyle(document.querySelector(RIGHT_BOX))
    contentBoxStyle = window.getComputedStyle(document.querySelector(CONTENT_BOX))
    pannelBtnStyle  = window.getComputedStyle($pannelBtn[0])
    if (dataCache.leftBoxSelectedIndex !== -1) {  //判断是否展开(展开)
      designModuleWrapperWidth = $('.' + DESIGN_MODULE_WRAPPER).eq(currentIndex).width() + parseFloat(pannelBtnStyle.width) / 2
    }
    wrapperBtnStyle      = window.getComputedStyle($wrapperBtn[0])
    initLeft             = parseFloat(leftBoxStyle.left) - e.pageX
    initTop              = parseFloat(leftBoxStyle.top) - e.pageY
    initTopRange         = parseFloat(contentBoxStyle.top) + parseFloat(contentBoxStyle.paddingTop)
    initOpenBottomRange  = parseFloat(designPcStyle.height) - parseFloat(leftBoxStyle.height)
    initOpenRightRange   = parseFloat(designPcStyle.width) - parseFloat(rightBoxStyle.width) - designModuleWrapperWidth
    initCloseBottomRange = parseFloat(designPcStyle.height) - parseFloat(wrapperBtnStyle.height)
    initCloseRightRange  = parseFloat(designPcStyle.width) - parseFloat(rightBoxStyle.width) - parseFloat(pannelBtnStyle.width)
    offsetEl             = { //初始值
      pageX: e.pageX,
      pageY: e.pageY,
    }
    $DOC.on('mousemove.movemenu', mouseMove)
    $DOC.on('mouseup.movemenu', mouseUp)
  })


  function mouseMove(e) {
    if (Math.abs(e.pageX - offsetEl.pageX) + Math.abs(e.pageY - offsetEl.pageY) < 2) {  //移动间距小于2
      return
    }
    if (!dataCache.isMovedLeftBox) {
      dataCache.isMovedLeftBox = true
      $BODY.addClass(BODY_MOVING_MENU)
    }

    Left = initLeft + e.pageX
    Top  = initTop + e.pageY

    Top <= initTopRange && (Top = initTopRange) //向上的
    Left <= 0 && (Left = 0)  //向左的

    //展开时的移动范围
    if (dataCache.leftBoxSelectedIndex !== -1) {
      Top >= initOpenBottomRange && (Top = initOpenBottomRange) //向下
      Left >= initOpenRightRange && (Left = initOpenRightRange)  //向右
    }
    else {  //闭合时的移动范围
      Top >= initCloseBottomRange && (Top = initCloseBottomRange)  //向下
      Left >= initCloseRightRange && (Left = initCloseRightRange)   //向右
    }
    $leftBox.css({'left': Left, 'top': Top})
  }

  function mouseUp() {
    $DOC.off('mousemove.movemenu')
    $DOC.off('mouseup.movemenu')
    $BODY.removeClass(BODY_MOVING_MENU)
    setTimeout(() => {
      if (dataCache.leftBoxSelectedIndex !== -1) {  //判断是否展开
        Top >= initOpenBottomRange && (Top = initOpenBottomRange)   //向下
        Left >= initOpenRightRange && (Left = initOpenRightRange)   //向右
      }
      $leftBox.css({'left': Left, 'top': Top})
      dataCache.isMovedLeftBox = false
    })
  }
}
