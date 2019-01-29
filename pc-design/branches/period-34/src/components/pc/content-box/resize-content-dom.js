import $ from 'jquery'
import dataEdit from '../common/data-edit'
import dataCache from '../common/data-cache'
import {
  parseFloor,
} from '../common/constant'
import {
  RESIZABLE_HANDLE,
  BODY_RESIZING_MODULE, USER_MODULE, COMMON_RESIZING_MODULE, MODULE_CONTAINER_NAME,
  $DOC, $BODY,
} from '../common/constant-dom'
import { resizeRelativePositionVertical } from '../common/data-methods'

export default function () {

  let $this,
      offsetEl

  $DOC.undelegate(RESIZABLE_HANDLE, 'mousedown')
  $DOC.delegate(RESIZABLE_HANDLE, 'mousedown', function (e) {
    //console.log('.resizable-handle  mousedown')
    if (e.which !== 1) {
      return
    }

    //console.log($(this))

    $DOC.on('mousemove.resize', mouseMove)
    $DOC.on('mouseup.resize', mouseUp)
    $this = $(this)

    let $el = $this.closest(USER_MODULE),
        el  = $el[0]

    offsetEl = {
      $el,
      mode     : undefined,
      pageX    : e.pageX,
      pageY    : e.pageY,
      direction: $this.attr('class').match(/resize-(\w+)/)[1],
    }


    dataEdit.all().forEach(item => {
      let assist = item.info.assist
      if (assist.el === el) {
        let elStyle       = assist.elStyle
        offsetEl.mode     = item.mode
        offsetEl.info     = item.info
        offsetEl.elStyle  = elStyle
        offsetEl.pElStyle = assist.pElStyle
        offsetEl.left     = parseFloat(elStyle.left)
        offsetEl.top      = parseFloat(elStyle.top)
        offsetEl.width    = parseFloat(elStyle.width)
        offsetEl.height   = parseFloat(elStyle.height)
        offsetEl.css      = item.info.cssObj.self.css

        if (item.mode === 'module-list') {
          offsetEl.innerGroupCss = item.info.cssObj.innerGroup.css

          if (offsetEl.direction === 's' || offsetEl.direction === 'e') {
            offsetEl.$el.css({
              width : e.pageX - offsetEl.pageX + offsetEl.width + 'px',
              height: e.pageY - offsetEl.pageY + offsetEl.height + 'px',
            })
          }
        }
        else if (item.mode === MODULE_CONTAINER_NAME) {
          assist.el.style.height = elStyle.height
        }
      }
    })

    $BODY.addClass(BODY_RESIZING_MODULE)
    $el.addClass(COMMON_RESIZING_MODULE)


    return false
  })

  function mouseMove(e) {
    if (!dataCache.draggingModuleIsMoved) {
      dataCache.draggingModuleIsMoved = true
    }
    if (offsetEl.direction === 'e') {
      offsetEl.$el.css({
        width: e.pageX - offsetEl.pageX + offsetEl.width + 'px',
      })
    }
    else if (offsetEl.direction === 's') {
      offsetEl.$el.css({
        height: e.pageY - offsetEl.pageY + offsetEl.height + 'px',
      })
    }
    else if (offsetEl.direction === 'w') {
      offsetEl.$el.css({
        left : e.pageX - offsetEl.pageX + offsetEl.left + 'px',
        width: offsetEl.pageX - e.pageX + offsetEl.width + 'px',
      })
    }
    else if (offsetEl.direction === 'n') {
      offsetEl.$el.css({
        top   : e.pageY - offsetEl.pageY + offsetEl.top + 'px',
        height: offsetEl.pageY - e.pageY + offsetEl.height + 'px',
      })
    }
    else if (offsetEl.direction === 'se') {
      offsetEl.$el.css({
        width : e.pageX - offsetEl.pageX + offsetEl.width + 'px',
        height: e.pageY - offsetEl.pageY + offsetEl.height + 'px',
      })
    }
  }

  function mouseUp() {
    $DOC.off('mousemove.resize')
    $DOC.off('mouseup.resize')


    let css            = offsetEl.css,
        elStyle        = offsetEl.elStyle,
        pElStyle       = offsetEl.pElStyle,
        pElInnerWidth  = parseFloat(pElStyle.width) - parseFloat(pElStyle.borderLeftWidth) - parseFloat(pElStyle.borderRightWidth),
        pElInnerHeight = parseFloat(pElStyle.height) - parseFloat(pElStyle.borderTopWidth) - parseFloat(pElStyle.borderBottomWidth)

    if (css.left) {
      css.left = css.left.indexOf('%') !== -1 ? (parseFloor(parseFloat(elStyle.left) / pElInnerWidth * 100) + '%') : parseFloat(elStyle.left) + 'px'
    }
    if (css.top) {
      css.top = css.top.indexOf('%') !== -1 ? (parseFloor(parseFloat(elStyle.top) / pElInnerHeight * 100) + '%') : parseFloat(elStyle.top) + 'px'
    }
    if (css.width) {
      css.width = css.width.indexOf('%') !== -1 ? (parseFloor(parseFloat(elStyle.width) / pElInnerWidth * 100) + '%') : parseFloat(elStyle.width) + 'px'
    }
    if (css.height) {
      css.height = css.height.indexOf('%') !== -1 ? (parseFloor(parseFloat(elStyle.height) / pElInnerHeight * 100) + '%') : parseFloat(elStyle.height) + 'px'
    }
    if (css.minHeight) {
      css.minHeight = css.minHeight.indexOf('%') !== -1 ? (parseFloor(parseFloat(elStyle.height) / pElInnerHeight * 100) + '%') : parseFloat(elStyle.height) + 'px'
    }

    if (offsetEl.mode === 'module-list' && offsetEl.direction === 's') {
      resizeRelativePositionVertical(offsetEl.info)
    }

    $BODY.removeClass(BODY_RESIZING_MODULE)
    offsetEl.$el.removeClass(COMMON_RESIZING_MODULE)
    offsetEl.$el.removeAttr('style')
  }
}
