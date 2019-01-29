import $ from 'jquery'
import {dataEdit, dataPage, dataSite, dataCache, constant, constantDom} from '../common'
const { $fp } = constant
const {
  COL_MARK,
  CONTENT_BOX_HEAD, CONTENT_BOX_INNER, CONTENT_BOX_FOOT, CONTAINER_WRAPPER, BODY_SELECT_RANGE,
  $DOC, $BODY, $SELECT_RANGE_MASK,
} = constantDom

export default function () {
  let offsetEl,
      indexCon,
      indexCol,
      disX, disY, left, top, css,
      $fromPoint,
      dataConfig,
      $whichContentBox

  $DOC.undelegate(COL_MARK, 'mousedown.selectRange')
  $DOC.delegate(COL_MARK, 'mousedown.selectRange', function (e) {
    if (e.which !== 1 || e.target !== e.currentTarget || dataCache.isPreview) {
      return
    }

    let $this        = $(this)
    indexCol         = $this.index()
    indexCon         = $this.closest(CONTAINER_WRAPPER).index()
    $whichContentBox = null
    dataConfig       = null
    $fromPoint       = $fp(e.pageX, e.pageY)

    dataCache.selectRangeIsMoved = false

    offsetEl = {
      pageX: e.pageX,
      pageY: e.pageY,
      left : e.offsetX,
      top  : e.offsetY,
    }

    $DOC.on('mousemove.selectRange', mouseMove)
    $DOC.on('mouseup.selectRange', mouseUp)
  })

  function mouseMove(e) {
    if (!dataCache.selectRangeIsMoved) {
      dataCache.selectRangeIsMoved = true

      $BODY.addClass(BODY_SELECT_RANGE)
      $fromPoint.append($SELECT_RANGE_MASK)

      if (($whichContentBox = $fromPoint.closest(CONTENT_BOX_INNER)).length) {
        dataConfig = dataPage.get('config')
      }
      else if (($whichContentBox = $fromPoint.closest(CONTENT_BOX_HEAD)).length) {
        dataConfig = dataSite.get('headConfig')
      }
      else if (($whichContentBox = $fromPoint.closest(CONTENT_BOX_FOOT)).length) {
        dataConfig = dataSite.get('footConfig')
      }
    }

    disX = e.pageX - offsetEl.pageX
    disY = e.pageY - offsetEl.pageY

    if (disX < 0) {
      left = offsetEl.left + disX
    }
    else {
      left = offsetEl.left
    }

    if (disY < 0) {
      top = offsetEl.top + disY
    }
    else {
      top = offsetEl.top
    }

    css = {
      width : Math.abs(disX),
      height: Math.abs(disY),
      top,
      left,
    }

    $SELECT_RANGE_MASK.css(css)
  }


  function isInRange(module, css) {
    if (module.sequence !== indexCol) {
      return false
    }

    let elStyle = module.assist.elStyle,
        left    = parseFloat(elStyle.left),
        top     = parseFloat(elStyle.top),
        width   = parseFloat(elStyle.width),
        height  = parseFloat(elStyle.height)

    if (css.left < left + width && css.left + css.width > left && css.top < top + height && css.top + css.height > top) {
      return true
    }
    else {
      return false
    }
  }

  function mouseUp(e) {
    $DOC.off('mousemove.selectRange')
    $DOC.off('mouseup.selectRange')

    if (dataCache.selectRangeIsMoved && $whichContentBox && $whichContentBox.length) {
      dataEdit.removeAll()

      dataConfig[indexCon].children.forEach(obj => {
        let info = obj.info

        //console.log(info)

        if (isInRange(info, css) && !info.sysLock && !info.lock.d) {
          dataEdit.push(info.assist.dAssist())
        }
      })
    }

    $SELECT_RANGE_MASK.remove()
    $BODY.removeClass(BODY_SELECT_RANGE)

    return false
  }
}
