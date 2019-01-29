import $ from 'jquery'
import dataEdit from '../common/data-edit'
import { $DOC } from '../common/constant-dom'
import dataCache from '../common/data-cache'

export default function () {
  let _this = this

  //$doc.delegate('.drag-handle', 'contextmenu', function (e) {
  $DOC.delegate('.module-assist', 'contextmenu', function (e) {//console.log('contextmenu')

    if($(this).parent('.container-wrapper').length){
      dataCache.isShowContextMenu = false
      return
    }

    let top,
        docHeight = $DOC.height(),
        elemHeight = $(_this.$el).height

    if(e.clientY + elemHeight > docHeight){
      top = docHeight - elemHeight
    }else{
      top = e.clientY
    }

    _this.first = dataEdit.first()
    _this.cmStyle.left = e.clientX + 'px'
    _this.cmStyle.top = top + 'px'
    dataCache.isShowContextMenu = true

    return false
  })
}