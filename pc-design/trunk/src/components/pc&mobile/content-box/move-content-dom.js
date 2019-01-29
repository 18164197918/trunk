import $ from 'jquery'
import Vue from 'vue'
import {dataEdit, dataSite, dataPage, dataCache, dataMethods, constant, constantDom} from '../common'
const { parseFloor, INTERVAL_TIME, $fp } = constant
const { addModule, removeModule } = dataMethods
const {
  DRAG_HANDLE,
  CONTENT_BOX_HEAD, CONTENT_BOX_INNER, CONTENT_BOX_FOOT, CONTAINER_WRAPPER, COL_MARK, COL_MARK_DRAGGING_ON, CONTAINER_DRAGGING_MODULE, USER_MODULE,
  BODY_MOVING_MODULE, COMMON_DRAGGING_MODULE, MODULE_CONTAINER_NAME,
  $DOC, $BODY, $SORTABLE_PLACE_HOLDER, NOT_ON_CONTAINER,
} = constantDom

export default function () {
  let $this,
      event,
      offsetEl,
      intervalState,
      firstData, dataEditAll,

      $startContentBox, $startContainerWrapper, $startColMark,
      $whichContentBox, $oldContentBox,
      $containerWrapper, $oldContainerWrapper,
      $colMark, $oldColMark,
      $startWhichContentBox,
      isContainer,
      $fromPoint,
      modulePositionArr,
      hasRelativeList,
      tempEvtX


  $(this.$el).undelegate(DRAG_HANDLE, 'mousedown')
  $(this.$el).delegate(DRAG_HANDLE, 'mousedown', function (e) {
    if (e.which !== 1) {
      return
    }
    $this = $(this)

    $DOC.on('mousemove.move', mouseMove)
    $DOC.on('mouseup.move', mouseUp)


    $startColMark          = $this.closest(COL_MARK)
    $startContainerWrapper = $this.closest(CONTAINER_WRAPPER)
    $startContentBox       = $this.closest(CONTENT_BOX_INNER + ',' + CONTENT_BOX_HEAD + ',' + CONTENT_BOX_FOOT)
    $oldContentBox         = $()
    $oldColMark            = $()
    $oldContainerWrapper   = $()
    hasRelativeList        = false


    firstData = dataEdit.first()

    offsetEl = {      //初始数据
      offsetX: e.offsetX,
      offsetY: e.offsetY,
      pageX  : e.pageX,
      pageY  : e.pageY,
    }

    intervalState = setInterval(() => {
      if (!dataCache.draggingModuleIsMoved) {
        return false
      }
      $fromPoint        = $fp(isContainer ? tempEvtX : event.pageX, event.pageY)
      $containerWrapper = $fromPoint.closest(CONTAINER_WRAPPER)
      $whichContentBox  = $fromPoint.closest(CONTENT_BOX_INNER + ',' + CONTENT_BOX_HEAD + ',' + CONTENT_BOX_FOOT)
      if (isContainer) {           //是否是容器
        $startContainerWrapper.css({
          top: event.pageY - offsetEl.offsetY,
        })

        if ($whichContentBox.length !== 0) {
          if ($whichContentBox[0] !== $oldContentBox[0]) {
            $whichContentBox.append($SORTABLE_PLACE_HOLDER)
          }
          else if ($containerWrapper.length !== 0) {
            if (event.pageY < $containerWrapper.offset().top + $containerWrapper.height() / 2) {
              $SORTABLE_PLACE_HOLDER.insertBefore($containerWrapper)
            }
            else {
              $SORTABLE_PLACE_HOLDER.insertAfter($containerWrapper)
            }
          }
        }

        $oldContentBox = $whichContentBox
      }
      else {
        $colMark = $fromPoint.closest(COL_MARK)
        if ($colMark.length === 0) {  //移出内容区域
          $containerWrapper.addClass(NOT_ON_CONTAINER)
        }
        else {
          $containerWrapper.removeClass(NOT_ON_CONTAINER)
        }

        if ($containerWrapper[0] !== $oldContainerWrapper[0]) {
          $oldContainerWrapper.removeClass(NOT_ON_CONTAINER)
        }

        if ($colMark[0] !== $oldColMark[0]) {
          $oldColMark.removeClass(COL_MARK_DRAGGING_ON)
          $colMark.addClass(COL_MARK_DRAGGING_ON)
        }

        $oldColMark          = $colMark
        $oldContainerWrapper = $containerWrapper

        /*if(event.shiftKey){
        }else{
        }*/

        modulePositionArr.forEach(item => {
          item.$el.css({
            left: event.pageX - item.offsetX,
            top : event.pageY - item.offsetY,
          })
        })
      }
    }, INTERVAL_TIME)

    return false
  })


  function mouseMove(e) {
    event = e
    if (Math.abs(e.pageX - offsetEl.pageX) + Math.abs(e.pageY - offsetEl.pageY) === 0) {
      return
    }

    if (!dataCache.draggingModuleIsMoved) {
      dataCache.draggingModuleIsMoved = true
      $BODY.addClass(BODY_MOVING_MODULE)
      $fromPoint  = $fp(event.pageX, event.pageY)
      isContainer = firstData.mode === MODULE_CONTAINER_NAME

      if (isContainer) {
        tempEvtX = e.pageX - 100

        $startWhichContentBox = $fromPoint.closest(CONTENT_BOX_HEAD + ',' + CONTENT_BOX_INNER + ',' + CONTENT_BOX_FOOT)

        $SORTABLE_PLACE_HOLDER.css({
          height: $startContainerWrapper.height(),
        }).insertAfter($startContainerWrapper)

        $startContainerWrapper.addClass(CONTAINER_DRAGGING_MODULE)

      }
      else {
        dataEditAll = dataEdit.all()

        let userModuleStyle = window.getComputedStyle($this.closest(USER_MODULE)[0]),
            $thisLeft       = parseFloat(userModuleStyle.left),
            $thisTop        = parseFloat(userModuleStyle.top)

        modulePositionArr = dataEdit.all().map(item => {
          let assist  = item.info.assist,
              elStyle = assist.elStyle,
              $el     = $(assist.el),
              temp    = {
                $el,
                info   : item.info,
                offsetX: $thisLeft - parseFloat(elStyle.left) + offsetEl.offsetX,
                offsetY: $thisTop - parseFloat(elStyle.top) + offsetEl.offsetY,
              }

          if (elStyle.position === 'relative' && item.info.name === 'module-list' && !hasRelativeList) {
            hasRelativeList = true
            $startContainerWrapper.css('min-height', window.getComputedStyle($startContainerWrapper[0]).height)
          }

          $el.css({
            width : elStyle.width,
            height: elStyle.height,
            left  : event.pageX - temp.offsetX,
            top   : event.pageY - temp.offsetY,
          }).addClass(COMMON_DRAGGING_MODULE)

          return temp
        })
      }
    }
  }

  function modifyCssPosition(obj) {
    let dataConfig = obj.dataConfig,
        $pEl, pElStyle, $pElOffset, sequence,
        pElLeftBorderWidth, pElTopBorderWidth,
        pElInnerWidth, pElInnerHeight


    dataEditAll.forEach((item, index) => {
      let css     = item.info.cssObj.self.css,
          elStyle = item.info.assist.elStyle

      if ($pEl === undefined) {
        if (item.mode.indexOf('children-') !== -1) {
          $pEl = $(item.info.assist.pEl)
        }
        else {
          $pEl = obj.$pEl
        }
        pElStyle   = window.getComputedStyle($pEl[0])
        $pElOffset = $pEl.offset()
        sequence   = $pEl.index()
      }

      if (item.mode.indexOf('children-') === -1) {
        item.info.sequence = sequence
      }

      pElLeftBorderWidth = parseFloat(pElStyle.borderLeftWidth)
      pElTopBorderWidth  = parseFloat(pElStyle.borderTopWidth)
      pElInnerWidth      = parseFloat(pElStyle.width) - pElLeftBorderWidth - parseFloat(pElStyle.borderRightWidth)
      pElInnerHeight     = parseFloat(pElStyle.height) - pElTopBorderWidth - parseFloat(pElStyle.borderBottomWidth)

      css.left = css.left.indexOf('%') !== -1 ? (parseFloor((parseFloat(elStyle.left) - $pElOffset.left - pElLeftBorderWidth) / pElInnerWidth * 100) + '%') : parseFloor(parseFloat(elStyle.left) - $pElOffset.left - pElLeftBorderWidth) + 'px'
      css.right && Vue.delete(css, 'right')

      if (css.top) {
        css.top = css.top.indexOf('%') !== -1 ? (parseFloor((parseFloat(elStyle.top) - $pElOffset.top - pElTopBorderWidth) / pElInnerHeight * 100) + '%') : parseFloor(parseFloat(elStyle.top) - $pElOffset.top - pElTopBorderWidth) + 'px'

        css.bottom && Vue.delete(css, 'bottom')


        //列表相对定位处理
        if (css.position && css.position.indexOf('relative') !== -1) {
          css.marginBottom = css.top
        }
      }
      if (css.width && css.width.indexOf('%') !== -1) {
        css.width = parseFloor(parseFloat(elStyle.width) / pElInnerWidth * 100) + '%'
      }
      if (css.height && css.height.indexOf('%') !== -1) {
        css.height = parseFloor(parseFloat(elStyle.height) / pElInnerHeight * 100) + '%'
      }

      modulePositionArr[index].$el.removeClass(COMMON_DRAGGING_MODULE).removeAttr('style')
    })

    if (obj.modifyConfig) {
      dataEditAll.sort((a, b) => {
        return a.indexModule < b.indexModule ? 1 : -1
      })

      dataEditAll.forEach(item => {
        addModule({
          parent: dataConfig[$containerWrapper.index()],
          data  : removeModule(item),
        })
      })
      dataEdit.removeAll()

      setTimeout(() => {
        modulePositionArr.forEach(item => {
          dataEdit.push(item.info.assist.dAssist())
        })
      })
    }
  }

  function mouseUp(e) {
    clearInterval(intervalState)

    $DOC.off('mousemove.move')
    $DOC.off('mouseup.move')

    if (!dataCache.draggingModuleIsMoved) {
      $BODY.removeClass(BODY_MOVING_MODULE)
      isContainer = false
      return false
    }

    let dataConfig

    $fromPoint        = $fp(isContainer ? tempEvtX : e.pageX, e.pageY)
    $containerWrapper = $fromPoint.closest(CONTAINER_WRAPPER)
    $colMark          = $fromPoint.closest(COL_MARK)


    if (($whichContentBox = $fromPoint.closest(CONTENT_BOX_INNER)).length) {
      dataConfig = dataPage.get('config')
    }
    else if (($whichContentBox = $fromPoint.closest(CONTENT_BOX_HEAD)).length) {
      dataConfig = dataSite.get('headConfig')
    }
    else if (($whichContentBox = $fromPoint.closest(CONTENT_BOX_FOOT)).length) {
      dataConfig = dataSite.get('footConfig')
    }

    if (isContainer) {
      if ($whichContentBox.length) {
        let index = $SORTABLE_PLACE_HOLDER.index()

        $startWhichContentBox[0] === $whichContentBox[0] && --index

        addModule({
          index,
          parent: dataConfig,
          data  : removeModule(firstData),
          mode  : firstData.mode,
        })
      }

      dataEdit.removeAll()
      $SORTABLE_PLACE_HOLDER.remove()
      $startContainerWrapper.removeClass(CONTAINER_DRAGGING_MODULE).removeAttr('style')
    }
    else if ($containerWrapper.length && $colMark.length) {
      if ($whichContentBox[0] !== $startContentBox[0] || $containerWrapper[0] !== $startContainerWrapper[0]) {
        modifyCssPosition({$pEl: $colMark, modifyConfig: true, dataConfig})
      }
      else {
        modifyCssPosition({$pEl: $colMark})
      }
    }
    else {
      modulePositionArr.forEach(item => {
        item.$el.removeClass(COMMON_DRAGGING_MODULE).removeAttr('style')
      })
    }

    if (hasRelativeList) {
      hasRelativeList = false
      $startContainerWrapper.css('min-height', '')
    }

    $BODY.removeClass(BODY_MOVING_MODULE)
    $colMark.removeClass(COL_MARK_DRAGGING_ON)
    $oldColMark.removeClass(COL_MARK_DRAGGING_ON)
    $containerWrapper.removeClass(NOT_ON_CONTAINER)
    isContainer = false
  }
}
