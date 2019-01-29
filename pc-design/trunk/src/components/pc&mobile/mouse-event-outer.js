import $ from 'jquery'
import { $DOC } from './common/constant-dom'
import dataEdit from './common/data-edit'
import dataCache from './common/data-cache'


/**
 * 事件关系
 *
 * 如果选中模块
 * mouseDownAssist
 * move-content-dom mousedown  会阻止 mouse-event-outer整个事件的触发
 * mouseUpAssist
 * move-content-dom mouseup
 *
 *
 * 如果没有选中模块
 * mouse-event-outer mousedown.outer
 * mouse-event-outer mouseup.outer
 */

export default function () {
  $DOC.off('mousedown.outer')
  $DOC.on('mousedown.outer', e => {
    let $target = $(e.target)
    if(!$target.closest('.pc-module-wb').length){
      dataCache.editModuleName = undefined
    }
    dataCache.isShowContextMenu = false

    $DOC.on('mouseup.outer', mouseUp)
  })

  function mouseUp(e) {
    //console.log('mouse-event-outer mouseup')
    $DOC.off('mouseup.outer')
    /*if($target.hasClass('col-mark') || $target.hasClass('container-wrapper')){
      dataEdit.removeAll()
    }*/
    if(e.which === 1 && !dataCache.selectRangeIsMoved){
      dataEdit.removeAll()
    }

  }
}
