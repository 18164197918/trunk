import $ from 'jquery'
import dataCache from '../../common/data-cache'
import dataSite from '../../common/data-site'
import dataPage from '../../common/data-page'
import dataEdit from '../../common/data-edit'
import { createModule, addModule } from '../../common/data-methods'
import { UNIT_REG, toString, $fp, convertUnit } from '../../common/constant'

import {
  USER_MODULE, CONTENT_BOX, CONTENT_BOX_HEAD, CONTENT_BOX_INNER, CONTENT_BOX_FOOT, CONTAINER_WRAPPER, COL_MARK, COL_MARK_DRAGGING_ON,
  CONTAINER_WRAPPER_DRAGGING_ON, BODY_ADDING_MODULE, MODULE_CONTAINER_NAME, NOT_ON_CONTAINER,
  $DOC, $BODY, $MODULE_CLONED, $SORTABLE_PLACE_HOLDER,
} from '../../common/constant-dom'

//console.log($._data($DOC[0], 'events'))
if (process.env.NODE_ENV === 'development') {
  window.$ = $
  window.c = dataPage.get()
  window.s = dataSite.get()
  window.d = dataEdit.all()
  window.g = function () {
    let info, children, obj = dataEdit.all()[0]
    if (obj) {
      info     = obj.info
      children = obj.children
      info     = $.extend(true, {}, info)
      delete info.assist

      if (children) {
        children = $.extend(true, [], children)
        children.forEach(item => {
          delete item.info.assist
        })
        return JSON.stringify({info, children}, null, 2).replace(/\"([^(\")"]+)\":/g, '$1:')
      }

      return JSON.stringify({info}, null, 2).replace(/\"([^(\")"]+)\":/g, '$1:')
    }
    else {
      return '没有数据'
    }
  }
}

export default function () {

  let _this         = this,
      event,
      moduleData,
      isModuleDataArray,
      isMoved,
      isPlaceHolderAppend,
      intervalState,
      $whichContentBox,
      $oldContentBox,
      $containerWrapper,
      $oldContainerWrapper,
      $colMark,
      $oldColMark,
      $fromPoint,
      offsetEl      = {},
      contentBoxObj = {},
      intervalTime  = 17,
      $contentBox   = $(CONTENT_BOX)

  $(this.$el).undelegate(USER_MODULE, 'mousedown')
  $(this.$el).delegate(USER_MODULE, 'mousedown', function (e) {

    if ($(this).parent().parent(USER_MODULE).length > 0) {
      return
    }

    let $this           = $(this)
    isMoved             = false
    isPlaceHolderAppend = false
    moduleData          = _this.selectedModule2List.list[$this.index()]
    isModuleDataArray   = toString.call(moduleData) === '[object Array]'


    contentBoxObj.width  = $contentBox.width()
    $oldContentBox       = undefined
    $oldContainerWrapper = $()
    $oldColMark          = $()

    offsetEl = {
      offsetX: e.offsetX,
      offsetY: e.offsetY,
      width  : $this.width(),
      height : $this.height(),
    }

    $BODY.addClass(BODY_ADDING_MODULE).append($MODULE_CLONED)

    $MODULE_CLONED.css({
      display: 'none',
      width  : offsetEl.width,
      height : offsetEl.height,
      left   : $this.offset().left,
      top    : $this.offset().top,
    })

    $DOC.on('mousemove.create', mouseMove)
    $DOC.on('mouseup.create', mouseUp)

    intervalState = setInterval(() => {
      if (!isMoved) {
        return false
      }

      $fromPoint        = $fp(event.pageX, event.pageY)
      $containerWrapper = $fromPoint.closest(CONTAINER_WRAPPER)
      $whichContentBox  = $fromPoint.closest(CONTENT_BOX_INNER + ',' + CONTENT_BOX_HEAD + ',' + CONTENT_BOX_FOOT)

      /*容器被拖拽时操作*/
      if (isModuleDataArray || moduleData.info.name === MODULE_CONTAINER_NAME) {
        if ($whichContentBox.length !== 0) {
          $MODULE_CLONED.css({
            width : contentBoxObj.width,
            height: 200,
            left  : 0,
            top   : event.pageY - offsetEl.offsetY,
          })

          if (!isPlaceHolderAppend) {
            $whichContentBox.append($SORTABLE_PLACE_HOLDER)
            isPlaceHolderAppend = true
          }
          else if ($whichContentBox[0] !== $oldContentBox[0]) {
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

          $oldContentBox = $whichContentBox
        }
      }
      else {
        $MODULE_CLONED.css({
          width : offsetEl.width,
          height: offsetEl.height,
          left  : event.pageX - offsetEl.offsetX,
          top   : event.pageY - offsetEl.offsetY,
        })

        $colMark = $fromPoint.closest(COL_MARK)

        if ($colMark.length === 0) {
          $containerWrapper.addClass(NOT_ON_CONTAINER)
        }
        else {
          $containerWrapper.removeClass(NOT_ON_CONTAINER)

          if ($colMark[0] !== $oldColMark[0]) {
            $oldColMark.removeClass(COL_MARK_DRAGGING_ON)
            $colMark.addClass(COL_MARK_DRAGGING_ON)
          }

          $oldContainerWrapper = $containerWrapper
          $oldColMark          = $colMark
        }

        if ($containerWrapper[0] !== $oldContainerWrapper[0]) {
          $oldContainerWrapper.removeClass(NOT_ON_CONTAINER)
        }
      }
    }, intervalTime)

    return false
  })

  function mouseMove(e) {
    event = e
    if (!isMoved) {
      isMoved = true
      $MODULE_CLONED.show()
    }
  }

  function mouseUp(e) {
    clearInterval(intervalState)

    let fpIndex, $offset, dataConfig

    isMoved = false
    $DOC.off('mousemove.create')
    $DOC.off('mouseup.create')
    $MODULE_CLONED.remove()
    $fromPoint        = $fp(e.pageX, e.pageY)
    fpIndex           = $fromPoint.index()
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

    if ((isModuleDataArray || moduleData.info.name === MODULE_CONTAINER_NAME) && ($whichContentBox.length !== 0)) {
      addModule({
        data  : createModule(moduleData),
        mode  : MODULE_CONTAINER_NAME,
        index : $SORTABLE_PLACE_HOLDER.index(),
        parent: dataConfig,
      })
      dataCache.leftBoxSelectedIndex = -1
    }
    else if (moduleData.info.name !== MODULE_CONTAINER_NAME && $colMark.length !== 0) {

      $offset = $fromPoint.offset()

      //console.log(window.getComputedStyle($fromPoint[0]))

      let data, dataSelfCss, parentSelfCss,
          cssWidth, minHeight, match,
          cssLeft     = e.pageX - $offset.left - offsetEl.offsetX,
          indexCon    = $containerWrapper.index(),
          parent      = dataConfig[indexCon],
          css         = {left: cssLeft + 'px', top: e.pageY - $offset.top - offsetEl.offsetY + 'px'},
          temp        = convertUnit({
            css,
            props   : {left: '%', top: 'px'},
            pElStyle: window.getComputedStyle($fromPoint[0]),
          }),
          parentWidth = parent.info.static.hasSafeLine ? parseInt(dataSite.get('safeLineWidth')) : $containerWrapper.width()


      /**
       * 修正模块位置
       * 1.模块的left、top 不能为负
       * 2.容器的最小高度要大于等于内部模块的位置
       * 3.模块的右侧不能超出
       */
      css.left = (temp.left < 0 ? 0 : temp.left) + '%'
      css.top       = (temp.top < 0 ? 0 : temp.top) + 'px'
      data          = createModule(moduleData, {info: {sequence: fpIndex, cssObj: {self: {css}}}})
      dataSelfCss   = data.info.cssObj.self.css
      parentSelfCss = parent.info.cssObj.self.css

      if (
        dataSelfCss.height
        && (match = dataSelfCss.height.match(UNIT_REG))
        && match[2] === 'px'
        && (minHeight = parseInt(dataSelfCss.top) + parseInt(match[1]))
        && parseInt(parentSelfCss.minHeight) < minHeight
      ) {
        parentSelfCss.minHeight = minHeight + 'px'
      }

      if (
        dataSelfCss.width
        && (match = dataSelfCss.width.match(UNIT_REG))
        && (cssWidth = +(match[2] === '%' ? parentWidth * match[1] / 100 : match[1]))
        && cssWidth + cssLeft > parentWidth
      ) {
        dataSelfCss.left = (parentWidth - cssWidth) / parentWidth * 100 + '%'
      }

      addModule({
        data,
        parent,
      })
      setTimeout(() => {
        dataEdit.removeAll()
        dataEdit.push(data.info.assist.dAssist())
      })

      dataCache.leftBoxSelectedIndex = -1
    }

    $SORTABLE_PLACE_HOLDER.remove()
    $BODY.removeClass(BODY_ADDING_MODULE)
    $colMark.removeClass(COL_MARK_DRAGGING_ON)
    $oldColMark.removeClass(COL_MARK_DRAGGING_ON)
    $containerWrapper.removeClass(NOT_ON_CONTAINER)
    $containerWrapper.removeClass(CONTAINER_WRAPPER_DRAGGING_ON)
    $oldContainerWrapper.removeClass(NOT_ON_CONTAINER)
    $oldContainerWrapper.removeClass(CONTAINER_WRAPPER_DRAGGING_ON)
  }
}
